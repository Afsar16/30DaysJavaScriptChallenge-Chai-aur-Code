var a = 10;
var b = 10; 

if(a<b) {
    console.log("a is lesser")
}
else if (a>b){
    console.log("a is greater")
}
else {
    console.log("equal")
}

var c = 11;
var d = 11;
if(a<=b) {
    console.log("c is lesser or eqaul")
}
else {
    console.log("a is greater")
}

var compare1 = 1;
// var compare2 = 2; not equal
// var compare2 = 1; // both cases true == and ===
// let compare2 = "1"; // both cases true == and ===
let compare2 = "10"; // not equal
if(compare1 == compare2) {
    console.log("compare == is success")
}
else {
    console.log("not equal ==")
}

if(compare1 == compare2) {
    console.log("compare === is success")
}
else {
    console.log("not equal ===")
}