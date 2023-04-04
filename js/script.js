// Задание: 1.
let name = prompt('ваше имя'),
    age = prompt('возраст'),
    city = prompt('город проживания'),
    phone = prompt('телефон'),
    email = prompt('электронная почта'),
    company = prompt('компания');
document.write('Задание: 1.</br>«Меня зовут ' + name + ' Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.»</br>');

// Задание: 2.
let current_year = new Date().getFullYear(); // Узнали текущий год
let birth_year = current_year - age;
document.write('Задание: 2.</br>', name , ' родился в ' , birth_year, ' году.');

// Задание 3.
document.write('</br>Задание: 3.</br>');

let string = prompt('Введите шесть цифр' , 123456);
let string_1 = string.slice(0 , -5);
let string_2 = string.slice(1 , -4);
let string_3 = string.slice(2 , -3);
let string_4 = string.slice(-3 , 4);
let string_5 = string.slice(-2 , 5);
let string_6 = string.slice(-1 , 6);
let string_a = string_1 + string_2 + string_3;
let string_b = string_4 + string_5 + string_6;
(string_a == string_b) ? document.write('да'): document.write('нет'); /* Выводим если не верно*/

// Задание: 4.
document.write('</br>Задание: 4.</br>');
let a = +prompt('введите число',0);
(a > 0) ? document.write('Верно') : document.write('Не верно');

// Задание: 5.
document.write('</br>Задание: 5.</br>');
let a5 = 10, b5 = 2, c5 = a5 + b5, d5 = a5 - b5, e5 = a5 * b5, f5 = a5 / b5;
let g5 = c5 + d5 + e5 + f5;
document.write(c5, ' ' , d5, ' ' , e5, ' ' ,f5, '</br>');
(g5 > 1) ? document.write( Math.pow(g5, 2) , '</br>' ) :document.write('</br>') ;


// Задание: 6.
document.write('</br>Задание: 6.</br>');
( ( 2 < a5 < 11 ) || ( 14 > b5 >= 6 ) )? document.write('Верно') : document.write('Неверно');

// Задание: 7.
document.write('</br>Задание: 7.</br>');
let n = 0;
let m = Math.trunc(n / 15);
switch (m){
    case 0:
        console.log('первая');
        break;
    case 1:
        console.log('вторая');
        break;
    case 2:
        console.log('третья');
        break;
    case 3:
        console.log('четвертая');
        break;
}

// Задание: 8.
document.write('</br>Задание: 8.</br>');

let day = 31;
let dec = Math.trunc(day / 10);
switch (dec) {
    case 0:
        console.log('первая');
        break;
    case 1:
        console.log('вторая');
        break;
    case 2:
        console.log('третья');
        break;
    case 3:
        console.log('третья');
        break;
}

// Задание: 9.
document.write('</br>Задание: 9.</br>');
let day_9 = +prompt('Сколько дней?', 365);
let year_9 = day_9 / 365;
    if (year_9 < 1) {
        alert(day_9 + ' дней - ' + 'Меньше года');
    }
    else {
        alert(day_9 + ' дней - ' + 'Года: ' +  year_9);
    }
let mon9 = day_9 / 31;
    if (mon9 < 1) {
        alert (day_9 + ' дней - ' + 'Меньше месяца');
}
    else {
        alert(day_9 + ' дней - ' + 'Месяца: ' +  mon9);
}
let week9 = day_9 / 7;
if (week9 < 1) {
    alert (day_9 + ' дней - ' + 'Меньше недели');
}
else {
    alert(day_9 + ' дней - ' + 'Недели: ' +  week9);
}
let watch9 = day_9 * 24;
    alert(day_9 + ' дней - ' + 'Часы: ' +  watch9);

let min9 = day_9 * 1440;
alert(day_9 + ' дней - ' + 'Минуты: ' +  min9);

let sec9 = day_9 * 86400;
alert(day_9 + ' дней - ' + 'Секунды: ' +  sec9);

// Задание: 10.
document.write('</br>Задание: 10.</br>');

let mon_x = Math.trunc(day_9 / 31)+1;
console.log(mon_x);
// let pora_x = Math.trunc(mon_x / 4);
//     switch (pora_x){
//         case 1: console.log('Зима')
//             break;
//         case 2: console.log('Весна')
//             break;
//         case 3: console.log('Лето')
//             break;
//         case 4: console.log('Осень')
//             break;
//         default: console.log('Зима')
//     }
//В прошлом решении не отрабатывает последний месяц года

    switch (mon_x){
        case 1: console.log('Зима')
            break;
        case 2: console.log('Зима')
            break;
        case 3: console.log('Весна')
            break;
        case 4: console.log('Весна')
            break;
        case 5: console.log('Весна')
            break;
        case 6: console.log('Лето')
            break;
        case 7: console.log('Лето')
            break;
        case 8: console.log('Лето')
            break;
        case 9: console.log('Осень')
            break;
        case 10: console.log('Осень')
            break;
        case 11: console.log('Осень')
            break;
        case 12: console.log('Зима')
            break;
    }

