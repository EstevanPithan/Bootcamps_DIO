const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(arr) {
  const mySet = new Set(arr)

  return [...mySet] //esses 3 pontos são um spread, um método de array
}

console.log(valoresUnicos(meuArray))
