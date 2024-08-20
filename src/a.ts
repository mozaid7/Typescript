// --->
function greet(firstName: string) {
    console.log("Hello" + firstName);
}
greet("Zaid");


// ---->
// type inference
function sum(a: number, b: number): number {
    return a + b;
}
const value = sum(1,2);
console.log(value);


// --->
function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
let x = isLegal(23);


// --->
// passing type to a fn that'll passed to another func as argument.
function runAfter1S(fn: () => void) {
    setTimeout(fn, 1000);
}
runAfter1S(function() {
    console.log("Hi there Niggas!!");
    
})


// --->
interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // optional input for user to provide
};

function isValid(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}
isValid({
    firstName: "Zaid",
    lastName: "Syed",
    age: 19
})

// example 2
// interface TodoProp {
//     title: string,
//     description: string,
//     done: boolean
//   }
//   function Todo(props: TodoProp) {
//     return <div>
//       <h1>
//         {props.title}
//       </h1>
//       <h2>
//         {props.description}
//       </h2>
//     </div>
//   }
  


// --->
// used to aggregate data types
type User2 = {
    firstName: string;
    lastName: string;
    age: number;
};
type GreetArg = number | string;
function greets(id: GreetArg) {
    // code here
}
greets(1);
greets("1");


// --->
// Intersection of Types
type Employee = {
    name: string;
    startDate: Date;
};
 interface Manager {
    name: string;
    department: string;
 };

 type TechLead = Employee & Manager;
 const t: TechLead = {
    name: "Zaid",
    startDate: new Date(),
    department: "HR"
 }


