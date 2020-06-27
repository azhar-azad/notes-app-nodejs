// var square = (num) => {
//     var result = num * num;
//     return result;
// };

// var square = (num) => num * num;

var square = num => num * num;

console.log(square(9));

var user = {
    name: 'Azad',
    sayHi: () => {
        console.log(arguments); // will not print the calling arguments
        console.log(`Hi, I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.sayHi('a', 'b');
user.sayHiAlt('a', 'b');
