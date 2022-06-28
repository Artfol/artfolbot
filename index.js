require('dotenv').config();
const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require('discord.js');
const service = require('./service.js');
const client = new discord.Client()
const prefix = '!artfol';

client.login(process.env.TOKEN).then((token) => {
  client.user.setActivity('!artfol for help', {
    type: 'PLAYING', 
  });
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.replace("!artfol ", "");
  switch(command){
    case 'random':
      await service.getRandom( function(response) {
        message.channel.send("https://www.artfol.me/" + response);
      });
    break;
    default:
    break;
  }
});
