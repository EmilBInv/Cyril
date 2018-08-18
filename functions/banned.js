const Discord = require('discord.js');
exports.run = (AI, message, args) => {
  AI.on('message', async (message) => {
    let blackList = ['fuck', 'bitch', 'slut'];
    let foundInText = false;
    for(var i in blackList) {
      if(message.content.toLowerCase().includes(toLowerCase())) foundInText = true;
    }
    if(foundInText) {
      message.delete();
      let embed = new Discord.RichEmbed()
      .addField("Hey! That word is not allowed here... :neutal_face:")
      .setColor("#7429AA")
      .setTimestamp()
      return await message.channel.send({embed});
  }
}
