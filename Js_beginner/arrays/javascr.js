// let arr = [
//     "Ваня",
//     "Vasya",
//     "Olya",
// ];

// arr.splice(1, 1);






// // arr.push("Marsel");             //  метод .push добавляет элемент в конец массива 
// // arr.push("Asan","Uson");
// // arr.unshift("Damir","Bektur");  // добавляет элемент в начало
// // arr.shift();                    // метод shift удаляет элемент в начале 
// // arr.pop();                      // удаляет последний элемент pop
// // let arrNew = arr;
// // arrNew.length = 2;

// // arr[0] = "KOLA"
// // arr[2] = "Sergey"
// console.log(arr);
// // console.log(arr.length);


// let arrt = [
//     "Ваня",
//     "Vasya",
//     "Olya",
// ];
// let removed = arrt.splice(1, 1);

// console.log(removed);


// let arr3 = [
//     "Ваня",
//     "Vasya",
//     "Olya",
// ];

// arr3.splice(0, 1, 'Uber');
// console.log(arr3);

// let arr4 = [
//     "Ваня",
//     "Vasya",
//     "Olya",
// ];

// arr4.splice(1, 0, "Dino" , "code")
// console.log(arr4);

// let arr5 = [
//     "Ваня",
//     "Vasya",
//     "Olya",
// ];

// arr5.splice(-1, 1);
// console.log(arr5)



// let arr6 = [
//     "Ваня",
//     "Vasya",
//     "Olya",
// ];

// let arr7 = arr6.slice(1, 2);
// console.log(arr7);

// let arr8 = arr6.slice(-2, -1);
// console.log(arr8);

// let arr9 = arr6.slice();
// console.log(arr9);


// let array1 = [
//     "San",
//     "Var",
//     "LEt",
// ];
// let array2 = array1.concat("Petr");
// console.log(array2);


// let array3 = [
//     "Ваня",
// //     "Vasya",
// //     "Olya",
// // ];

// // console.log(array3.indexOf("Vasya"));
// // console.log(array3.includes("Vasya",2));

// let array4 = [
//     {fname:"Ваня", age: 28},
//     {fname:"Vasa", age: 15},
//     {fname:"Sana", age: "Not"},
// ];

// let resultOne = array4.filter(function(item,index,array){
//     return item.age >= 15;
// });

// // let resultOne = array4.(item => item.age ===15);
// console.log(resultOne);


// // let resultTwo = array4.findIndex(item => item.age ===15);
// // console.log(resultTwo);

// let array3 = [
//     12,
//     25,
//     22,
//     1,
//     8,
// ];
// // console.log(array3.sort());
// // function compareNumberic(a, b){
// //     console.log(`Compare Num ${a} and ${b}`);
// //     // if(a > b) return 1;
// //     // if(a == b) return 0;
// //     // if(a < b)return -1;
// //     return a - b
// // }
// console.log(array3.sort((a, b ) => a - b));
// // console.log(array3.sort(compareNumberic));

// let array3 = [
//         "Ваня",
//         "Vasya",
//         "Olya",
// ];
// console.log(array3.length);

// for (let i = 0; i < array3.length; i++){
//     console.log(array3[i]);
// }

// Задача 1
let arra = [
        "Ваня",
        "Vasya",
        "Olya",
];
let newArr = arra;
newArr.push('Petr');
console.log(arra.length)


// Задача 2

let array = ["VAna","Ichtvan"];
array.push("Ola");
console.log(array);
array[1] = "petya";
console.log(array);
array.shift();
let removed = array.splice(1, 1);

console.log(removed);
console.log(array);
array.unshift("Masa","pasa");
console.log(array);



