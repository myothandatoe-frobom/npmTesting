/*var arr = [1, 2, 3, 4, 5];

var maparr = arr.map(function(v) {
	return v * 2;
});

var maparr2 = arr.map(v => v * 2);// Arrow Fun

var filterarr = arr.filter(function(v) {
	return v % 2;
});

var filterarr2 = arr.filter(v => v % 2);

console.log(maparr);
console.log(maparr2);
console.log(filterarr);
console.log(filterarr2);*/

/*var users = ['bob', 'mary'];
var newusers = [...users, 'tom'];//Spread Operator
console.log(newusers);

//String Interpolation
var name = "Bob";
console.log(`Hello ${name}`);

//Shorthand
var age = 22
var user = {"name": name, "age": age};

var user2 = {name, age,};
console.log(user);
console.log(user2);*/

//Class in Nodejs
class Animal {
	constructor(legs) {
		this.legs = legs;
	}

	walk() {
		console.log("Animal is walking");
	}
}

class Dog extends Animal {
	walk() {
		console.log("Dog is walking");
	}
}

var snoppy = new Dog(4);
snoppy.walk();
