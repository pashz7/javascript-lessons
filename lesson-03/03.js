// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    if (a > b && a > c) {
        alert ("Первое число больше всех")
    }
    else if (b > a && b > c) {
        alert("Второе чилсо больше всех")
    }
    else {
        alert ("третье сисло больше всех ")
    }
}
findLargest(+prompt(), +prompt(), +prompt());
