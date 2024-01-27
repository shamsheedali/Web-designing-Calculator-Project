function buttonclick(val){
   
    document.getElementById("text-field").value+=val;
}
function clearDisplay(){
    document.getElementById("text-field").value=""
}
function equalButton(){
    var text=document.getElementById("text-field").value
    var result=eval(text)
    document.getElementById("text-field").value=result
}