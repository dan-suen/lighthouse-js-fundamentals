const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

for (let j = 0; j < ingredients.length; j++){
  console.log(ingredients[j]);
}

array1 = ingredients.reverse();
for (let x = 0; x < array1.length; x++){
  console.log(array1[x]);
}
