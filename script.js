// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i == 0) { console.log(`${i} – это ноль`) }
    else if (i % 2 !== 0) { console.log(`${i} – нечетное число`) }
    else { console.log(`${i} – четное число`) }
}
console.log('-----------------------');
// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2)
console.log(array);
console.log('-----------------------');
// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const randomNumber = () => { return Math.trunc(Math.random() * 10) };

const sum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    } return sum
}

const min = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    } return min
}

const searchNumber = (array, number = 3) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return `В заданном массиве есть искомое число ${number}`
        }
    } return `В заданном массиве нет искомого числа ${number}`
}

const arr = [];
for (let i = 0; i <= 5; i++) {
    arr[i] = randomNumber();
}
console.log(arr);
console.log(sum(arr));
console.log(min(arr));
console.log(searchNumber(arr));
console.log(searchNumber(arr, 2));
console.log('-----------------------');

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = ''; i.length < 20; console.log(i += 'x')) { }