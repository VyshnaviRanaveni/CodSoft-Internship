function validatescreen()
{    
document.getElementById("d").value;
}
function show(value)
{
document.getElementById("d").value+=value;
}
function compute()
{
var expression = document.getElementById('display').value;
var result = eval(expression);
document.getElementById('display').value = result;
}