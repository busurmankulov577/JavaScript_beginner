// Call BACK FUNCTION
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function logPass(login, password) {
    // let login = document.getElementById('login').value;
    // let password = document.getElementById('password').value;

    if (login == "Admin" && password == 'qwe123')
        myDisplayer("Wellcome Admin");
    else if (login == "Alex" && password == 'asd123')
        myDisplayer("Wellcome Alex");
    else if (login == "Damir" && password == 'zxc123')
        myDisplayer("Wellcome Damir");
    else myDisplayer("УПС что то пошло не так ");

};

logPass("Damir", 'zxc123');





function myHtml(){
    let div = document.createElement('div');
    div.innerHTML ='And Still And NEW aplication';
    div.style.color = 'red';

    document.body.append(div);
}
myHtml();

var psarr = {
    0: 'first',
    1: 'second',
    2: 'third',
    length: 3
};
var arr2 = [];
for (let i = 0; i < psarr.length; i++) {
    arr2.push(psarr[i]);

}

console.log(arr);


//           дан массив ["first", "second", "third" ]
//           вывод [ "f", "i", "r", "s", "t" ], [ "s", "e", "c", "o", "n", "d" ] [ "t", "h", "i", "r", "d" ] 


let array = ["first", "second", "third"];
let br = [];
let br2 = [];
let br3 = [];
br.push(array[0]);
br2.push(array[1]);
br3.push(array[2]);

for (let i = 0; i < array.length; i++) {

    var mydata = br.join('');
    a = mydata.split(['']);

    var mydata = br2.join('');
    b = mydata.split(['']);

    var mydata = br3.join('');
    c = mydata.split(['']);

}

console.log(a,b,c);