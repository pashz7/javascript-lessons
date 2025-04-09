// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    if (a > b && a > c) {

        return console.log("первое число больше всех")
    }
    else if (b > a && b > c) {

       return console.log("Второе чилсо больше всех")
    }
    else {

      return  console.log ("третье число больше всех ")
    }
}
findLargest(12,13,15)
