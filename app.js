//    chapter 1 alert 

 
alert("Muhammad");
alert("Muzammil khan");
alert("muzammil17030@gmail.com");
alert("03168864160");
alert("muzammmil-0");
  

alert("you're learning javascript!");


alert("Hi i'am M.Muzammil khan ")


//   chapter 2 (variable for string)

   
 var firstName= 10
 console.log(firstName)
   

var  muzammil 
muzammil=("hi")
  
var teamname= ("heros team")
 alert(teamname)


 var bestMan="charlie"
 bestMan="engineer"

//  cahpter 3 (variable for number)


var caseQty;
caseQty = 144;



     var num="9";
    console.log(num)
         
var a = 7;
a = 7+6



var a = 17
var b = 30
var c =a+b
console.log(c)  

 

var m=10
var m=m+3
console.log(m)



// chapter 4 (variablle names legal and illegal)

 var productCost = 3.45;
 console.log(productCost)
  
 var NameOfBrand;
 

var HappyPalace=700;
 
 var name=firstName+" "+lastName
// 4
// IllEGAL VARIABLES
// var first Name = 
// var 1stname =  
// var firstname =   (WRITE IN CAMELCASE)
// var _name =
// LEGAL VARIABLES
// var $name=
// var first_name=
// var name =


// chapter 5 (Math Expression)
  
 ("%")
  
 var num= 20 % 6;
 console.log(num)
   
  var largeNumber=1000*2000
console.log(largeNumber)

var a = 300;
var b = 700;
var c = b - a;

var a = 90 % 6;
console.log(a)

var k = 3 * 6
alert(k)
//  chapter 6(math expression 2)



var a = 3;

a = ++a

console.log(a)


var j = 100;

j = --j

console.log(j)


var x=50;
var y=x++;
console.log(y)

var y=50;
var z=--y;
 console.log(z);









var f = 15;
var f = ++f;
alert(f)
// chapter 7(math expression 3)


var math = 6 + (3 * 7);
console.log(math)

var science = (3 + 7) * 6;
console.log(science)

var phy = (3 + 7) * (6 + 3);
console.log(phy)

var che = ((3 + 6) * 6 + 7);
console.log(che)

var cost = (2 + 2) * (4 + 10);
console.log(cost)

var unit = 2 + 2 * 4 + 10;
console.log(unit) 
var pressure = 4 / 2 * 4
console.log(pressure)
// chapter 8(concenating text strings)

var num = "2" + "2"
 console.log(num)
 
var message = "Dolly"+"Hello"
alert(message)

alert ("33"+3)


var a= "pakistan"
var b= "zindabad"
alert(a+b)

var a= "Babu"
var b= 70
alert(a+b)

var k="king"
var m="khan"
var l=(k+m)

// chapter 9 (prompt)

var r= prompt("Enter first name")
console.log(r)

var p = prompt("country?","china")
console.log(p)

var yourName=prompt("Enter your Name")
console.log(yourName)

userName=prompt("what is your age","18+")
console.log(userName)

var n="what's your favorite color?"
var m = "blue"
var o = prompt(n,m)

var t =("what is your favorite food","pizza")
alert (t)

// chapter 10 (if satement)

 var city = "karachi"
if(city="karachi"){
    console,log("the city of light")
}

var zipCode=10010
if(zipCode ==10010){
    alert("karachi")
    if (zipCode != 10010){
       alert("plese write correct city")
    }
    }

 var x =5
 if(x===5){
    x=1
    console.log(x)
 }



// Chapter 13

var a = b
var c = d
if (a == b && c == d) {
    alert("OK")
}


var m = b
var k = l
if (m == b && k != l) {
    alert("fine")
}

var name = "usama"
var age = 22
if (name == "usama" || name == "Hamza" && age < 60) {
    alert("accept")
}

var num1 = 7
var num2 = 8
if (num1 < num2) {
    console.log("num1 < num 2")
} else {
    console.log("num1 > num 2")
}

var firstName = "muzammil"
var lastName = "khan"
var name1 = prompt("Enter first name")
var name2 = prompt("Enter last name")
if (name1 === firstName && name2 === lastName) {
    alert("accept")
}
// Chapter 14

password = 5
if (password != 0) {
    if (password < 6) {
        console.log("password must be greater than 6")
    }
} else {
    console.log("correct")
}


var a = 1
var c = "Max"
if (a === 1) {
    if (c === "Max") {
        alert("OK")
    }
}

if (a === 2 && c === "full") {
    alert("OK")
}


var m = 5
var a = 5
if (m == a) {
    if (a < m) {
        alert("correct")
    }
}

// Chapter 15

var arr = []

var arr = ["muzammil"]


var alphabet = ["af", "bg", "ch", "di", "ej"]
alert(alphabet[2])
// 4
console.log(alphabet.length)
// 5
var alphabet = ["af", "bg", "ch", "di", "ej"]
alphabet[5] = "m"
console.log(alphabet[5])

// Chapter 16 Part I
// 1
var arr = ["mahad"]
arr.push("muzammil")
// 2
var alphabet = ["a", "b", "c", "d"]
alphabet.pop()
// 3
var alphabet = ["h", "i", "j", "k"]
alphabet.push(2)

// Chapter 16 Part II
// 1
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift()
// 2
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.unshift(1, 2, 3)
// 3
var name = ["shery"]
name.unshift("muzammil")
alert(name[0])
// 4
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(2, 0, "L")
// 5
var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var regSizes = sizes.slice(0, 3)
// 6
var pets = ["elephent", "cat", "dog", "frog", "duck",]
pets.splice(1, 3, "lion", "horse")
// 7
var pets = ["elephent", "cat", "dog", "frog", "duck",]
pets.splice(1, 2,)
// 8
var pets = ["elephent", "cat", "dog", "frog", "duck",]
pets = pets.slice(3, 5)

// Chapter 17-20
// 1
for (var i = 0; i < 11; i++) {
    console.log(i)
}
// 2
for (var i = 0; i <= 12; i++) {
    console.log(i)
}
// 3
for (var i = 0; i <= 4; i++) {
}
// 4
for (var j = 0; j < 101; j++) {
    console.log(i)
}
// 5
for (var i = 0; i > 2; i++) {
    console.log(i)
}
// 6
var num = []
for (i = 0; i < 5; i++) {
    push.num(i)
}
// 9
for (i = 0; i < 11; i++) {
    if (i == 1) {
        console.log(i)
    }
    break;
}
// 10
var userNames = ["farhan", "muzammil", "shery"]
var userName = prompt("Enter user name.")
for (var i = 0; i < userNames.length; i++) {
    if (userName == "farhan" || userName == "muzammil" || userName == "shery") {
        alert("Enter")
    } else {
        alert("wrong username")
    }
}
// 11
var list = ["mahad", "muzammil", "mudassir"]
var userName = prompt("Enter user name.")
for (var i = 0; i < list.length; i++) {
    if (userName == list[i]) {
        alert("match found")
    } break;
}
// 12
var a = ["a", "b", "c", "d", "e"]
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
for (var i = 1; i < 2; i++) {
    for (var k = 1; k < 10; k++) {
        console.log(k + "a")
        console.log(k + "b")
        console.log(k + "c")
        console.log(k + "d")
        console.log(k + "e")
    }
}

// the end 