/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

function truncate(str, maxLength) {
  // your code
    let newStr = ``



for (let i = 0; i < str.length; i++) {}
    if (str.length > maxLength) {
        newStr = str.slice(0, maxLength) + `...`

    }
    else {
        newStr = str
    }
return newStr

}
console.log(truncate("Вот, что мне действительно нравится в этом", 20))
