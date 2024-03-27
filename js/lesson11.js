/**1 */

// function printNumbers(from, to) {
//   let now = from;

//   let timerId = setInterval(() =>  {
//     console.log(now);
//     if (now == to) {
//       clearInterval(timerId);
//     }
//     now++;
//   }, 1000);
// };

// printNumbers(0, 5);


// function printNumbers(from, to) {
//   let now = from;

//   setTimeout(function go() {
//     console.log(now);
//     if (now < to) {
//       setTimeout(go, 1000);
//     }
//     now++;
//   }, 1000);
// }

// printNumbers(0, 5);

/**2 */

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));