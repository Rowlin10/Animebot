const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const { RichEmbed } = require('discord.js');

client.login('NjIyMDk0Njg3NjQ1NDY2NjM0.XXu5eA.MbwLpTWuhszCpDpLhS6aVYVlv0E')



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});



// wiadomośći



//smutno mi
client.on('message', msg => {
  if (msg.content === 'Smutno mi') {
    msg.reply('Rozchmusz sie!')
  }
})
client.on('message', msg => {
  if (msg.content === 'Smutno mi') {
    msg.reply('Jak mogę cie pocieszyć?')
  }
})


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
    // If the message is '!Headgirl'
    if (message.content === '!Headgirl') {
        // Create the attachment using Attachment
        const attachment = new
		Attachment('https://i.imgur.com/cKBrAK6.jpg');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    }
});



// Powitanie członka na serwerz
client.on('guildMemberAdd', member => {
  member.send(
    `Witaj na Serwerze 😀`
  )
})


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'A!pomoc') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Komendy Pomoc!')
      // Set the color of the embed
      .setColor(0x0052A3)
      // Set the main content of the embed
      .setDescription('Tutaj poznasz Moje komendy!');

    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});





