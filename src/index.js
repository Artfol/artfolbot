require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client({ partials: ['MESSAGE', 'REACTION']});
client.login(process.env.BOT_TOKEN);

client.on('messageReactionAdd', async (reaction, user) => {
  let applyRole = async () => {
    let emojiName = reaction.emoji.name;
    console.log(emojiName);
    let role = reaction.message.guild.roles.cache.find(role =>
      emojiName === 'android' ? role.name === 'Android' : role.name === 'iOS');
    let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
    console.log(role);
    try {
      if(role && member) {
        await member.roles.add(role);
      }
    } catch(err) {
      console.log(err);
    }
  }
  if(reaction.message.partial) {
    try {
      let msg = await reaction.message.fetch();
      if(msg.id === '733475327661047889') {
        applyRole();
      }
    } catch(err) {
      console.log(err);
    }
  } else {
    if(reaction.message.id === '733475327661047889') {
      console.log(true);
      applyRole();
    }
  }
});

client.on('messageReactionRemove', async (reaction, user) => {
        let removeRole = async () => {
          let emojiName = reaction.emoji.name;
          console.log(emojiName);
          let role = reaction.message.guild.roles.cache.find(role =>
            emojiName === 'android' ? role.name === 'Android' : role.name === 'iOS');
          let member = reaction.message.guild.members.cache.find(member => member.id === user.id);
          console.log(role);
          try {
            if(role && member) {
              await member.roles.remove(role);
            }
          } catch(err) {
            console.log(err);
          }
        }
        if(reaction.message.partial) {
          try {
            let msg = await reaction.message.fetch();
            if(msg.id === '733475327661047889') {
              removeRole();
            }
          } catch(err) {
            console.log(err);
          }
        } else {
          if(reaction.message.id === '733475327661047889') {
            console.log(true);
            removeRole();
          }
        }
});
