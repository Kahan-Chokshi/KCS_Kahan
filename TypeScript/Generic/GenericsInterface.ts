// ** Generic interfaces that describe object properties
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
let student: KeyValuePair<string, number> = {
    key: 'Roll No',
    value: 1
};

let student2: KeyValuePair<number, boolean> = {
    key:1,
    value: true
};

console.log(student);
console.log(student2);

// ** Generic interface inherits in class.
interface Idemo<T> {
    add(E: T): void;
    remove(E: T): void;
}

class ListCLS<T> implements Idemo<T>{
    Arr: T[] = [];

    add(E: T): void {
        this.Arr.push(E);
    }
    remove(E: T): void {
        let index = this.Arr.indexOf(E);
        if (index > -1) {
            this.Arr.splice(index, 1);
        }
    }
}

var obj=new ListCLS();
obj.add(10);
obj.add(20);
obj.add(30);

obj.remove(10);
obj.remove(20);


console.log(obj.Arr);

var obj2=new ListCLS();
obj2.add("Abhishek");
obj2.add("Nidhi");
obj2.add("Jay");

obj2.remove("Abhishek");
console.log(obj2.Arr);

// ** Generic interfaces that describe index types
interface DTOptions<T> {
    [name: string]: T
}

let inBoolOptions: DTOptions<boolean> = {
    'disabled': false,
    'visible': true
};

console.log(inBoolOptions);