function fn() {
	return 'codigo';
}

const arrowFn = () => 'código';

const arrowFn2=()=>{
	//mais de uma expressão
	return 'código'
}

//funções tambem sáo objetos

fn.prop='Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//recebendo parâmetros
const logValue=value =>console.log(value);
const logFnResult = fnParam=>console.log(fnParam());

logFnResult(fn);