const btn = document.getElementById('btn_click');

const input1 = document.getElementById('input1');
const result1 = document.getElementById('result1')

const input2 = document.getElementById('input2')
const result2 = document.getElementById('result2')

const input3 = document.getElementById('input3')
const result3 = document.getElementById('result3')

let message = '';
let message1 = '';
let message2 = '';

function btnClickReaction(){
    alert(message);
    alert(message1);
    alert(message2); 
    result1.innerHTML = message;
    result2.innerHTML = message1;
    result3.innerHTML = message2;
   
}


btn.addEventListener('click', btnClickReaction);




input1.addEventListener('input',function(event){
    message = event.target.value;
})
input2.addEventListener('input' , function(event){
    message1 = event.target.value;
})
input3.addEventListener('input' , function(event){
    message2 = event.target.value;
})