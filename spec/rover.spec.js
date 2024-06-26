const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    
// let response = rover.receiveMessage(message);


//Test 7
test("constructor sets position and default values for mode and generatorWatts", function (){
let rover = new Rover(98382);    
  expect(rover.position).toEqual(98382);
  expect(rover.mode).toEqual("NORMAL");
  expect(rover.generatorWatts).toEqual(110);
})
//Test 8
test("response returned by receiveMessage contains the name of the message", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);    
  expect(rover.receiveMessage(message)).toMatchObject({message: message.name});
})
//Test 9
test("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    
let response = rover.receiveMessage(message);
  expect(response.results.length).toEqual(message.commands.length);
})
//Test 10
test("responds correctly to the status check command", function () {
  let stat = [new Command("STATUS_CHECK")]
  let message = new Message("STATUS_CHECK", stat)
  let rover = new Rover(98382);    
  let cleanUp = rover.receiveMessage(message)
  expect(cleanUp.results).toEqual([{
    completed: true,
    roverStatus: {mode: rover.mode, generatorWatts: rover.generatorWatts, position: rover.position }
 }])

})
//Test 11
test("responds correctly to the mode change command", function () {
let low = [new Command("MODE_CHANGE", "LOW_POWER")]
let message = new Message("MODE_CHANGE", low)
let rover = new Rover(98382);    
expect(rover.receiveMessage(message).results).toEqual([{completed: true}])
expect(rover.mode).toEqual("LOW_POWER")
})
//Test 12
test("responds with a false completed value when attempting to move in LOW_POWER mode", function (){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 12000)];
  let message = new Message("Can't Move", commands)
  let rover = new Rover(98382);    
  expect(rover.receiveMessage(message).results).toEqual([{completed: true}, {completed: false}])
})
//Test 13
test("responds with the position for the move command", function (){
  let commands = [new Command('MOVE', 12000)]
  let message = new Message("We should move", commands)
  let rover = new Rover(98382);    
  expect(rover.receiveMessage(message).results).toEqual([{completed: true}])
  expect(rover.position).toEqual(12000)
})
});
