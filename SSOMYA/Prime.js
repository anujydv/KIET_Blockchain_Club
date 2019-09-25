var num = prompt("Please enter a number", "1");
var i,c=0;
for(i=2;i<=num;i++)
  {
    if(num%i===0)
      {
        c++;
        console.log(c);
      }
  }
if(c>1)
  {
    console.log(" no. is not prime ");
  }
else
  {
    console.log(" no is prime ");
  }