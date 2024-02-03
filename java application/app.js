
var displyinput = document.getElementById('displyinput')



function getval(val){
    displyinput.value += val;
}

function calculate(){
var a = displyinput.value = eval(displyinput.value);
}
function clearALL(){
    displyinput.value = "";
}