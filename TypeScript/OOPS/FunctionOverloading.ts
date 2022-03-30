// ** Normal functions.
function addNumbers(a: number, b: number): number {
    return a + b;
}
// Normal addStrings function.
function addStrings(a: string, b: string): string {
    return a + b;
}




// ** Union type.
function addNumbersOrStrings(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}




// ** Function overloading.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}


// ** Function overloading with optional parameters
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log("Sum of 2 numbers: "+sum(10,20));
console.log("Sum of 3 numbers: "+sum(10,20,30));
console.log("Sum of 2 numbers from user 3rd is optional: "+sum(10,20,));

// **Method overloading inside the class.
class SumCLS {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let obj = new SumCLS();

console.log("Number: "+obj.count()); // return a number
console.log("Array of number: "+obj.count(20)); // return an array