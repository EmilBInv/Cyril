const Discord = require('discord.js');
exports.run = (AI, message, args) => {
//Defining Orientation. (done)
AI.on('message', async message => {
  if (message.content === "#cmds") {
    let embed = new Discord.RichEmbed()
    .setColor('#2E86C1')
    .setDescription("Here are the Basic Commands for Cyril.")
    .setThumbnail("https://media.giphy.com/media/xTiTnwtxXU2SbrTsmA/giphy.gif")
    .addField(":grin: Help", "#help", true)
    .addField(":iphone: Apps", "#apps => (development)", true)
    .addField(":mag_right: Search", "#s => (development)", true)
    .addField(":tools: Mods", "#mods => List Of Cyril\'s Mods", true)
    .addField(":no_entry_sign: Report", "#report => To report a user.", true)
    .addField(":blue_book: Rules", "#rls => Rules of Usage", true)
    .setFooter(`${message.guild.name}`, message.guild.iconURL)
    .setTimestamp()
    message.channel.send("I sent you by PM the Commands. :upside_down:");
    message.author.send({embed});
  }
});
}
