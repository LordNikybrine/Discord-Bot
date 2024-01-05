const { Client, IntentsBitField } = require('discord.js');
const token = require('./token.json').token;


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
    console.log(message.author.globalName + " " + message.content);

    if(message.content === 'hello'){
        message.reply('Hey!');
    }
});

client.login(token);
