
const Discord = require('discord.js')
const message = require('discord.js-commando')
const client = new Discord.Client()
const { Client, Attachment } = require('discord.js');
const { RichEmbed } = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client
const ytdl = require("ytdl-core");
const {
	prefix,
} = require('./config.json');

require('dotenv').config()
client.login("NjIyMDk0Njg3NjQ1NDY2NjM0.XX6ENw.WjJyeBenvGCzmcYdMZdEvMWZjP0")

var servers = {};



fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})
// NIE RUSZAĆ



// avatar

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'A!join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.leave()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});



// avatar

//witaj
client.on('message', msg => {
  if (msg.content === 'Hej') {
    msg.reply('Witaj!')
  }
})
client.on('message', msg => {
  if (msg.content === 'Hej') {
    msg.reply('Co u ciebie?')
  }
})
//żegnaj
client.on('message', msg => {
  if (msg.content === 'Ide') {
    msg.reply('Wróc do nas za jakiś czas :)!')
  }
})

//rip
client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using Attachment
        const attachment = new
		Attachment('https://i.imgur.com/NLueckA.jpg');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    }
});


//headgirl
client.on('message', message => {
    
  if (message.content === '!Headgirl') {

      const attachment = new
  Attachment('https://i.imgur.com/cKBrAK6.jpg');

      message.channel.send(`${message.author},`, attachment);
  }
});



// POMOC
client.on('message', message => {

  if (message.content === 'A!pomoc') {

    const embed = new RichEmbed()
    .setColor('#0099ff')
    .setTitle('Pomoc')
    .setAuthor('Animebot', 'https://i.imgur.com/BrISGeU.jpg')
    .setDescription('Tu znajdziesz moje komendy')
    .addField('A!pomoc', 'Pokazuje wszystkie komendy', true)
    .addField('A!kick', 'Kickuje osobe : A!kick @user', true)
    .addField('A!ban', 'Banuje osobe : A!ban @user', true)
    .setImage('https://i.imgur.com/BrISGeU.jpg')
    .setTimestamp()
    message.channel.send(embed);
  }
});
//POMOC


//Ban
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  if (message.content.startsWith('A!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Przykro nam ale zostałeś zbanowany!',
        }).then(() => {
          message.reply(`Sukcess zbanowano ${user.tag}`);
        }).catch(err => {
          message.reply('Nie mogę go zbanować :(');

          console.error(err);
        });
      } else {
        message.reply('Ten ktoś nie jest na serwerze!');
      }
    } else {

      message.reply('Kogo mam zbanować ?');
    }
  }
});
//Ban


// MUZYKA


