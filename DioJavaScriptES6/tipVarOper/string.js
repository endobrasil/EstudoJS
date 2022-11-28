const texto="um texto qualquer xeso, drogas e código"

// retonra tamanho
const txtSize=texto.length;
console.log(`Quantidade de letras: ${txtSize}`);

// um array quebrado
const txtSplit=texto.split('x');
console.log('Array separado delimitadores: ',txtSplit);

//busca por um valor e substitui por outro
const txtReplace = texto.replace('texto','txt');
console.log('substitui o valor',txtReplace);

//retorna fatia de um valor
const lastCar=texto.slice(-1);
console.log('ultima letra de uma string',lastCar);