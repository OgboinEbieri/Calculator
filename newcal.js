//the function accepts the value clicked as a parameter and returns the same to the textbox
function display(val){
    document.getElementById('calc').value += val
    return val
}
//this method is called when the equal opertaor is clicked and x variable accepts the mathematical expression
// and is evaluated and stored in the variable y
function solve(){
    let x = document.getElementById('calc').value
    let y = eval(x);
    document.getElementById('calc').value =y
    return y 
}
//it is called when the user clicks on  the clear button
function clearScreen(){
 let remove= document.getElementById('calc').value = '' ;
}
