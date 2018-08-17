const Discord = require('discord.js');
exports.run = (AI, message, args) => {
const info = new Discord.RichEmbed()
.setAuthor("Asher | Emil Barranco", message.author.avatarURL)
.setDescription("Discord Bot created by Asher")
.setThumbnail(AI.user.avatarURL)
.setTimestamp()
.setFooter("Requested by: " + message.author.username)
message.channel.send(info)
}
