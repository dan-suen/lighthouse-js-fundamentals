function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}



emotions  ("happy",laugh(num){
  let x = "";
  for (let i = 1; i <= num; i++){
      x = x + "ha";
      }
  x = x + "!";
  return x;
  });