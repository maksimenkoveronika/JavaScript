// Создать переменную “one”, присвоить переменной one цифру 5 
// Вывести в консоль one
let one = 5;
console.log(one);

// Создать переменную “two”, присвоить переменной two цифру 3
// Вывести в консоль two
let two = 3;
console.log(two);

// Создать переменную “three”
// Присвоить переменной "three" сложение one и two
// Вывести в консоль three
let three = one + two;
console.log(three);

// Создать переменную “four”
// Присвоить переменной four строку “Yolochka”
// Вывести в консоль four
let four = ' Hello!';
console.log(four);

// Вывести в консоль сложение three и four
// Вывести в консоль умножение three и four
console.log(three + four);
console.log(three * four);

// Создать переменную “five”, присвоить переменной five переменную three
let five = three;

// Создать переменную six, присвоить переменной six значение 15
// Создать переменную six_type, присвоить переменной six_type тип переменной six
// Создать переменную seven и в ней преобразовать six в String.
// Создать переменную seven_type, присвоить переменной seven_type тип переменной seven
let six = 15;
let six_type = typeof six;
let seven = String(six);
let seven_type = typeof seven;

console.log("——  six == " + six + ", six_type == " + six_type + " ——");
console.log("——  seven == " + seven + ", seven_type == " + seven_type + " ——");

// Создать переменную “age_1” и присвоить ей значение 10
// Создать переменную “age_2” и присвоить ей значение 18
// Создать переменную “age_3” и присвоить ей значение 60
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

// Создать if в котором будите проверять значение переменной age_1
if (age_1 < age_2 ) { 
        console.log("You dont have access cause your age is " + age_1 +  " It’s less then " + age_2 )
}
    else if (age_1 >=  age_2 && age_1 <  age_3) {
      console.log("Welcome !")
}
    else if (age_1  > age_3) {
      console.log("Keep calm and look Culture channel")

} else {
     console.log("Technical work!")
}