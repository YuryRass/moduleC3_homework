// Написать, функцию, которая принимает в качестве аргумента объект и
// выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.


function printPropertiesOfObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} -> ${obj[key]}`)
        }
    }
}

const obj = {1:'3434', 'dfd': 8034, true:'blabla'};
const ownObj = Object.create(obj)
ownObj.name = 'dfdfd'
ownObj[23] = '3434'

printPropertiesOfObject(ownObj)