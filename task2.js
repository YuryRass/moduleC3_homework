// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function checkObject(str, obj) {
    return str in obj;
}

const obj = {2: 4, '343': 44, 'bkd': '343', 'ew': true};
const res = checkObject(2, obj);
console.log(res)