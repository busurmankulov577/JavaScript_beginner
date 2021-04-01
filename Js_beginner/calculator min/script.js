
function plus() {
    var num1, num2, result
    num1 = document.getElementById("n1").value
    num1 = Number(num1);

    num2 = document.getElementById("n2").value
    num2 = Number(num2);
    result = num1 + num2
    document.getElementById("out").innerHTML = result

    console.log(result)




}
function minus() {
    var num1, num2, result
    num1 = document.getElementById("n1").value
    num1 = Number(num1);

    num2 = document.getElementById("n2").value
    num2 = Number(num2);
    result = num1 - num2
    document.getElementById("out").innerHTML = result

    console.log(result)

}


function multip() {
    var num1, num2, result
    num1 = document.getElementById("n1").value
    num1 = Number(num1);

    num2 = document.getElementById("n2").value
    num2 = Number(num2);
    result = num1 * num2
    document.getElementById("out").innerHTML = result

    console.log(result)

}


function divis() {
    var num1, num2, result
    num1 = document.getElementById("n1").value
    num1 = Number(num1);

    num2 = document.getElementById("n2").value
    num2 = Number(num2);
    result = num1 / num2
    document.getElementById("out").innerHTML = result

    console.log(result)

}



function addIn(){
    var input = document.createElement('input');
    document.body.appendChild(input);
}


function delBtn(){
    var del = document.getElementById("delete")
    del.parentNode.removeChild(del);
}