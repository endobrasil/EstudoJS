const symbol1=Symbol();
const symbol2=Symbol();

//symbols são únicos
console.log('symbol1 é igaul a symbol2',symbol1===symbol2);


const nomeSymbol1=Symbol('nome');
const nomeSymbol2=Symbol('nome');

console.log('Nome symbol1 é igaul a Nome symbol2',nomeSymbol1===nomeSymbol2);

const user={
	[nomeSymbol1]:'andre',
	[nomeSymbol2]:'wendel',
	ultimoNome: 'Brasil'
}

console.log(user);

//simbolos criam propriedades que não são enumeradas

for(const key in user){
	if(user.hasOwnProperty(key)){
		console.log(`valor da chave ${key}: ${user[key]}`);
	}
}