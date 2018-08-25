const Discord = require("discord.js");
exports.run = (AI, message, args) => {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        let banReason = args.join(" ").slice(22);
        member.ban('Optional reason that will display in the audit logs').then(() => {
          const info = new Discord.RichEmbed()
          .setAuthor("Cyril | Mod", message.author.avatarURL)
          .addField(`:triumph: Successfully kicked:`,  `${user}`)
          .addField(`This User/Bot was kicked because: `, `${banReason}`)
          .setColor('#F39C12')
          .setTimestamp();
          message.channel.send(info)
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
}
