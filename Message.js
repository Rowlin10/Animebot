const Discord = require('discord.js')
const client = new Discord.Client()
const { Client, Attachment } = require('discord.js');

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'A!avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });