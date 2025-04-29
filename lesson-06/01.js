/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',

]
const nextBtn = document.getElementById(`next-button`)
const prevBtn = document.getElementById(`prev-button`)
const image = document.getElementById(`web-tech-image`)
let count = 0;
function switchImages(count) {
  let counts = Math.abs(count) % WEB_TECH_IMAGES.length
  image.src = WEB_TECH_IMAGES[counts]
}
// nextBtn.addEventListener('click', () => {
//   // image.src = WEB_TECH_IMAGES[count+1]
//   if (count < WEB_TECH_IMAGES.length-1) {
//     count +=1
//   } else {
//     count = 0;
//   }
//  image.src = WEB_TECH_IMAGES[count]
// })
//
// prevBtn.addEventListener('click', () => {
//   // 0 -> 2  +
//   // 1 -> 0  =
//   // 2 -> 1  =
// if ( count === 0) {
//   count = 2 }
//   else {
//     count -= 1
//   }
//   image.src = WEB_TECH_IMAGES[count]
// })

nextBtn.addEventListener('click', (e) => {
  console.log(e.target)
  count++
  // console.log(count)
  // let counts = count % WEB_TECH_IMAGES.length
  // console.log(counts)
  // image.src = WEB_TECH_IMAGES[counts]
  switchImages(count)
})

prevBtn.addEventListener('click', (e) => {
count--

// console.log(count)
//   let countss = Math.abs(count) % WEB_TECH_IMAGES.length
  // console.log(countss)
  // image.src = WEB_TECH_IMAGES[countss]
  // всплытие погружение дом





 switchImages(count)
})




