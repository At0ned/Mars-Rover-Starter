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

   
   for (let i=0; i < message.commands.length; i++) { 
   if (message.commands[i].commandType === "MOVE" && this.mode === "LOW_POWER") {
      let move = {
         completed: false
      }
      final.results.push(move)
   
   } else if (message.commands[i].commandType === "MOVE" && this.mode === "NORMAL") {
      this.position = message.commands[i].value
      let move = {
      completed: true,
      }
      
      final.results.push(move)
   
   } else if (message.commands[i].commandType === "STATUS_CHECK") {
      let status = {
         completed: true,
         roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position }
      }
      final.results.push(status)
      
   } else if (message.commands[i].commandType === "MODE_CHANGE") {
      this.mode = message.commands[i].value
      let mode = {
         completed: true,
      }
      final.results.push(mode)
   }
}
   
   return final
   }
}


module.exports = Rover;