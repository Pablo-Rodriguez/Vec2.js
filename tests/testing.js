
//Forma de evaluar resultados e comprobar de forma grafica se pasa o test
function assert(outcome, description, assertWhere) {
	var wh;
	if(typeof this.where !== 'undefined') {
		wh = this.where;
	}else {
		wh = assertWhere;
	}
	var text = outcome ? 'PASS: ' : 'FAIL: ';
	text += description;
	if(!wh){
		console.log(text);
	}else{
		if(!testOutput){
			var testOutput = document.getElementById('testOutput');
		}
		var li = document.createElement('li');
		li.className = outcome ? 'pass' : 'fail';
		li.appendChild(document.createTextNode(text));

		testOutput.appendChild(li);
	}
};

//Forma corta de console.log debido a cantidade
//de veces que se pode escribir ao facer debugging
function log(message) {
	console.log(message);
}

//Para grupos de assertions con un titulo común
function test(testName, fn, where){
	var text = testName;
	this.where = where;
	if(!this.where){
		console.log(text);
	}else{
		if(!testOutput){
			var testOutput = document.getElementById('testOutput');
		}
		var title = document.createElement('h2');
		title.innerHTML = text;
		testOutput.appendChild(title);
	}
	fn.call(this);
};

//Pensando en esas cosas raras que hace javascript con las cuentas
//Funcion para ver si un numero es igual a otro con un rango de error aceptable
function aprox (num, eq, err) {
	return (eq < num + err) && (eq > num -err);
};

/*
	test('vec2 probas', function(){
		assert();
	});
*/