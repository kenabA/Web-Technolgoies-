function sum(){
    var a = 10;
    var b =20;
    var add = a + b
    console.log(add)
}
sum();

function sumOfNumbers(a,b){
    var sum = a + b
    console.log(sum)
}
sumOfNumbers(10,40)

var name = prompt("Enter a name: ")
console.log(name)

function user(){
    this.name = "Kenab"
    this.age = 19
}

var user1 = new user();
console.log(user1);

function otheruser(name,age){
    this.name = name 
    this.age = age
}

var user2 = new otheruser("Kenab",19);
var user3 = new otheruser("Hisi", 19);
console.log(user2);
console.log(user3);