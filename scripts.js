//Задание 1
//Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

let strNew = 'aaa@bbb@ccc';
console.log(strNew.replace(/@/g, '!'));

//Задание 2
//. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. 

let date = '2025-12-31';
let arr = date.split('-');
console.log(arr);
let newdate = arr[2] + '/' + arr[1] + '/' + arr[0];
console.log(newdate);

//Задание 3
//Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).

let str = "Я учу javascript!";
console.log(str.substring(0, 1) + '!');
console.log(str.substr(0, 1)+ '!');
console.log(str.slice(0, 1) + '!');

//Задание 4
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr1 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (i = 0; i < arr1.length; i++){
    sum += Math.pow(arr1[i], 3)
}
console.log(Math.sqrt(sum));

//Задание 5 
//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b,равных соответст (венно 3 и 5, 6 и 1.

function differenceNumber(a, b){
    console.log ('число c = ' + Math.abs(a-b));
}

differenceNumber(6, 1);
differenceNumber(3, 5);
differenceNumber(0, -5);


//Задание 6
//Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).

function addzero(value){
    if (value > 9) return value;
    return '0' + value;
}
let currentDate = new Date ();
let d = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

let h = currentDate.getHours();
let m = currentDate.getMinutes();
let s = currentDate.getSeconds();

let myDate = `${h}:${h}:${h} ${addzero(d)}.${addzero(month+1)}.${addzero(year)}`

console.log (myDate);

//Задание  7
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'

let str7 = 'aa aba abba abbba abca abea';
console.log (str7.match(/ab+a/gi));



//Задание  8
//Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер     телефона>). Функция должна возвращать true или false. спользуйте  регулярные выражения.

function validphone(number) {
    return /^\+?375 ?\(?[1-9]{2}\)? ?(\d[ \-]?)+\d$/.test(number);
}
validphone('80295576587')
validphone('+375335684585')
console.log(validphone('80295576587'));
console.log(validphone('+375335684585'));

//Задание  9
/*Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
Курс «JS».
Функция должна возвращать true или false. Используйте регулярные
выражения.*/
function validemail(email) {
    return /^[a-z0-9](\w+[\.\-_]?)+@(\w+[\.\-_]?)+\.[a-z]{2,11}$/.test(email);
}
console.log(validemail('dfdfskgdkghj@gmail.com'));

