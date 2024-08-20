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