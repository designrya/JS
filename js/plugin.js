// Задание 2
//______1) получить 1 и посл букву строки
let string = 'some text string';

value = string[0];

console.log(value);

value = string[string.length-1];

console.log(value);

//______2) сделать 1 и посл буквы в верхн рег
value = string[0].toUpperCase();

console.log(value);

value = string[string.length-1].toUpperCase();

console.log(value);

//______ 3) найти положение слова string
value = string.indexOf('string');

console.log(value);

//______ 4) найти положение 2го пробела
value = string.indexOf(' ', 5);

console.log(value);

//______ 5) Получить строку 5-го символа длиной 4 буквы
value = string.substr(5, 4);

console.log(value);

//______ 6) Получить строку с 5 по 9 символы
value = string.slice(5, 9);

console.log(value);

//______ 7) Получить новую строку из исходной путем удаления последних 6 символов
value = string.slice(0, -6);

console.log(value);

//______8) Из 2х переменных а=20 и b=16 получить переменную string, в которой будет содержаться текст "2016"
let a = '20',
    b = '16';

string1 = a + b;

console.log(string1);

// Задание 3
//______1) Получить число pi из Math и округлить его до 2-х знаков
let res;
res = Math.PI.toFixed(2);

console.log(res);

//______2) math: мин и макс значение из ряда
let res1;
res1 = Math.max(15, 11, 16, 12, 51, 12, 13, 51)

console.log(res1);

let res2;
res2 = Math.min(15, 11, 16, 12, 51, 12, 13, 51)

console.log(res2);

//______3.а) случайное число до окр до 2 
//______3.б) случайное число целое от 0 до x
res3 = Math.random().toFixed(2);

console.log(res3);

res4 = Math.floor(Math.random()*(0, 25)).toFixed(0);

console.log(res4);

//______4) 0.6+0.7=1.3
res = 0.6 + 0.7
res5 = res.toFixed(2);

console.log(res5);

//______5) получить число из строки '100$'
res6 = parseInt('100$')

console.log(res6);

// Задание 4
//______1) создать объект с полем prodduct, равным 'iphone'
let prod = {
    product: 'iphone',
};

console.log(prod);

//______2) добавить в 1ю поле 'price'=1000 currency=dollar
let prod2 = {
    product: 'iphone',
    price: 1000,
    currency: 'dollar',
};

console.log(prod2);

//______3) добавить details кот будет содержать model и color 
let prod3 = {
    product: 'iphone',
    price: 1000,
    currency: 'dollar',
    details: {
        model: '7s',
        color: 'black',
    }
};

console.log(prod3);