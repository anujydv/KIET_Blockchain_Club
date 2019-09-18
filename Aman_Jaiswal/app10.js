var evenyts = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});
//elements.on('click', function(){})

myEmitter.emit('someEvent', 'the event is emitted');
