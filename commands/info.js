const Discord = require('discord.js');
exports.run = (AI, message, args) => {
const info = new Discord.RichEmbed()
.setAuthor("Asher | Emil Barranco", "https://cdn.discordapp.com/attachments/412027360544817153/450881050386759717/smokeblue.jpg")
.setColor('#2E86C1')
.addField('Cyril\'s Skills Section:', 'Intro', true)
.addField('Purpose:', 'Assistance and Fun.', true)
.addField('Commands:', 'General Purpose: "#", Admin: "~"')
.setFooter('Actual Server: ' + `${message.guild.name}`, message.guild.iconURL)
.addField("Developed for:", "InTrace Project", true)
.setImage("https://media.giphy.com/media/NyUZkUUo5e3xm/giphy.gif")
.setTimestamp()
message.channel.send(info)
}
