/**1 */

// if (1 > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (0 === 0) {
//     console.log(true);
// } else {
//     console.log('equally');
// }

// if (-3 > 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

/**2 */

// const one = "test";
// if (one) {
//     console.log(true);
// }

// const two = "qwerty";
// if (two) {
//     console.log(true);
// }

/**3 */

// const num = 1;
// const num = 10;
// const num = 13;

// if (num > 10) {
//     console.log(num - 5);
// } else if (num<10) {
//     console.log(num + 5);
// } else if (num === 10) {
//     console.log('equally');
// }

/**4 */

// const num = prompt('Введіть число від 1 до 12!!');
// let month;

// switch (num) {
//     case "1":
//         month = "Січень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "2":
//         month = "Лютий";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "3":
//         month = "Березень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "4":
//         month = "Квітень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "5":
//         month = "Травень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "6":
//         month = "Червень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "7":
//         month =  "Липень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "8":
//         month = "Серпень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "9":
//         month = "Вересень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "10":
//         month = "Жовтень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "11":
//         month = "Листопад";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
//     case "12":
//         month = "Грудень";
//         alert(`Номер ${num} є місяць ${month}`);
//         break;
    
//     default:
//         alert(`За введеним номером місяця не має`)
// }

/**5 */

const num = prompt("Введіть любе трьохзначне число");

let arr = String(num).split('');
console.log(arr);
let sum = 0;
for (let digit of arr) {
    sum += Number(digit);
}
console.log(sum);
alert(sum)

