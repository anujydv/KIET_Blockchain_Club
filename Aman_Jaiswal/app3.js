var time = 0

var timer = setInterval(function(){
  time+=2;
  console.log(time + 'seconds have passed');
  if ( timer > 5){
    clearInterval(timer);
  }
}, 2000);
