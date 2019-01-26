function totalDigitRekursif(angka) {
  // you can only write your code here!
  if(angka.length === 0){
    return 0
  }
  var huruf = angka.toString()
  var firstIndex = huruf[0]
  var remainIndex = huruf.slice(1)
  // console.log(firstIndex, "===", remainIndex)
  var angka = parseInt(firstIndex)
  return angka + totalDigitRekursif(remainIndex)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5