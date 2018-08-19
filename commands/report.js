const Discord = require("discord.js");
exports.run = (AI, message, args) => {
  let rUser = message.guild.member(
    message.mentions.first() || message.guild.members.get(args[0])
  );
  if (!rUser)
    return message.channel.send("Sorry... Couldn't find the user. :frowning:");
  let repReason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#2E86C1")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Reason", repReason)
    .addField("Channel", message.channel)
    .setTimestamp();

  let reportsChannel = message.guild.channels.find(`name`, "reports");
  if (!reportsChannel)
    return message.channel.send("Couldn't find report channel.");

  message.delete().catch(O_o => {});
  reportsChannel.send(reportEmbed);
};
