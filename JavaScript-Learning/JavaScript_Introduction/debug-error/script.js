function validaArray(arr, num) {
  try {
    if (!arr || !num) throw new ReferenceError("Envie os parâmetros");

    if (typeof arr !== "object")
      throw new TypeError("O Array precisa ser do tipo Object");

    if (typeof num !== "number")
      throw new TypeError("O Array precisa ser do tipo number");

    if (arr.length !== num)
      throw new RangeError(
        "Tamanho inválido, informe um numero correspondente ao comprimento do array"
      );

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este é um erro de ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este é um erro de TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este é um erro de RangeError");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado: " + e);
    }
  }
}

console.log(validaArray([], 2));
console.log(validaArray([1, 2], 5));
console.log(validaArray([1, 2, 3, 4, 5], 5));
