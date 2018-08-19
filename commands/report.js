const Discord = require("discord.js");
exports.run = (AI, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser)
    return message.channel.send("Sorry... Couldn't find the user. :frowning:");
  let repReason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#2E86C1")
    .addField(":anger: Reported User:", `${rUser}`, true)
    .addField(":speaking_head: Reported By:", `${message.author}`, true)
    .addField(":exclamation: Reason:", `repReason`, true)
    .addField(":closed_book: Channel:", message.channel, true)
    .setThumbnail("https://media.giphy.com/media/3SZUsUsZvSpJm/giphy.gif")
    .setTimestamp();

  let reportsChannel = message.guild.channels.find(`name`, "reports");
  if (!reportsChannel)
    return message.channel.send("Couldn't find report channel. :frowning:");

  message.delete().catch(O_o => {});
  reportsChannel.send(reportEmbed);
};
