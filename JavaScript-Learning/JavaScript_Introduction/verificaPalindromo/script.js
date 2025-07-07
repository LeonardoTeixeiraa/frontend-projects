function verificaPalindromo(string){
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
    
}

console.log("-----------Primeira Solução-----------");
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("gato"));

function verificarPalindromo(string){
    if (!string) return "String inexistente";
    
    for (let i = 0; i < string.length; i++) {
       if (string[i] !== string[string - 1 - i]) {
            return false;
       }
    } return true;
}

console.log("-----------Segunda Solução-----------");
console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("Maria"));