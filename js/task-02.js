const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const findIngredients = document.querySelector(' #ingredients');

const makingIngredients = ingredients.map(ingredient => {
  const addingIngredients = document.createElement('li');
  addingIngredients.textContent = ingredient;
  addingIngredients.classList.add('item');
  return addingIngredients
});


findIngredients.append(...makingIngredients);





