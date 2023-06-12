import RecipeSource from '../../data/recipe-source';
import UrlParser from '../../routes/url-parser';
import { createRecipeCategoryTemplate } from '../templates/template-creator';

const Category = {
  async render() {
    return `
    <section id="heroRecipe" class="min-vh-100 d-flex align-items-center justify-content-center">
        <div class="container">
            <form class="d-flex justify-content-center" role="search">
                <input class="form-control me-4 w-75" type="search" placeholder="Search" aria-label="Search">
                <button class="btn text-white" type="submit" style="background-color: #00985B; padding: 10px 20px;">
                    <h5>Search</h5>
                </button>
            </form>
        </div>
    </section>
    <section id="recipecard">
            <div class="container">
                <div class="row" id="recipe-category"></div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const recipes = await RecipeSource.getCategoryRecipe(url.id);
    const recipesContainer = document.querySelector('#recipe-category');
    recipes.forEach((recipe) => {
      recipesContainer.innerHTML += createRecipeCategoryTemplate(recipe);
    });
  },
};

export default Category;
