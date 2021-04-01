let textHI ="Hello";
let textAll = `${textHI} iam string`;
console.log(textAll);


function someSum (a,b) {
    return a + b ;
}
console.log(`Сумма : ${someSum(5, 7)}`);



let text = `Hello!
You are on the channel
Freelancer of life!
`;
console.log(text);


let tip = "hello !\n You are \\ on the channel\n freelancer for life  "
console.log(tip);
console.log(tip.length)


let slovo = "Hello!";
let firstSymblol = slovo[0];
let lastSymblol = slovo[slovo.length -1];

console.log(firstSymblol);
console.log(lastSymblol);


for (const char of slovo){
    console.log(char)
}


let test = "hello";
// console.log(test.toUpperCase());
// console.log(test.toLowerCase());
console.log(test.slice(1, 2));
console.log(test.slice(-2, -1));
console.log(test.slice(1));


// let fls = 'Freelancer';
// let flex = `Hi Iam ${fls}`;
// console.log(flex);

let tex = 'Freelancer';
console.log(tex.slice(6,7));
console.log(tex.slice(4,7 ))
console.log(tex.toUpperCase());
console.log(tex.includes('lan', 5))

let text1 = 123 + "456";
console.log(text1);


