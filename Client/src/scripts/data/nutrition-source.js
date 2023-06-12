import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class NutritionSource {
  static async getNutrition(query) {
    const response = await axios.get(
      `${API_ENDPOINT.SEARCH_NUTRITION(query)}`,
      {
        headers: {
          'X-Api-Key': CONFIG.NUTRITION_API_KEY,
        },
      },
    );
    return response.data;
  }
}

export default NutritionSource;
