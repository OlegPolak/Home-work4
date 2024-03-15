function Calculator() {

    this.read = function () {
        this.x = +prompt('Напишіть перше будь яке число');
        this.y = +prompt('Напишіть друге будь яке число');
    }
    
    this.sum = function () {
        return this.x + this.y;
    }

    this.mul = function () {
        return this.x * this.y;
    }
}

let calculator = new Calculator();
calculator.read();

alert('Сума двох чисел = ' + calculator.sum());
alert('Добуток двох чисел = ' + calculator.mul());
