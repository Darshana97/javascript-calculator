
var no1Sel,no2Sel;

function myFun(res){


    var x,y;
    

    if(res == 'no1'){
        no1Sel = true;
        no2Sel = false;
    }
    else if(res == 'no2'){
        no2Sel = true;
        no1Sel = false;
    }

    if(no1Sel){
        x = document.getElementById(res).value;
        document.getElementById('no1').value += x;

        console.log(x);
    }

    if(no2Sel){
        y = document.getElementById(res).value;
        document.getElementById('no2').value += y;

        console.log(x);
    }

}

function add(){

    var no1,no2,result;

    no1 = document.getElementById('no1').value;
    no2 = document.getElementById('no2').value;

    result = parseInt(no1) + parseInt(no2);

    document.getElementById('res').value = result;
    console.log("add");


}

function sub(){

    var no1,no2,result;

    no1 = document.getElementById('no1').value;
    no2 = document.getElementById('no2').value;

    result = parseInt(no1) - parseInt(no2);

    document.getElementById('res').value = result;
    console.log("sub");


}

function mul(){

    var no1,no2,result;

    no1 = document.getElementById('no1').value;
    no2 = document.getElementById('no2').value;

    result = parseInt(no1) * parseInt(no2);

    document.getElementById('res').value = result;
    console.log("mul");


}

function div(){

    var no1,no2,result;

    no1 = document.getElementById('no1').value;
    no2 = document.getElementById('no2').value;

    result = parseInt(no1) / parseInt(no2);

    document.getElementById('res').value = result;
    console.log("div");


}

function clr(){
    console.log("clear");
   
    var no1 = document.getElementById('no1');
    var no2 =  document.getElementById('no2');
    var res =  document.getElementById('res');

    no1.value = "";
    no2.value = "";
    res.value = "";


}