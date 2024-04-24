class Rover {
   // Write code here!
   constructor(position) {
      this.position = position
      this.mode = "NORMAL"
      this.generatorWatts = 110
   }
   receiveMessage(message){
   let final = {
   message: message.name,
   results: [],
   };
   
   let roverStatus = {
      mode: "NORMAL",
      generatorWatts: 110,
      position: 98382
   }
   //if (message.commands.length === 2)
   if (message.name === "MOVE") {
   roverStatus.position = message.commands
   } else if (message.name === "STATUS_CHECK") {
      console.log(roverStatus)
   } else {
      roverStatus.mode = message.commands
   }
   

   return final
   }
}



module.exports = Rover;