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
      status: new Rover()
   }
   
   for (let i=0; i < message.commands.length; i++) {
   if (message.name === "MOVE") {
      roverStatus.position = message.commands
      final.results.push(roverStatus)
   
   } else if (message.name === "STATUS_CHECK") {
      final.results.push(roverStatus)
      
   } else {
      roverStatus.mode = message.commands
      final.results.push(roverStatus)
   }
}
   

   return final
   }
}


module.exports = Rover;