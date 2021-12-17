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

function Student () {
    // console.log(typeof new.target)
    // console.log(new.target())
    // если функция сейчас вызывается без new
    if (!new.target) {
        // прекратить выполнение ф-ции
        // вызвать ф-цию корректно - со словом new
        // вернуть результат - созданный объект
        return new Student()
    }
    this.name = ''
    this.age = 0
    this.avgScore = 0
}
const st100 = Student()
st100.name = 'sdfgrhtj'
// ...
console.log(st100)
