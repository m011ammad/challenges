let cartItems = ["book1", "book2", "book3", "book4"];

class MyClass {
    constructor () {
        
    }
    forEachTest(arr) {
        arr.forEach( (value, index) => {
            console.log(`${index} - ${value}`);
        })
    }
    findTest(arr) {
        console.log(arr.filter( (v) => {
            return v.search(/4/) != -1
        }));
    }
}
let myClass = new MyClass();
myClass.findTest(cartItems);