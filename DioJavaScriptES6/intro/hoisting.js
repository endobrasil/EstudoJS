function fn() {
	console.log(text);
	var text = 'Exemplo';
	console.log(text);
}

fn();

function fn2() {
	function log(value){
		console.log(value);
	}

	log('hoisting de função');

}

fn2();