class Message {
   constructor(name, commands) {
   this.name = name 
      if (!name) {
         throw Error("No message was passed.")
      }
   this.commands = commands
   }

}


module.exports = Message;