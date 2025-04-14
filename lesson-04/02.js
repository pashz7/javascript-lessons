/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    let uniqueArray = []
    for (let i = 0; i < array.length; i++) {
      let result = includesElement(uniqueArray,array[i])
        if (!result) {
            uniqueArray.push(array[i]);
        }



       }

       return uniqueArray;
    }
    console.log(findUniqueElements([1,4,5,6,6,6,7,8,9,9]));

// function myFunc (array) {
//     let newArray = [];
//     let otherArray = [];
//
//     for (let i = 0; i < array.length; i++) {
//         let result = includesElement(newArray, array[i]);
//         if (!result) {
//
//             newArray.push(array[i]);
//
//         }
//         else {
//             otherArray.push(array[i]);
//         }
//     }
//     return otherArray;
// }
// console.log(myFunc([1,2,2,2,4,5,5,6,7]));









