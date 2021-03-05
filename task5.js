// Переписать консольное приложение из задания task4 на классы

class ElectroDevice {
    constructor(name, model, cost, power) {
        this.name = name,
        this.model = model,
        this.cost = cost,
        this.power = power,
        this.state = false;
    }
    switchON_OFF() {
        this.state = !this.state;
        console.log(`The ${this.name} ${this.model} is ${this.state ? 'on' : 'off'}`);
    }
    getPower() {
        console.log(`The power of ${this.name} ${this.model} is ${this.power} W`);
    }
}



// функция-конструктор Компьютер:
class Computer extends ElectroDevice {
    constructor(name, model, cost, ram, lengthOfDiagonal, power) {
        super(name, model, cost, power),
        this.ram = ram,
        this.lengthOfDiagonal = lengthOfDiagonal
    }
    getInfo() {
        console.log(`The ${this.name} ${this.model} cost ${this.cost} and has ${this.ram} RAM`);
    }
}


//функция-конструктор Стиральная машина:
class Washer extends ElectroDevice {
    constructor(name, model, cost, weight, volume, power) {
        super(name, model, cost, power),
        this.weight = weight,
        this.volume = volume
    }
    orderWasher() {
        console.log(`The ${this.name} ${this.model} (weight: ${this.weight}, volume: ${this.weight}) ordered. It is cost ${this.cost}`);
    }
}

const comp = new Computer('HomePC', 'HP', '500$', '16GB', '15,6', 34);
comp.switchON_OFF();
comp.getInfo();
comp.getPower();
console.log('---------------')
const washer = new Washer('Washing machine', 'LG', '300$', '30kg', '5kg', 21);
washer.switchON_OFF();
washer.orderWasher();
washer.switchON_OFF();
washer.getPower();