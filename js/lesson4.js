/**1 */

// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//     return (age>=18) ? true : confirm('Батьки дозволили?');
// }
// checkAge(12);

// function checkAge(age) {
//     return (age>=18) || confirm('Батьки дозволили?');
// }
// checkAge(23);

/**2 */

// function minNumber(a, b) {
//   if (a < b) {
//     return console.log(a);;
//   } else {
//     return console.log(b);;
//   }
// }

// minNumber(10, 30);

/**3 */

// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => { 
//    if (confirm(question)) yes();
//    else no();

// }
// ask("Ви згодні?",
// () => { alert("Ви погодились."); },
// () => { alert("Ви скасували виконання."); }
// );