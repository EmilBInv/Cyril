const Discord = require('discord.js');
exports.run = (AI, message, args) => {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
    if (member) {
      member.kick('Optional reason that will display in the audit logs').then(() => {
      const info = new Discord.RichEmbed()
      .setAuthor("Cyril | Mod", "")
      .addField(`:triumph: Successfully kicked:`,  `${user}`)
      .setColor('#424949')
      .setTimestamp();
      message.channel.send(info)
    }).catch(err => {
          message.reply('Sorry, I was unable to kick the member :frowning:');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('Mmm.. You didn\'t mention the user to kick. :| ');
    }
  }
