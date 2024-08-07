// Activity 1
class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        this.firstName='R';
        this.lastName='G';
    }
    greet()
    {
        console.log(`Hello ${this.name} How are you?`);
    }
    ageupdate(age)
    {
        this.age=age;
        console.log('age updated');
    }
    static m()
    {
        console.log('Hi I am static');
    }
    getname()
    {
        console.log(this.firstName+this.lastName);
    }
    setfName(f)
    {
        this.firstName=f;
    }
    setlName(l)
    {
        this.lastName=l;
    }

}

const p=new Person('Raghvi',19);
p.greet();
//Hello Raghvi How are you?

//Task2 
p.ageupdate(20);
console.log(p.age);
// age updated
// 20

// Activity 2 


class Student extends Person
{
    static total=0;
    constructor(name,age,studentId)
    {
        super(name,age);
        this.studentId=studentId;
        Student.total++;
    }
    displayid()
    {
        console.log(this.studentId);
    }
    greet()
    {
        console.log('Hello there!');
    }
}

const s=new Student('Esha',17,1);
s.displayid();
//1

//Task4 
s.greet();
//Hello there!

// Activity 3 

//Task5 
Person.m();
//Hi I am static

//Task6 
const s2=new Student;
console.log(Student.total);
//2

// Activity 4 Getters and Setters 

//Task7 
p.getname()
//RG

//Task8 
p.setfName('E');
p.setlName('F');
p.getname();
//EF

// Activity 5 Private Fields 

//Task9 
class Account {
    #balance; //private variable
  
    constructor(initialBalance=0) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}.`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}.`);
      } else if (amount > this.#balance) {
        console.log('Insufficient funds.');
      } else {
        console.log('Withdrawal amount must be positive.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
//Task10 

const myAccount = new Account(100);
myAccount.deposit(50);  // Deposited: $50. New balance: $150.
myAccount.withdraw(20); // Withdrew: $20. New balance: $130.
console.log(myAccount.getBalance()); // 130