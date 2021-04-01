// function showMessage(){
//     console.log('WIKKI WICHI WUKI');
// }



// showMessage();

// function calcSum(numOne, numTwo){
//     console.log('Переменная numOne:',numOne);
//     console.log('Переменная numTwo:',numTwo)

//     let numSumm = numOne + numTwo;
//     console.log("Сумма: ",numSumm);

// }

// calcSum(3, 5);

function calcSum(numOne, numTwo, more ,less){
    let numSumm = numOne + numTwo;

    if(numSumm > 3){
        more();
    }else{
        less();
    }
}
function showMoreMessage(){
    console.log('MORE THAN 3')
}
function showLessMessage(){
    console.log('LESS THAN 3')
}

calcSum(1, 5, showMoreMessage, showLessMessage);

