// 1. Working with prototype: The following the result I found wokring on protoype

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // true, The value is assigned from Rabbit.

delete rabbit.jumps;

alert(rabbit.jumps); //null here jumps are deleted before we access here.

delete animal.jumps; // Undefined Here we are trying to delete the null attribute or property.

alert(rabbit.jumps); // undefined we are accessing unexisted property.

//2. Searching Algorithm

/*1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: 
  pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table),
   and bed.glasses should be 1 (found in head).
   2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.*/
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen); //displays 3 found from table
console.log(bed.glasses); //displays 1 it found from head

// head.glasses is b/c it can find the object under its own rather inheriting or searching from super objects.

/*I found the following answere from the SubmitEventn modern engines, performance-wise, 
  there’s no difference whether we take a property from an object or its prototype.
   They remember where the property was found and reuse it in the next request.

  For instance, for pockets.glasses they remember where they found glasses
   (in head), and next time will search right there. 
   They are also smart enough to update internal caches if something changes, so that optimization is safe.*/

// 3. Where dies it write?
/*We have rabbit inheriting from animal.
If we call rabbit.eat(), which object receives the full property: animal or rabbit? */

let animal2 = {
  eat() {
    this.full = true;
  }
};

let rabbit2 = {
  __proto__: animal
};

// rabbit2.eat();//Here rabbit object recivied full property from animal.
// console.log(rabbit.eat().full);
console.log(animal2);


//4. Why are both hamsters full?
let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food);
    this.stomach=[food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
//It was very amazing. firstly I didn't solve it for long time when I see the reuslt it was amazing for me.

// F.prototype
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit3 = new Rabbit();

// Rabbit.prototype = {};//this is creating empty Rabbit object
Rabbit.prototype.eats = false;//this is creating empty Rabbit object

alert( rabbit3.eats ); // ?=This is undefined. B/c we override the existing object and it is empty.