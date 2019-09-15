const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAYclient.login(process.env.BOT_TOKEN);
client.login('NjIyMDk0Njg3NjQ1NDY2NjM0.XXu5eA.MbwLpTWuhszCpDpLhS6aVYVlv0E')
