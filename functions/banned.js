const Discord = require('discord.js');
exports.run = (AI, message, args) => {
  let blackList = ['fuck', 'bitch', 'slut'];
  let foundInText = false;
  for(var i in blackList) {
    if(message.content.toLowerCase().includes(toLowerCase())) foundInText = true;
  }
  if(foundInText) {
    message.delete();
    message.channel.send("Hey! That word is not allowed here... :neutal_face:");
  }
}
