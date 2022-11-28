let user={
	nome: 'Andre'
};
console.log(user);

user.nome='Wendel';
console.log(user);

user['nome']='andreWendel';

console.log(user);

const prop='nome';

user[prop]='andreWendelFreire';

console.log(user);

user.lastName='Brasil'

delete user.name;

console.log(user);


//recupera as chaves do objeto
console.log('propriedades: ',Object.keys(user));

//recupera os valores das chaves
console.log('valores das propriedades',Object.values(user));

//retorna um array de array contendo [nome_prop, valor_prop]
console.log('lista de propriedades e valores',Object.entries(user));

//mergear propriedades de objetos
Object.assign(user,{fullName: 'Andre wendel freire brasil'});

console.log('Adicipna propriedade full name no objeto usuer', user);
console.log('retorna um novo objeto mergeando dois ou mais objetos', Object.assign({},user,{idade:37}));

//previne rodas as alterações em um objeto
const newObj={foo: 'bar'};
Object.freeze(newObj);

newObj.foo='changes';
delete newObj.foo;
newObj.bar='foo';

console.log('variaveis newObj após as alterações: ',newObj);

//permite apenas a alteração de propriedades existentes em um objeto
const person={nome:'Andre'};
Object.seal(person);

person.nome='andre wendel';
delete person.nome;
person.age=26;

console.log('pessoa após as alterações',person);