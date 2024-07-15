// program to find a year is leap year or not

let year = 2033;

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ) {
    console.log("leap year")
}
else {
    console.log("not a leap year")
}

