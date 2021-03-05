// Определить иерархию электроприборов. 
// Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectroDevice(name, model, cost, power) {
    this.name = name,
    this.model = model,
    this.cost = cost,
    this.power = power,
    this.state = false
}

ElectroDevice.prototype.switchON_OFF = function() {
    this.state = !this.state;
    console.log(`The ${this.name} ${this.model} is ${this.state ? 'on' : 'off'}`);
}

ElectroDevice.prototype.getPower = function() {
    console.log(`The power of ${this.name} ${this.model} is ${this.power} W`)
}

// функция-конструктор Компьютер:
function Computer(name, model, cost, ram, lengthOfDiagonal, power) {
    this.name = name,
    this.model = model,
    this.cost = cost,
    this.ram = ram,
    this.lengthOfDiagonal = lengthOfDiagonal,
    this.power = power
}

Computer.prototype = new ElectroDevice();

Computer.prototype.getInfo = function() {
    console.log(`The ${this.name} ${this.model} cost ${this.cost} and has ${this.ram} RAM`)
}

//функция-конструктор Стиральная машина:
function Washer(name, model, cost, weight, volume, power) {
    this.name = name,
    this.model = model,
    this.cost = cost,
    this.weight = weight,
    this.volume = volume,
    this.power = power
}

Washer.prototype = new ElectroDevice();

Washer.prototype.orderWasher = function() {
    console.log(`The ${this.name} ${this.model} (weight: ${this.weight}, volume: ${this.weight}) ordered. It is cost ${this.cost}`)
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
