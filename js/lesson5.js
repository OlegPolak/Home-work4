/**1 */

// const studyInfo = {
//     name: "name",
//     specialty: "Cook",
//     GPA: 10,
//     missed: 0,
//     logInfo: function () {
//         console.group(`${name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Specialty is ${this.specialty}`);
//         console.log(`GPA is ${this.GPA}`);
//         console.log(`Missed classes is ${this.missed}`);
//         console.groupEnd();
//     },
// };

// const Vano = {
//     name: 'Ivan',
//     specialty: 'Cook',
//     GPA: 7,
//     missed: 30,
// };

// const Olga = {
//     name: 'Olga',
//     specialty: 'Stylist',
//     GPA: 9,
//     missed: 16,
// };

// const Kate = {
//     name: 'Kate',
//     specialty: 'Veterinarian',
//     GPA: 10,
//     missed: 3,
// };

// const Mary = {
//     name: 'Mary',
//     specialty: 'Teacher',
//     GPA: 11,
//     missed: 5,
// };

// studyInfo.logInfo.call(Vano);
// studyInfo.logInfo.call(Olga);
// studyInfo.logInfo.call(Kate);
// studyInfo.logInfo.call(Mary);

// studyInfo.logInfo.apply(Vano);
// studyInfo.logInfo.apply(Olga);
// studyInfo.logInfo.apply(Kate);
// studyInfo.logInfo.apply(Mary);

// studyInfo.logInfo.bind(Vano)();
// studyInfo.logInfo.bind(Olga)();
// studyInfo.logInfo.bind(Kate)();
// studyInfo.logInfo.bind(Mary)();


/**2 */

// const definition = {
//     showItem() {
// console.log('Визначення', this.item);
//     }
// };

// const htmlInfo = {
//     item: ["HTML-стандартизована мова розмітки документів для перегляду вебсторінок у браузері."],
// };
// const cssInfo = {
//     item: ["CSS-це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду."],
// };

// document.querySelector('#html').addEventListener('click', definition.showItem.bind(htmlInfo));
// document.querySelector('#css').addEventListener('click', definition.showItem.bind(cssInfo));

/**3 */

// banana 30, 4,5/ 135
// 2) cherry 58, 1,3/75.4
// 3) jrange 89. 3,4/302.6

const goods = {
    logInfo: function (goods, price, quantity) {
        console.group('Info:');
        console.log(`Goods is ${goods}`);
        console.log(`Price is ${price}`);
        console.log(`Quantity is ${quantity}`);
        console.groupEnd();
    }
};

goods.logInfo.apply( '',['banana', 30, 4.5]);
goods.logInfo.apply( '',['cherry', 58, 1.3]);
goods.logInfo.apply('', ['orange', 89, 3.4]);



const goods2 = {
    logInfo: function (goods, cost) {
        console.group('Info:');
        console.log(`Goods is ${goods}`);
        console.log(`Cost is ${cost}`);
        console.groupEnd();
    }
};

goods2.logInfo.apply( '',['banana', (30*4.5)]);
goods2.logInfo.apply( '',['cherry', (58*1.3)]);
goods2.logInfo.apply( '',['orange', (89*3.4)]);




