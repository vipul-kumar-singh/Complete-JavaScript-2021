import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.cooking_time,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    // Temporary Error Handling
    console.error(`${err} 🔥🔥🔥`);
    throw err;
  }
};
