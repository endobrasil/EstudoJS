const user={
	nome :'andre',
	ultimoNome: 'brasil'	
};

function getUserWithFullName(user) {
	return {
		...user,
		fullName: '${user.nome} ${user.ultimoNome'
	}
}

const userWithFullName=getUserWithFullName(user);

console.log(userWithFullName, user);



const estudantes=[
	{
		nome:'andre',
		nota:7
	},
	{
		nome:'wendel',
		nota:8
	},
	{
		nome: 'farofa',
		nota:4
	}
];

function getAprovados(lista){
	return lista.filter(estudantes=>estudantes.nota>=7);
}

console.log('Lista de alunos\n');
console.log(estudantes)

console.log('Alunos aprovados');
console.log(getAprovados(estudantes));

