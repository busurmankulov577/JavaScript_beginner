let userName = '';
let userNickName = 'Damir';

let user = userName || userNickName || "NotName";
console.log(user);


let admins = 10;
let users = 5;
admins > users  || users++;
console.log(users);

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false)

console.log("freelancer " && 0 && 2 && 3);

console.log(1 && 2 && null &&3);

console.log('15' && '42');

console.log(1 && 0 || 2 && 1);

let userss = 1 ;
(userss > 0) && console.log('USERS ${userss}');
console.log(!true);
console.log(!true && 58 || 18 && !1);

// let nam = "damir";
// console.log(nam ?? "NOTNAME")