function pow(num, exponent){
  let result = 1
  for (let i = 0; i < exponent; i++){ result *= num }
  return result
}

function fact(num){
  let result = 1
  for (let i = 1; i <= num; i++) { result *= i }
  return result
}

function sen(angle){
  const theta = (3.14159265359 * angle) / 180
  let result = 0
  let termsing = 1
  _power = 1

  for (let i = 0; i < 21; i++){
    result += (pow(theta, _power) / fact(_power)) * termsing
    termsing *= -1
    _power += 2
  }
  return result.toFixed(3)
}

function cos(angle){
  const theta = (3.14159265359 * angle) / 180
  let result = 0
  let termsing = 1
  _power = 0

  for (let i = 0; i < 21; i++){
    result += (pow(theta, _power) / fact(_power)) * termsing
    termsing *= -1
    _power += 2
  }
  return result.toFixed(3)
}

function tan(angle){
  return (sen(angle)/cos(angle)).toFixed(3)
}

function cot(angle){
  return (cos(angle)/sen(angle)).toFixed(3)
}

function csc(angle){
  return (1/sen(angle)).toFixed(3)
}

function sec(angle){
  return (1/cos(angle)).toFixed(3)
}

function update(){
  const angle = document.getElementById("input").value

  for (let i of ["sen", "cos", "tan", "csc", "sec", "cot"]){
    document.getElementById(i).innerHTML = `${i.charAt(0).toUpperCase()+i.slice(1)}: ${window[i](angle)}`
  }
}