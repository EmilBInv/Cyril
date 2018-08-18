const Discord = require('discord.js');
exports.run = (AI, message, args) => {
let blackList = ['http://www.bannedwordlist.com/lists/swearWords.txt'];

let foundInText = false;
for(var i in blackList) {
if(message.content.toLowerCase().includes(toLowerCase())) foundInText = true;
}

if(foundInText) {
message.delete();
message.channel.send("Hey! That word is not allowed here... :neutal_face:");
}
}
