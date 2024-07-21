// Activity 1
let num=30;
if(num>0){
    console.log("positive no");
}
else if(num<0){
    console.log("negative no");
}
else 
console.log("zero");
// output positive no

//task 2
let age=20;
if(age>=18){
    console.log("eligible to vote");
}
else
   console.log("eligible to vote");
// output eligible to vote

//activity 2
let a = 10;
let b = 4;
let c = 30;

if (a > b) {
    if (a > c) {
        console.log("a is largest");
    }
} else if (b > a) {
    if (b > c) {
        console.log("b is largest");
    }
} else {
    console.log("c is largest");
}
// c is largest

//activity 3
let day=4;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}
//output wednesday

//task 2
let marks=90;
switch (true) {
    case marks>=90:
        console.log("A");
        break;
    case marks>=75:
        console.log("B");
        break;
    case marks>=65:
        console.log("C");
        break;
    case marks>=50:
        console.log("D");
        break;
    case marks>=35:
        console.log("F");
        break;
    default:
        console.log("Invalid MARKS");
}
// A

//activity 4
let numm=22;
result= (num%2==0)?"even":"odd";
console.log(result);

//Activity 5
let year=2004;
if(((year%4==0)&&(year%100!=0))||(year%400==0))
  console.log("is leap yr");
else
  console.log("is not a leap yr");
// is a leap yr