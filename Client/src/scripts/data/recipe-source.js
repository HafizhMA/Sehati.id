import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RecipeSource {
  static async getAllCategory() {
    const response = await axios.get(API_ENDPOINT.ALL_RECIPE_CATEGORY);
    return response.data.categories;
  }

  static async getCategoryRecipe(id) {
    const response = await axios.get(API_ENDPOINT.RECIPE_CATEGORY(id));
    return response.data.meals;
  }

  static async getRecipeDetail(id) {
    const response = await axios.get(API_ENDPOINT.RECIPE_DETAIL(id));
    return response.data.meals[0];
  }

  static async searchRecipe(keyword) {
    const response = await axios.get(API_ENDPOINT.SEARCH_RECIPE(keyword));
    return response.data.meals;
  }
}

export default RecipeSource;
