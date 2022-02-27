function fact(num){
	let result = 1
	for (let i = 1; i <= num; i++) { result *= i }
	return result
}

function textSize(size){
	for (let i of ["txt2", "txt3", "txt4", "txt5"]){
		document.getElementById(i).style.fontSize = `${size}em`
  	}
}

function update(){
	const exponent = document.getElementById("input").value

	//se reemplaza la formula de la derivada por la fucion f(x)=x^exponent
	document.getElementById("txt1").innerHTML = `lim h -> 0 ((x + h)^${exponent} - x^${exponent})/h`
	let binomiumInnerResult = ""

	for (var i = 1; i < exponent; i++) {
		binomiumInnerResult += (fact(exponent)/(fact(i)*fact(exponent-i))).toString()
		binomiumInnerResult += `(x${exponent-i < 2 ? "" : "^"+(exponent-i).toString()})`
		binomiumInnerResult += `(h${i > 1 ? "^"+(i).toString() : ""}) `
		binomiumInnerResult += "+ "
	}
	let secondLine = `(x^${exponent} + ${binomiumInnerResult}h^${exponent} - x^${exponent})/h`

	if(exponent > 6){
		textSize(2*(95/secondLine.length))
	}else{
		textSize(2)
	}

	//se resuelve el binomio al cuadrado
	document.getElementById("txt2").innerHTML = secondLine
	//se cancelan los terminos x^exponente
	document.getElementById("txt3").innerHTML = `(${binomiumInnerResult}h^${exponent})/h`

	binomiumInnerResult = ""
	for (var i = 1; i < exponent; i++) {
		binomiumInnerResult += (fact(exponent)/(fact(i)*fact(exponent-i))).toString()
		binomiumInnerResult += `(x${exponent-i < 2 ? "" : "^"+(exponent-i).toString()})`
		binomiumInnerResult += `${i>1?"(h":""}${i > 2 ? "^"+(i-1).toString() : ""}${i>1?")":""} `
		binomiumInnerResult += "+ "
	}
	//se halla factor comun de h a todos los terminos en el denominador
	document.getElementById("txt4").innerHTML = `h(${binomiumInnerResult}h${i > 2 ? "^"+(exponent-1).toString() : ""})/h`
	//se despeja el factor h por el divisor h
	document.getElementById("txt5").innerHTML = `${binomiumInnerResult}h${i > 2 ? "^"+(exponent-1).toString() : ""}`
	//lim h -> 0 | z`se eliminan todos los terminos con factor de h
	document.getElementById("txt6").innerHTML = `Resultado: ${exponent}x${i > 2 ? "^"+(exponent-1).toString() : ""}`
}