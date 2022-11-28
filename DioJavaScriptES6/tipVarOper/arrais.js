const ussers =['andre','wendel','brasil'];

const sexo={
	homi: Symbol('H'),
	mule: Symbol('M')
}

const pessoas=[
{
	nome: 'andre',
	idade: 37,
	sexo:sexo.homi
},

{
	nome: 'wendel',
	idade:36,
	sexo:sexo.mule
},

{
	nome: 'maire',
	idade: 13,
	sexo:sexo.mule
}
];

//retorna a quantidade de itens
console.log('Itens:',pessoas.length);

//verifica se é array
console.log('verifica se é array', Array.isArray(pessoas));

//interar os itens do array
pessoas.forEach((pessoas, index, arr)=>{
	console.log(`Nome: ${pessoas.name} index: ${index}`,arr);
});

//filtra array
const homis=pessoas.filter(pessoas=>pessoas.sexo===sexo.homi);
console.log('lista só de homis',homis);