// let obj = {
//     fname: "Damir",
//     age: 20,
//     adress:{
//         city: "Bishkek",
//         street: "Freedom"
//     }

// };
// obj.papa = "Asylbek";
// obj["like js "] = true;

// obj.email = {
//     emailad: "busr@gmail",
//     free: 12
// };

// // if ("fname" in obj){
// //     console.log(obj.fname);

// // }


// for (let key in obj){
//     console.log(key);

//     console.log(obj[key]);
// }
// // console.log(obj);


// for (let key in obj.adress){
//     console.log(key);
//     console.log(obj.adress[key]);
// }







// function makeUserInfo(name, age){
//     return {
//         name:name,
//         age:age,
//     };
// }

// let user = makeUserInfo("Damir",21);
// console.log(user);


let userInfo = {
    fname: "VASA",
    age: 30,
    adress:{
        city: "Bishkek",
        street: "Freedom"
    },
    


};


function UserInfo (name){
    this.name= name;
    this.age = 30;

}

console.log(new UserInfo("Damir"));
console.log(new UserInfo("MAza"));

let pustoi = {
    name: "Casa",
    age: 33,
}

pustoi.name = "lena";
console.log(pustoi)
delete pustoi.name;
console.log(pustoi)