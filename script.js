// ------------Task 11 урока 20-----------------
// Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно
// содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент
// нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии
// enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой
// клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает
//  до последующего отжатия клавиши




//------------Рабочий, но не оптимизированный код------------
// let inp = document.querySelector("#inp");
// let but = document.querySelectorAll('.buttoN');
// let div1 = document.querySelector('.div-1');
// let div2 = document.querySelector('.div-2');
// let div3 = document.querySelector('.div-3');
// let div4 = document.querySelector('.div-4');
// let div5 = document.querySelector('.div-5');
// let div6 = document.querySelector('.div-6');
// let div7 = document.querySelector('.div-7');
// let div8 = document.querySelector('.div-8');
// let div9 = document.querySelector('.div-9');
// let div0 = document.querySelector('.div-0');
// // https://learn.javascript.ru/keyboard-events#keyboard-test-stand - тестовый стенд для получения значение каждой кнопки
// inp.onkeydown = function (event) {
// 	for (var i = 0; i < but.length; i++) {
// 		but[i].textContent == event.code;
// 		if (event.code == 'Digit1') {
// 			div1.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit1') {
// 					div1.classList.toggle('colY');
// 				};
// 			};
// 		};
// 		if (event.code == 'Digit2') {
// 			div2.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit2') {
// 					div2.classList.toggle('colY');
// 				}
// 			};
// 		}
// 		if (event.code == 'Digit3') {
// 			div3.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit3') {
// 					div3.classList.toggle('colY');
// 				};
// 			};
// 		};
// 		if (event.code == 'Digit4') {
// 			div4.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit4') {
// 					div4.classList.toggle('colY');
// 				};
// 			};
// 		};
// 		if (event.code == 'Digit5') {
// 			div5.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit5') {
// 					div5.classList.toggle('colY');
// 				};
// 			};
// 		};
// 		if (event.code == 'Digit6') {
// 			div6.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit6') {
// 					div6.classList.toggle('colY');
// 				};
// 			};
// 		};
// 		if (event.code == 'Digit7') {
// 			div7.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit7') {
// 					div7.classList.toggle('colY');
// 				};
// 			};
// 		};
// 		if (event.code == 'Digit8') {
// 			div8.classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit8') {
// 					div8.classList.toggle('colY');
// 				};
// 			};
// 		};
// 		// console.log(event);
// 	}

// }




// Димын вариант, но он немного для другой задачи
// inp.onkeydown = function (e) {
// 	but.forEach(value => { if (value.textContent == e.key) value.classList.toggle("colY"); });
// } 




// ------------Разобраться почему не работает this ----------
// let inp = document.querySelector("#inp");
// let but = document.querySelectorAll('.buttoN');
// inp.onkeydown = function (event) {
// 	for (var i = 0; i < but.length; i++) {
// 		but[i].textContent == event.code;
// 		if (event.code == 'Digit1') {
// 			this.but[i].classList.toggle('colY');
// 			inp.onkeyup = function () {
// 				if (event.code == 'Digit1') {
// 					but[i].classList.toggle('colY');
// 				};
// 			}
// 			if (event.code == 'Digit2') {
// 				this.but[i].classList.toggle('colY');
// 				inp.onkeyup = function () {
// 					if (event.code == 'Digit1') {
// 						but[i].classList.toggle('colY');
// 					};
// 				}
// 			}
// 			// console.log(event);
// 		}
// 	}
// }





//--------------Оптимизированный рабочий код!!!!!-----------
let inp = document.querySelector("#inp");
let f = document.querySelector(".f");
let digit = document.querySelector(".digit");
let letter1 = document.querySelector(".letter-1");

// f.onkeydown = function (event) {
// 	console.log(event.key);
// 	var b = digit.querySelector(".div-" + event.key);
// 	if (b)
// 		b.classList.toggle("colY");
// 	f.onkeyup = function () {
// 		if (b)
// 			b.classList.toggle("colY");
// 	}
// };

inp.onkeydown = function (event) {
	console.log(event.key);
	var b = digit.querySelector(".div-" + event.key);
	if (b)
		b.classList.toggle("colY");
	inp.onkeyup = function () {
		if (b)
			b.classList.toggle("colY");
	}
};

letter1.onkeydown = function (event) {
	console.log(event.key);
	var letter = letter1.onkeydown(".div-" + event.key);
	if (letter)
		letter.classList.toggle("colY");
	letter1.onkeyup = function () {
		if (letter)
			letter.classList.toggle("colY");
	}
}
