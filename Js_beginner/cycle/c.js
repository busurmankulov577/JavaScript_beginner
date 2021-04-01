// let num = 5;
// while (num){
//     console.log(num);
//     num--;
// }

// let num1 = 5;
// while (num) console.log(num--);

// let num2 = 0;
// do{
//     console.log(num2);
//     num2++;
// }while(num2 < 0)

// for(let num3 = 5; num3 < 13; num3 += 2){
//     console.log(num3);
// }


// let par = 0;
// for(; par < 5; par++) {
//     console.log(par)
//     if(par == 1) break;
// }

// let num = 0;
// for (;num < 5; num++){
//     if (num == 2) continue;
//     console.log(num)
// }

firstFor: for (let num = 0; num < 2; num++){
    for (let size = 0; size < 3; size++){
        if(size == 2){
            break firstFor;
        }
        console.log(size)
    }
}