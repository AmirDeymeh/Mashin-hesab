const btna=document.querySelectorAll('.btna');
const pish=document.getElementById('pish');
let motrue=false;
let inputTextHeader=document.getElementById('inputText');
function addtodeValue(a){
    inputTextHeader.value +=a;
}
function mosavi(){
    let p1=inputTextHeader.value;
    if(motrue){
        let aryeh=inputTextHeader.value.split('^');
        document.getElementById('inputText').value=Math.pow(aryeh[0],aryeh[1]);
        motrue=false;
    }else{
        document.getElementById('inputText').value=eval(inputTextHeader.value);
    }
    pish.innerHTML=p1+'='+inputTextHeader.value;
}
function refresh(){
    inputTextHeader.value='';
}
function mathCalector(a){
    if(a == 'pow'){
        motrue=true;
        inputTextHeader.value +='^';
    }else{
        let val=inputTextHeader.value;
        inputTextHeader.value=Math[a](val);
    }
}