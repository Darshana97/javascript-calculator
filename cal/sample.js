
// var no1Sel,no2Sel;
var calArr = [];
var count = 0;

function myFun(res){


    var x,y;
    

    // if(res == 'no1'){
    //     no1Sel = true;
    //     no2Sel = false;
    // }
    // else if(res == 'no2'){
    //     no2Sel = true;
    //     no1Sel = false;
    // }

    // if(no1Sel){
    //     x = document.getElementById(res).value;
    //     document.getElementById('no1').value += x;

    //     console.log(x);
    // }

    // if(no2Sel){
    //     y = document.getElementById(res).value;
    //     document.getElementById('no2').value += y;

    //     console.log(x);
    // }

    x = document.getElementById(res).value;
    document.getElementById('res').value += x;
    document.getElementById('oprt').innerHTML += x;
    calArr.push(x);
    console.log(calArr);

}

function add(sign){

    // var no1,no2,result;

    var oprt = document.getElementById(sign).value;
    document.getElementById('oprt').innerHTML += oprt;
    calArr.push(oprt);
    document.getElementById('res').value = "";


    // no1 = document.getElementById('no1').value; 
    // no2 = document.getElementById('no2').value;

    // result = parseInt(no1) + parseInt(no2);

    // document.getElementById('res').value = result;
    // console.log("add");


}

function sub(sign){

    // var no1,no2,result;

    // no1 = document.getElementById('no1').value;
    // no2 = document.getElementById('no2').value;

    // result = parseInt(no1) - parseInt(no2);

    // document.getElementById('res').value = result;
    // console.log("sub");

    var oprt = document.getElementById(sign).value;
    document.getElementById('oprt').innerHTML += oprt;
    calArr.push(oprt);
    document.getElementById('res').value = "";


}

function mul(sign){

    // var no1,no2,result;

    // no1 = document.getElementById('no1').value;
    // no2 = document.getElementById('no2').value;

    // result = parseInt(no1) * parseInt(no2);

    // document.getElementById('res').value = result;
    // console.log("mul");

    var oprt = document.getElementById(sign).value;
    document.getElementById('oprt').innerHTML += oprt;
    calArr.push(oprt);
    document.getElementById('res').value = "";


}

function div(sign){

    // var no1,no2,result;

    // no1 = document.getElementById('no1').value;
    // no2 = document.getElementById('no2').value;

    // result = parseInt(no1) / parseInt(no2);

    // document.getElementById('res').value = result;
    // console.log("div");

    var oprt = document.getElementById(sign).value;
    document.getElementById('oprt').innerHTML += oprt;
    calArr.push(oprt);
    document.getElementById('res').value = "";


}

function clr(){
    console.log("clear");
   
    // var no1 = document.getElementById('no1');
    // var no2 =  document.getElementById('no2');
    var res =  document.getElementById('res');
    var oprt = document.getElementById('oprt');

    // no1.value = "";
    // no2.value = "";
    res.value = "";
    oprt.innerHTML = "";
    calArr = [];


}

function eq(){

    var sum = 0;    

    for(var i=0; i<calArr.length;i++){
        sum += calArr[i];
    }

    document.getElementById('res').value = eval(sum);




}