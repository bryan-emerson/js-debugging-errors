





function createSequence( max ) {
  let sequence = [1, 1]


  for (let i = 2; i < max; i++) {
  let a = sequence[i - 1]
  let b = sequence[i - 2]
  sequence.push(a + b)

//   while (i <= max) {
//      var a = 1, b = 1
//   }
// }
  return sequence
  }
}
let fibonaci = createSequence(50);
console.log(fibonaci);