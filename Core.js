/*Developer: Asher | Emil Barranco*/
//JavaScript Project #2 | InvAI
/* Elliot's AI Sections:                   \/('O_O')\/
     Section          |       Role          \  ^_^  /
      Help            |     @everyone        \ *_* / InvTech's First AI  Nova
      Apps            |     @everyone         \^_^/  InvTech's First AI  Star
      Search          |     @Star              \./   InvTech's First AI  Rocket
      Mod Permissions |     @Nova               *    InvTech's First AI  Steel
      Rules           |     @everyone                InvTech's First AI  Base
*/

//~~~~~~~~~~~~~~~Basic Constants~~~~~~~~~~~~~~~~~~~~~~
const Discord = require('discord.js');
const AI = new Discord.Client();
const config = require('./config.json');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let statuses = ['In Development: Basic Functions', 'In Development: Commands', 'In Development: Skills'];

AI.on("ready", () => {
     setInterval(function() {
          let status = botStatuses[Math.floor(Math.random() * statuses.lenght)];
          AI.user.setActivity({ activity: { name: status }, status: 'online' });
     }, 1000)

/*AI.on("ready", async () => {
   AI.user.setActivity("#info", {type: "STREAMING", url: "https://twitch.tv/nou"});
   console.log("Upgrading...");
   console.log(`Serving ${AI.users.size} users.`);
   console.log(`Serving ${AI.guilds.size} guilds.`);
  });*/
  
AI.on("message", async (message) => {
   if (message.author.bot) return;
   if (message.content.indexOf(config.prefix) !== 0) return;
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
   try {
        if (message.channel.type === "dm") {
            let embed1 = new Discord.RichEmbed() //info embed on ticket
                .setTitle("Error :x:")
                .setColor("db1212")
                .setDescription("DM Commands are not allowed!")
                .setFooter(`Version 1.0.0`)
            message.channel.send(embed1)
            return;
        }
    let commandFile = require(`./commands/${command}.js`);
        commandFile.run(AI, message, args);
    } catch (err) {
      console.error(err);
    }
 });

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
})

AI.login(process.env.cyril);
