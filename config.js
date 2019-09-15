const Commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client),{
            name: 'Join',
            group: 'music',
            memerName: 'join',
            description:'Dołącz do chatu głosowego'

        });
    }

    async run(message, args)
    {
        if(message.memeber.voiceChanneel)
        {
            message.member.voiceChannel.join()
                .then(connection =>
                    {
                        message.reply("Sukcess połączono!")
                    })
        }
    }
    else
    {
        message.reply("Musisz być w czacie głosowym bym mógł dołączyć ");
    }
}

module.exports = JoinChannelCommand;