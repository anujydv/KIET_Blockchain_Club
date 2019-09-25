var num1 = prompt("Please enter first number", "0");
var num2 = prompt("Please enter second number","0");
var num3 = prompt("Please enter third number","0");
console.log("entered numbers in descending order");
if(num1>num2 && num1>num3)
  {
    if(num2>num3)
      {
        console.log(num1+","+num2+","+num3);
      }
    else
      {
        console.log(num1+","+num3+","+num2);
      }
  }
if(num2>num1 && num2>num3)
  {
   if(num1>num3)
     {
       console.log(num2+","+num1+","+num3);
     }
    else
      {
        console.log(num2+","+num3+","+num1);
      }
  }
if(num3>num1 && num3>num2)
  {
    if(num2>num1)
      {
        console.log(num3+","+num2+","+num1);
      }
    else
      {
        console.log(num3+","+num1+","+num2);
      }
  }
