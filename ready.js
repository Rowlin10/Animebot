
const Discord = require('discord.js')
const client = new Discord.Client()
const { Client, Attachment } = require('discord.js');
const bot = new Discord.Client({ disableEveryone: true });

module.exports = client => {
    console.log(`zalogowano ${client.user.tag}!`)

    client.user.setActivity('A!pomoc', { type: 'Playing' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
  }

  client.once('reconnecting', () => {
    console.log('Reconnecting!');
   });
   client.once('disconnect', () => {
    console.log('Disconnect!');
   });