/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(recourse, amount) {
    for (const key in game.resources) {
      if (recourse === key) {
        game.resources[key] += amount;
        return
      }
    }

    return console.log('Invalid resource')

  }
}
game.addResource('golda',30)
console.log(game)



// const game = {
//     resources: {
//         gold: 250,
//         lumber: 100,
//     },
//     addResource(resource,amount) {
//         let key = game.resources.hasOwnProperty(resource)
//         if (key) {
//             game.resources[resource] += amount;
//             return
//         }


//         for (const key in game.resources) {
//             if (key === resource) {
//                 game.resources[resource] += amount;
//                 return;
//             }
//         }
//         return "adasdasda"
//
//
//                                      //// РЕШЕНИЕ
//         // if (this.resources[resource]) {
//         //
//         //     this.resources[resource] += amount;
//         //
//         //
//         // }
//         // else {
//         //     return "Invalid resource"
//         // }
//
//     }
// }
// console.log(game.addResource('gold',30))
// console.log(game)
