function aprox(num){
  return num.toFixed(3)
}

function power(num, exponent){
  var result = 1
  for (let i = 0; i < exponent; i++){
    result *= num
  }
  return result
}

function factorial(num){
  var result = 1
  for (let i = 1; i <= num; i++){
    result *= i
  }
  return result
}

function sin(angle){
  const theta = (3.14159265359 * angle) / 180
  var result = 0
  var termsing = 1
  _power = 1

  for (let i = 0; i < 21; i++){
    result += (power(theta, _power) / factorial(_power)) * termsing
    termsing *= -1
    _power += 2
  }
  return aprox(result)
}

function cos(angle){
  const theta = (3.141687 * angle) / 180
  var result = 0
  var termsing = 1
  _power = 0

  for (let i = 0; i < 21; i++){
    result += (power(theta, _power) / factorial(_power)) * termsing
    termsing *= -1
    _power += 2
  }
  return aprox(result)
}

function tan(angle){
  return aprox(sin(angle)/cos(angle))
}

function cot(angle){
  return aprox(cos(angle)/sin(angle))
}

function csc(angle){
  return aprox(1/sin(angle))
}

function sec(angle){
  return aprox(1/cos(angle))
}

function update(){
  const angle = document.getElementById("input").value

  document.getElementById("sen").innerHTML = `Sen: ${sin(angle)}`
  document.getElementById("cos").innerHTML = `Cos: ${cos(angle)}`
  document.getElementById("tan").innerHTML = `Tan: ${tan(angle)}`
  document.getElementById("csc").innerHTML = `Csc: ${csc(angle)}`
  document.getElementById("sec").innerHTML = `Sec: ${sec(angle)}`
  document.getElementById("cot").innerHTML = `Cot: ${cot(angle)}`
}