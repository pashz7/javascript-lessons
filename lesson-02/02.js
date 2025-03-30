/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/





let isWinningDouble

let dice1 = Math.floor(Math.random() *7)
console.log(dice1)
let dice2 = Math.floor(Math.random() *7)
console.log(dice2)
if (dice1 === dice2 && dice1 >3 && dice2 >3) {

    isWinningDouble = true;
    console.log(isWinningDouble);
}
else {
    isWinningDouble = false;
    console.log(isWinningDouble);
}
