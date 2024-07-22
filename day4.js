//Activity1:
//Task 1 print number from 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i);
}// 1,2,3,4,5,6,7,8,9,10;

//Task-2
// table of 5
for(let i = 1; i <=10;i++)
    {
        console.log("5 x",i,"=",5*i);
    } 
    /* output is:
      5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 4 = 20
    5 x 5 = 25
    5 x 6 = 30
    5 x 7 = 35
    5 x 8 = 40
    5 x 9 = 45
    5 x 10 = 50 */
    
    // Activity-2
    //Task-3
    // sum of numbers
    
    let sum =0;
    let i=1;
    while(i<=10)
    {
        sum = sum + i;
        i++;
    }
    console.log(sum)
    // output 55
    
    
    //Task-4
    //print 10-1
    let num=10;
    while(num>0)
    {
        console.log(num);
        num--;
    } // 10,9,8,7,6,5,3,2,1
    
    // Activity-3
    
    //task5 print from 1 to 5 using do while loop
i=1;
do
{
    console.log(i);
    i++;
}while(i<6)
    
// output is : 1,2,3,4,5

// task-6
// factorial of numbers do while

let num1 = 5
let fact = 1;

do {
    fact *= num1;
    num1--;
} while(num1 > 0);
console.log(fact);
// output is 120


//task 7
let ans = "";

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {   // *
        ans += "*";                 //  * *
                                    //  *  *  *
                                    //  *  *   *  *
                                    //  *  *    *  *  *
       
    }
    ans += "\n";
}

console.log(ans);



// task-8
//print numbers from 1-10 but skip number 5 using continue

for(let i = 1; i <= 10; i++)
    {
        if(i === 5)
        {
            continue;
        }
        console.log(i);
    }
    
    // output is : 1,2,3,4,6,7,8,9,10
    
    // task-9
    // print 1-10 but stop when number is 7 using break
    
    for(let i = 1; i <= 10; i++)
    {
        if(i === 7)
        {
            break;
        }
        console.log(i);
    }
    
    // output is : 1,2,3,4,5,6