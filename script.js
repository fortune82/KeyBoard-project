// ------------Task 11 урока 20-----------------
// Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно
// содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент
// нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии
// enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой
// клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает
//  до последующего отжатия клавиши
let keyBoard = document.querySelector("#keyBoard");
let number1 = document.querySelector(".div-1");
keyBoard.onkeydown = function () {
    number1.classList.toggle("buthover");
}



let number2 = document.querySelector(".div-2");
let number3 = document.querySelector(".div-3");


// let buttoN = document.querySelector(".buttoN");
// keyBoard.onkeydown = function (event) {
//     const number = {
//         1: 2,
//         2: 3,
//         3: 4
//     }
//     document.querySelector("#keyBoard").value += number[event.key];
//     console.log(event.key);

// }