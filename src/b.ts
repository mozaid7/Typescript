 // --->
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