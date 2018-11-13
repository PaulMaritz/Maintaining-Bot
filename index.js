const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTExMjg0NjA3ODQ5NTk0ODgw.DsorlA.9EEkOY10TD9Wpo3mNbCZPj3dj4U'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = []; 
global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', Welcome to the Gamer Revolution Server?');
    }
});    

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);
