
const x = (n1, n2) => {
    return n1 + n2;
   
}

// const ans = x(4,6);
// console.log(ans);


// write an arrow function to check if a string contains a specific character and return a boolean value
//using inbuilt function 
const fun = (str, char) => {
    return str.includes(char);
}

console.log(fun("afsar", "b"))
console.log(fun("afsar", "a"))

// using logic

const funn = (str, char) => {
    for(let i=0; i<str.length; i++) {
        if(str[i] === char) {
            return true;
        }
    }
    return false;
}

console.log(funn("abcd", "d"));
console.log(funn("abcd", "e"));