// Comentário inicial
function returnEvenValues(array) {
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    }
  }
  return evenNums;
}

let numbers_list = [2, 4, 5, 8, 20, 10, 9];

// Lista todos os números pares dentro do array
if (returnEvenValues(numbers_list).length > 0) {
  console.log(returnEvenValues(numbers_list));
} else {
  console.log("Não há elementos pares no array");
}
