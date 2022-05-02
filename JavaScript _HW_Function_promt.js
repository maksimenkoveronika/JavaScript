// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age = 10;
let age_2 = 18;
let age_3 = 60;

let vozrast = function(age) {
    // age = Number(age)
    if(+age) {
        
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
vozrast("55")
vozrast("25nika")

let agePrompt = prompt("Enter age")
vozrast(agePrompt)