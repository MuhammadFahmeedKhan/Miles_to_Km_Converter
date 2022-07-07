var miles = document.getElementById('miles');
var km = document.getElementById('km');
var error = document.getElementById('error');

function convert(){
    if(miles.value==""){
        error.innerText="Please Enter Value";
    
        setTimeout(()=>{
            error.innerText="";
        },3000)
    }
    
    else{
        km.value = miles.value*1.60934;
    }
}
