// 2*: Преобразовать функцию таким образом,чтобы сначала проверялся тип данных.И если он не Number - выдавалась ошбка

let age = 10;
let age_2 = 18;
let age_3 = 60;

let vozrast = function(age) {
    if (typeof age == 'number') {
        
    if (age < age_2 ) { 
        console.log("You dont have access cause your age is " + age +  " It’s less then " + age_2 )
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
         console.log("Technical work!")
    } 
} else {console.log("it's not a number")}
}
vozrast(17)
vozrast("Nika")
vozrast(60)





