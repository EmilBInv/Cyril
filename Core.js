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

AI.on("ready", async () => {
   AI.user.setActivity("#info", {type: "STREAMING", url: "https://twitch.tv/nou"});
   console.log("Upgrading...");
   console.log(`Serving ${AI.users.size} users.`);
   console.log(`Serving ${AI.guilds.size} guilds.`);
  });

//const messageReplace = "Do not swear, we try to keep a safe environment for all :blush:";  
AI.on("message", async (message) => {
   if (message.author.bot) return;
   const swearWords = ["darn", "cunt", "asshole", "bitch", "turd"];
     if( swearWords.some(word => message.content.includes(word)) ) {
          message.delete()
          let embed = new Discord.RichEmbed()
          .addField("Hey! That kind of words are not allowed here... :neutral_face:", true)
          .setColor("#7429AA")
          .setTimestamp()
          message.channel.send(embed);
          // Or just do message.delete();
     }
   if (message.content.indexOf(config.prefix) !== 0) return;
   const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
     
   //-----------------Banned Words-----------------
   //----------------------------------------------
   /*let edit = message.content.replace(/asshole/gi, messageReplace);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);*/

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

AI.login(process.env.cyril);
