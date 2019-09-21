function Add()
{
	var num1 =parseInt(prompt("Enter the first number"));
    var num2 =parseInt(prompt("enter the second number"));
	let addition;
	addition = num1+num2;
	document.write("The Sum of " + num1 + " and " + num2 + " is = " + addition);
}
function Subtract()
{

	var num1 =parseInt(prompt("Enter the first number"));
    var num2 =parseInt(prompt("enter the second number"));
	let	subtraction;
	subtraction = num1-num2;
	document.write("The Difference of " + num1 + " and " + num2 + " is = " + subtraction);
}
function Multiply()
{
	var num1 =parseInt(prompt("Enter the first number"));
    var num2 =parseInt(prompt("enter the second number"));
	let multiplication;
	multiplication = num1 * num2;
	document.write("The Product of " + num1 + " and " + num2 + " is = " +multiplication);
}
function divide()
{
	var num1 =parseInt(prompt("Enter the first number"));
    var num2 =parseInt(prompt("enter the second number"));
    if(num2!=0)
    {
	let	division;
	division = num1/num2;
	document.write("The Division of " + num1 + " and " + num2 + " is = " +division);
	}
	else
	{
		document.write("Divided by Zero error");
	}
}
function remainder()
{
	var num1 =parseInt(prompt("Enter the first number"));
    var num2 =parseInt(prompt("enter the second number"));
    if(num2!==0)
    {
    	let remain;
    	remain = num1%num2;
    	document.write("Remainder of " + num1 + " and "+num2+" is = "+remain);
    }
    else
    {
    	document.write("Undefined result due to num2 is 0");
    }

}
