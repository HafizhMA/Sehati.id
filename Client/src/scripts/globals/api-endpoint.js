import CONFIG from './config';

const API_ENDPOINT = {
  ALL_RECIPE_CATEGORY: `${CONFIG.RECIPE_BASE_URL}/categories.php`,
  RECIPE_CATEGORY: (id) => `${CONFIG.RECIPE_BASE_URL}/filter.php?c=${id}`,
  RECIPE_DETAIL: (id) => `${CONFIG.RECIPE_BASE_URL}/lookup.php?i=${id}`,
  SEARCH_RECIPE: (keyword) => `${CONFIG.RECIPE_BASE_URL}/search.php?s=${keyword}`,
  SEARCH_NUTRITION: (keyword) => `${CONFIG.NUTRITION_BASE_URL}/nutrition?query=${encodeURIComponent(keyword)}`,
};

export default API_ENDPOINT;
