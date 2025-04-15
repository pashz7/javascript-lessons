/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let double = array[i]+array[i];
        newArray.push(double);
    }
   let a = newArray.join('')
return a

}
console.log(doubleEachCharacter(`helo`));


// function double (asd) {
//     let b = ''
//     for (let i = 0; i < asd.length; i++) {
//         b += asd[i] + asd[i]
//     }
//
//     return b
// }
// console.log(double('123'));