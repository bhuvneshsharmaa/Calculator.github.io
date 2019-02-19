function insert(data){
document.form.display.value=document.form.display.value + data
}
const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

function test(s) {
  return  re.test(s)
}
function equal(){
    let expression=document.form.display.value
    let expcopy=expression
    if(expression[0]=='*'){
        document.form.display.value="undefined"
        return
    }
    if(expression[0]=='S' && test(expcopy.substring(1,expcopy.length)))
    {
        document.form.display.value=Math.sqrt(eval(expcopy.substring(1,expcopy.length)))
        return 
    }
    if( test(expression)){
        document.form.display.value=eval(expression)
    }
    else{
        document.form.display.value="undefined"
    }
}
function clean(){
    document.form.display.value=""
}
function back(){
    let expression=document.form.display.value
    document.form.display.value=expression.substring(0,expression.length-1)
}