const Discord = require('discord.js');
exports.run = (AI, message, args) => {
  const info = new Discord.RichEmbed()
  .setAuthor("Rehsa | Asher", "https://cdn.glitch.com/22f8ea41-6014-45f6-a164-9267d55b17e5%2FGreyCover.jpg?1534656385652")
  .setColor('#2E86C1')
  .addField(':robot: Cyril\'s Skills Section:', 'Intro', true)
  .addField(':radio_button: Purpose:', 'Assistance and Fun.', true)
  .addField(':wrench: Commands:', 'General Purpose: "#", Admin: "~"')
  .setFooter('Actual Server: ' + `${message.guild.name}`, message.guild.iconURL)
  .addField(":dizzy: Developed for:", "InTrace Project", true)
  .setImage("https://media.giphy.com/media/NyUZkUUo5e3xm/giphy.gif")
  .setTimestamp()
  message.channel.send(info)
}
