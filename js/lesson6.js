// class Abonent {
//     constructor(options) {
//         this.name = options.name;
//         this.number = options.number;
//         this.country = options.country;
//     }
//     firstName = '';
//     lastName = '';
//     number = '';
//     country = '';

//     set name(newName) {
//         const nameRow = newName.split(' ');
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }

//     get name() {
//         return `First name: ${this.firstName} Last name: ${this.lastName}`;
//     }

//     get number() {
//         return `Contact number: ${this.number} Country: ${this.country}`;
//     }
// }

// const user1 = new Abonent({
//     name: 'Mary Nowak',
//     number: +48000000024,
//     country: "Poland"
// });

// const user2 = new Abonent({
//     name: 'Ivan Miller',
//     number: +380990000012,
//     country: 'Ukraine'
// });

// const user3 = new Abonent({
//     name: 'Kate Moore',
//     number: +441710000031,
//     country: 'Great Britain'
// });

// console.log(user1);
// console.log(user2);
// console.log(user3);

