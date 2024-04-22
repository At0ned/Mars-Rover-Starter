class Rover {
   // Write code here!
   constructor(position) {
      this.position = position
      this.mode = "NORMAL"
      this.generatorWatts = 110
   }
   receiveMessage(message){
   let final = {
   received: message,
   results: [],
   };

   return final
   }
}
let wally = new Rover(100)
console.log(wally.receiveMessage("MOVE", "HEY"))


module.exports = Rover;