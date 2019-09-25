function area(b,h)
{
  var a=(b*h)/2;
  return(a);
}
var b = prompt("Please enter breadth");
var h = prompt("Please enter height");
var ar;
ar=area(b,h);
console.log("area of triangle is = "+ar);
