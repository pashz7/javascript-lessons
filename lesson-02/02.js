/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/





let isWinningDouble

let dice1 = Math.floor(Math.random() *6) +1;
console.log(dice1)
let dice2 = Math.floor(Math.random() *6) +1;
console.log(dice2)
if (dice1 === dice2 && dice1 >3 && dice2 >3) {

    isWinningDouble = "ПОБЕДА";
    console.log(isWinningDouble);
}
else {
    isWinningDouble = "СОБЕРИСЬ) КИДАЙ ЕЩЕ ";
    console.log(isWinningDouble);
}


// let dice1 = Math.floor(Math.random() * 6) + 1;
// let dice2 = Math.floor(Math.random() * 6) + 1;
// let isWinningDouble = (dice1 === dice2) && (dice1 > 3) && dice2 >3; // Проверка если куш)
//
// console.log('Первый бросок: ' + dice1);
// console.log('Второй бросок: ' + dice2);
// if (isWinningDouble) {
//     console.log('Выигрышный дубль!');
// } else {
//     console.log('Не выигрышный дубль.');
// }



// let isWinningDouble = false
// while (!isWinningDouble) {
//     let dice1 = Math.floor(Math.random() *6) +1;
//     alert(`Твой первый бросок ${dice1}`)
//     let dice2 = Math.floor(Math.random() *6) +1;
//     alert (`Твой второй броск ${dice2}`)
//
//
//     if (dice1 === dice2 ) {
//         alert ("Ты победил")
//         isWinningDouble = true;
//
//     }
//     else {
//
//         alert("ТЫ проиграл")
//     }
//
// }

