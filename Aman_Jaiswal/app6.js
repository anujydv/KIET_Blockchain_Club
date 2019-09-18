function callFunction(fun) {
  fun();
}

//function expression
var sayBye = function(){
  console.log('Bye');
};

callFunction(sayBye); 
