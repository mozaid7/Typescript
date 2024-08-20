// new way of importing & exporting
import express from "express";
export const a = 1;


// Arrays in TS
 function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
maxValue([1,2,3,4])


// --->
// enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
    // do something.
    if (keyPressed == Direction.Up) {

    }
}
doSomething(Direction.Right);
doSomething(Direction.Down);


// Generics
// <T> --> takes any input as per the choice of the user & defines it while assigning a type to a var.
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
output1.toUpperCase();


function firstEl<T>(arr: T[]): T {
    return arr[0];
}
const el = firstEl<string>(["Zaid", "Syed"]);
console.log(el.toUpperCase());
