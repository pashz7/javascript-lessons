/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
    let newString = string.split(` `)
    let result = []

    console.log(newString)

    for (let i = 0; i < newString.length; i++) {
        let abc = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
      result.push(abc)


    }
    return result.join(' ')

    // return string.split(' ').map(word=>{
    //     const [a,...rest]= word.split('');
    //     const newA = a.toUpperCase();
    //     return [newA, ...rest].join('');
    // }).join(' ');
}
console.log(capitalizeWords(`hello world from javascript`))


