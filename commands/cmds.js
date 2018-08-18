const Discord = require('discord.js');
exports.run = (AI, message, args) => {
//Defining Orientation. (done)
AI.on('message', async message => {
  if (message.content === "#cmds") {
    let embed = new Discord.RichEmbed()
    .setColor('#CB4335')
    .setDescription("Here are the Basic Commands for InvAI.")
    .setThumbnail("https://media.giphy.com/media/xTiTnwtxXU2SbrTsmA/giphy.gif")
    .addField("Help", "#help", true)
    .addField("Apps", "#apps => (development)", true)
    .addField("Search", "#s => (development)", true)
    .addField("Mods", "#mods => List Of Inv\'s Mods", true)
    .addField("Rules", "#rls => Rules of Usage", true)
    .setFooter(`${message.guild.name}`, message.guild.iconURL)
    .setTimestamp()
    return await message.channel.send({embed});
  }
});
}
