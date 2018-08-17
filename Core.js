/*Developer: Asher | Emil Barranco*/
//JavaScript Project #2 | InvAI
/* Inv's AI Sections:                      \/('O_O')\/
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

AI.on("ready", async () => {
   AI.user.setActivity("#help", {type: "STREAMING", url: "https://twitch.tv/nou"});
   console.log("Upgrading...");
   console.log(`Serving ${AI.users.size} users.`);
   console.log(`Serving ${AI.guilds.size} guilds.`);
  });
  
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
                .setFooter(`Version ` + package.version)
            message.channel.send(embed1)
            return;
        }
    let commandFile = require(`./commands/${command}.js`);
        commandFile.run(AI, message, args);
    } catch (err) {
      console.error(err);
    }
 });

AI.login(process.env.cyril);
