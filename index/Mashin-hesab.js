'use strict';
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
// key code
document.addEventListener('keyup',function(e){
    function keycode(){
        if(e.key==='Enter'){
            mosavi();
            inputTextHeader.focus();
        }
        if(e.key==='c'){
            refresh();
            inputTextHeader.focus();
        }
        if(e.key==='/'){
            inputTextHeader.focus();
        }
        if(e.key==='*'){
            inputTextHeader.focus();
        }
        if(e.key==='+'){
            inputTextHeader.focus();
        }
        if(e.key==='-'){
            inputTextHeader.focus();
        }
        if(e.key==='.'){
            inputTextHeader.focus();
        }
        if(e.key==='0'){
            inputTextHeader.focus();
        }
        if(e.key==='1'){
            inputTextHeader.focus();
        }
        if(e.key==='2'){
            inputTextHeader.focus();
        }
        if(e.key==='3'){
            inputTextHeader.focus();
        }
        if(e.key==='4'){
            inputTextHeader.focus();
        }
        if(e.key==='5'){
            inputTextHeader.focus();
        }
        if(e.key==='6'){
            inputTextHeader.focus();
        }
        if(e.key==='7'){
            inputTextHeader.focus();
        }
        if(e.key==='8'){
            inputTextHeader.focus();
        }
        if(e.key==='9'){
            inputTextHeader.focus();
        }
        if(e.key==='^'){
            motrue=true;
            // inputTextHeader.value +='^';
            inputTextHeader.focus();
        }

        if(e.key==='q'){
            inputTextHeader.value=Math.abs(inputTextHeader.value);
            inputTextHeader.focus();
        }
        if(e.key==='r'){
            inputTextHeader.value=Math.sqrt(inputTextHeader.value);
            inputTextHeader.focus();
        }
        if(e.key==='Tab'){
            inputTextHeader.value=Math.round(inputTextHeader.value);
            inputTextHeader.focus();
        }
    }
    keycode();
})