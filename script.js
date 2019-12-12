// ------------Task 11 урока 20-----------------
// Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно
// содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент
// нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии
// enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой
// клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает
//  до последующего отжатия клавиши
let number1 = document.querySelectorAll(".buttoN").attributes;
// let atr = number1.getAttribute('data');
let inp = document.querySelector("#inp");
// let dat = document.getAttribute('.button data');
inp.onkeypress = function () {
    console.log("ura");
    for (i = 0; i < number1.length; i++) {
        if (inp.value == atr) {
            this.number1.classList.toggle(".buthover");
        }
    }
}








// inp.onkeypress = function (event) {
//     // if (dat == 1) {
//     //     number1.classList.toggle(".buthover");
//     // }



//     const a = {
//         charcode1: '1',
//         charcode2: '2',
//         charcode3: '3'
//     }
//     for (elem in a) {
//         if (inp.value == a[event.key]) {
//             number1.classList.toggle(".buthover");
//         }
//     }
//     console.log(event);
// }






// let number2 = document.querySelector(".div-2");
// keyBoard.onkeydown = function () {
//     number2.classList.toggle("buthover");
// }

// let number3 = document.querySelector(".div-3");
// keyBoard.onkeydown = function () {
//     number3.classList.toggle("buthover");
// }

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