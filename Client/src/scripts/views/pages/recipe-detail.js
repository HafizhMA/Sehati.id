/* eslint-disable no-plusplus */
import RecipeSource from '../../data/recipe-source';
import NutritionSource from '../../data/nutrition-source';
import UrlParser from '../../routes/url-parser';
import { createRecipeDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <section id="detail-makanan"></section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipes = await RecipeSource.getRecipeDetail(url.id);
    const recipeContainer = document.querySelector('#detail-makanan');
    const ingredients = [];
    for (let i = 1; recipes[`strIngredient${i}`]; i++) {
      const ingredient = recipes[`strIngredient${i}`];
      const measure = recipes[`strMeasure${i}`];
      ingredients.push({ ingredient, measure });
    }

    const nutritionPromises = ingredients.map(
      async ({ ingredient, measure }) => {
        const query = `${measure} ${ingredient}`;
        const nutrition = await NutritionSource.getNutrition(query);
        return { ingredient, measure, nutrition };
      },
    );

    const nutritions = await Promise.all(nutritionPromises);
    nutritions.forEach(({ nutrition }) => {
      recipeContainer.innerHTML = createRecipeDetailTemplate(
        nutrition,
        recipes,
      );
    });
  },
};

export default Detail;
