export interface Recipe {
  id: string;
  name: string;
  category: string;
  image: string;
  ingredients: Ingredient[];
  directions: string[];
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export function getRecipeID(name: string) {
  return name.replace(/\s/g, '-').replace(/'/g, '').toLowerCase();
}
