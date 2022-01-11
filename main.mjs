'use strict'
import { Rectangle as Rect, Circle } from './graph.mjs'
import demo from './graph.mjs'

demo()
console.log(new Rect(), new Circle())
process.exit()
/* Unit 1. Objects */

const s1 = new Object() // создание объекта вызовом конструктора
s1.name = 'John'
s1.age = 20
s1.avgScore = 10.5
console.log(s1)

const s2 = {} // создание объекта литералом
s2.name = 'Bill'
s2.age = 20
s2.avgScore = 10.0
console.log(s2)

const s3 = {
    name: 'Mary',
    age: 19,
    avgScore: 11.0
} // создание объекта литералом с заданием начальных свойств и их значений
// s3.salary = 30000
console.log(s3)

let string1 = 'Demo String'
let string2 = string1
string2 = string2 + '!'
console.log(string1, string2)

/* const s4 = s3
s4.avgScore = 11.5
console.log(s3, s4) */

// const s4 = JSON.parse(JSON.stringify(s3))

let s4 = JSON.stringify(s3)
s4 = JSON.parse(s4)

s4.avgScore = 11.5
console.log(s3, s4)

console.log(s4.avgScore)
console.log(s4['avgScore'])

// delete s4.avgScore
// delete s4['avgScore']

// console.log(s4.avgScore)

// let avgScore = 9.0
/*let avgScore
console.log(avgScore)

f(s1)

function f(x) {
    console.log(`value: ${JSON.stringify(x)}, type: ${typeof x}`)
}

/* const f = function (x) {
    console.log(`value: ${JSON.stringify(x)}, type: ${typeof x}`)
}

f(s1)*/

// конструктор объектов типа "Студент"
/* function Student () {
    this.name = ''
    this.age = 0
    this.avgScore = 0
}

console.log(new Student()) */

/* function Student () {
    const tmp = {}
    tmp.name = ''
    tmp.age = 0
    tmp.avgScore = 0
    return tmp
} */

/* const st1 = Student()
st1.name = 'Noname1'
console.log(st1)
console.log(Student()) */
// console.log(new Student())

/* const n1 = Number('42')
console.log(n1 + 0)

const n2 = new Number('42')
console.log(n2 + 0)

console.log(typeof n1, typeof n2) */

function Student (name, age, avgScore) {
    // console.log(typeof new.target)
    // console.log(new.target())
    // если функция сейчас вызывается без new
    if (!new.target) {
        // прекратить выполнение ф-ции
        // вызвать ф-цию корректно - со словом new
        // вернуть результат - созданный объект
        return new Student(name, age, avgScore)
    }
    this.name = name || ''
    this.age = age || 0
    this.avgScore = avgScore || 0
}
const st100 = Student()
st100.name = 'sdfgrhtj'
st100.age = 21
st100.avgScore = 10.0
console.log(st100)

const st101 = Student('noname2', 21, 9)
console.log(st101)

/* Unit 2. Classes */

class StudentModel {
    // закрытое свойство: запрещено его прямое чтение/запись вне кода класса StudentModel
    #email
    // параметры по умолчанию
    constructor(name = '', age = 0, avgScore = 0, email = '') {
        // методы
        this.setEmail = function (email) {
            if (/^[a-z0-9]{1,25}@[a-z]{1,16}(\.[a-z]{2,3}){1,2}$/.test(email)) {
                this.#email = email
            } else {
                throw new Error("Incorrect email!")
            }
        }
        this.getEmail = function () {
            return this.#email
        }
        /* this.toString = function () {
            return `StudentModel: {name: ${this.name}, email: ${this.#email}}`
        } */
        // свойства
        this.name = name
        this.age = age
        this.avgScore = avgScore
        if(email !== ''){
            this.setEmail(email)
        }
    }
    // статический метод для создания экземпляров (объектов) данного типа
    static createInstance (name, age, avgScore, email) {
        const sm = new StudentModel(name, age, avgScore, email)
        // запрет расширять объект новыми свойствами
        Object.preventExtensions(sm)
        return sm
    }
}

StudentModel.prototype.toString = function () {
    return `StudentModel: {name: ${this.name}, email: ${this.getEmail()}}`
}

const st102 = new StudentModel('noname3', 23, 9.5)
console.log(st102)

const st103 = new StudentModel()
console.log(st103)

// Test
function Movie() {
    this.title = ''
    this.rating = 0
    this.duration = 0
}

const movie1 = new Movie()
movie1.title = 'Star Wars'
movie1.rating = 4.5
movie1.duration = 1.2
console.log(movie1)

let movie2 = new Movie()
movie2.title = 'Big fish'
movie2.rating = 4.2
movie2.duration = 1.5
console.log(movie2)

//TDD to check if objects are unique or not
if (movie1 === movie2){
    console.log('Objects are identical')
}else{
    console.log('Objects are unique')
}

console.log(movie1 instanceof Object)
if(movie1 instanceof Movie) {
    // code
    const movie1 = {}
    // code
}
// const movie1 = {}
// SOLID
console.log(movie1)

/* Methods */
function cylinderSquare (r, h) {
    return 2 * Math.PI * r * (r + h)
}

// console.log(cylinderSquare(10, 20))

const cylinder1 = {
    r: 10,
    h: 20/* ,
    s: 1885 */
}

cylinder1.s = cylinderSquare(cylinder1.r, cylinder1.h)

console.log(cylinder1)

const cylinder2 = {
    r: 10,
    h: 20,
    // wrong!
    /* cylinderSquare: () => {
        const r = this.r
        const h = this.h
        return 2 * Math.PI * r * (r + h)
    } */
    // correct!
    cylinderSquare: function () { // method
        const r = this.r
        const h = this.h
        return 2 * Math.PI * r * (r + h)
    }
}

console.log(cylinder2.cylinderSquare())

const sm4 = new StudentModel()
// Object.freeze(sm4)
Object.preventExtensions(sm4)

// const newObject = Object.create(null)
// console.log('newObject = ', newObject)

try {
    sm4.setEmail("tyaaukr.net") // tyaa@ukr.net
    console.log(sm4)
} catch (ex) {
    console.log(`Example 1: ${ex.message}`)
}

try {
    sm4.setEmail("tyaa2ukr.net")
    console.log(sm4)
} catch (ex) {
    console.log(`Example 2: ${ex.message}`)
}

try {
    sm4.setEmail("tyaa@ukr.net")
    console.log(sm4)
} catch (ex) {
    console.log(`Example 3: ${ex.message}`)
}

try {
    sm4.setEmail("tyaa@ukrnet")
    console.log(sm4)
} catch (ex) {
    console.log(`Example 4: ${ex.message}`)
}

try {
    sm4.setEmail("tyaa@ukr.net.in.ua")
    console.log(sm4)
} catch (ex) {
    console.log(`Example 5: ${ex.message}`)
}

// console.log(`Hello\n\n`)
// sm4.setEmail("incorrect_email")
// sm4.setEmail("tyaa@ukr.net")
// sm4.email = "incorrect_email"
// console.log(sm4.getEmail())
// console.log(sm4.toString())
sm4.name = 'Testname'
// sm4.#email = ''
// console.log(sm4.#email)
// sm4.email123 = '123'
console.log(sm4.email123)
console.log(sm4 + '')

const sm5 = StudentModel.createInstance('sdfsg', 19, 11, 'test@test.ua')
// sm5.newProp = 'asdfgkjl'
console.log(sm5 + '')

