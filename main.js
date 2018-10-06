const numberArray = [];
var newPlacement = document.getElementById("outputPlace");

let numberBlock = document.createElement("p");

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  numberArray[currentNumber] = currentNumber;
  if (currentNumber % 5 === 0 && currentNumber % 7 != 0) {
      numberArray[currentNumber]="Chicken";
 
  };
  if (currentNumber % 7 === 0 && currentNumber % 5 != 0) {
    numberArray[currentNumber]="Monkey";
  }; 
  if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
    numberArray[currentNumber]="ChickenMonkey";
  }; 
  let numberElement = document.createElement("p");
  let numberNode = document.createTextNode(numberArray[currentNumber]);
  numberElement.appendChild(numberNode);
  numberBlock.appendChild(numberElement);
  

};
document.getElementById("outputPlace").appendChild(numberBlock);