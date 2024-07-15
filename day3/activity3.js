let num = 2; // 4

switch(num) {
    case 1: console.log("monday"); break;
    case 2: console.log("tuesday"); break;
    case 3: console.log("wednesday"); break;
    case 4: console.log("thursday"); break;
    case 5: console.log("friday"); break;
    case 6: console.log("saturday"); break;
    case 7: console.log("sunday"); break;
    dafault: console.log("the number is not from 1-7")
}

// t5

let score = 95;

switch(true) {
    case(score>=90 && score<=100) : console.log("A");
        break;
    case(score>=80 && score<90) : console.log("B");
        break;
    case(score>=70 && score<80) : console.log("C");
        break;
    case(score>=60 && score<70) : console.log("D");
        break;
    default: console.log("E")
}
// actual solution
// let score = 95;
// let gradeRange;

// if (score >= 90 && score <= 100) {
//     gradeRange = 'A';
// } else if (score >= 80 && score < 90) {
//     gradeRange = 'B';
// } else if (score >= 70 && score < 80) {
//     gradeRange = 'C';
// } else if (score >= 60 && score < 70) {
//     gradeRange = 'D';
// } else if (score >= 0 && score < 60) {
//     gradeRange = 'E';
// } else {
//     gradeRange = 'Invalid';
// }

// switch(gradeRange) {
//     case 'A':
//         console.log("A");
//         break;
//     case 'B':
//         console.log("B");
//         break;
//     case 'C':
//         console.log("C");
//         break;
//     case 'D':
//         console.log("D");
//         break;
//     case 'E':
//         console.log("E");
//         break;
//     default:
//         console.log("Invalid score");
// }


// t6

let n = 0;

console.log(n>0 ? "postive" : (n<0)?  "negative": "zero");
