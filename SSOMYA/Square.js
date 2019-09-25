function square(n)
{
  var sq=n*n;
  return(sq);
}
var num1 = prompt("Please enter first number", "0");
var num2 = prompt("Please enter second number","0");
var s,sq,sum=0;
s=square(num1);
console.log("square of "+num1+" = "+s);
sq=square(num2)
console.log("sqaure of "+num2+" = "+sq);
sum=s+sq; 
console.log("sum of the squares of the number "+sum);