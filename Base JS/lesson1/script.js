/** ПЕРВЫЙ УРОК */

/*
    1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую
    температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
    Tf = (9 / 5) * Tc + 32;
    где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/

const tempC = prompt('Введите температуру в градусах по Цельсию');
const tempFt = (9 / 5) * tempC + 32;
alert(`Температура по Фаренгейту: ${tempFt}`);

/*
    Объявить две переменные: admin и name. Записать в name строку
    "Василий". Скопировать значение из name в admin. Вывести в
    консоль переменную admin (должно вывести "Василий")
 */
const name = prompt('Введите имя');
const admin = name;
alert(`Имя администратора: ${admin}`);
console.log(`Имя администратора: ${admin}`);


/*
    3. Вывести в консоль значения выражений и объяснить почему получились такие
    значения используя комментарии к каждому выражению:

    10 + 10 + "10";
    10 + "10" + 10;
    10 + 10 + +"10"; (обратите внимание на пробелы, пишите также)
    10 / -"";
    10 / +"2,5"; (да здесь запятая, это не опечатка)
 */
console.log("10 + 10 + \"10\"", 10 + 10 + "10"); // Сначала произошло сложение, затем конкатенация строк
console.log("10 + \"10\" + 10", 10 + "10" + 10); // Произошла последовательная конкатенация строк из-за порядка операций
console.log("10 + 10 + +\"10\"", 10 + 10 + +"10"); // Сначала произошло сложение, затем сначала префиксная запись перевода строки в число и затем сложение
console.log("10 / -\"\"", 10 / -""); // 10 делим на -0
console.log("10 / +\"2,5\"", 10 / +"2,5"); // Не произошло приведение типа из-за запятой