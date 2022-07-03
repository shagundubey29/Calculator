function add(data){
    let previous = document.getElementById('result').value;
    document.getElementById('result').value = previous + data;  
}
function calculator (){
    let answer = document.getElementById('result').value;
    let ans = eval(answer);
    document.getElementById('result').value = ans;
}
function erase(){
    document.getElementById('result').value = "0";
}
function lastDelete (){
    let lengthStr = document.getElementById('result').value;
    const display = lengthStr.substring(0,lengthStr.length-1);
    document.getElementById('result').value = display;
}