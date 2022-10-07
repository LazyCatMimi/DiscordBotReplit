
//express web server
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("bot is up!");
})

app.get("/", (req, res) => {
  res.send("Hello World");
})

//discord stuff
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

//reply only when user message is a command
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
    
	const { commandName } = interaction;
  //get user inputs
  const string = interaction.options.getString('input');

  //commands and their functions
  switch (commandName){
    case 'ping': //ping command
      await interaction.reply('Pong!');
      break;
    case 'server': //server command
      await interaction.reply(`Date Created: ${interaction.guild.createdAt}`);
      break; 
    case 'help': //help command
      await interaction.reply('Hello! My name is Yeeboi. I am bot. Beep Boop.\n I can:\n`/ping\nreplies with pong for testing.\n\n/server\ndisplay server info.\n\n/spam [input]\nspam something.\n\n/singbday [input]\nsing the birthday song to someone.`');
      break;
    case 'spam': //spam command
      interaction.reply('spamming 3 times!');
      for (var i = 0; i < 3; i++){
        delay(2000);
        await interaction.channel.send(string);
      }
      break;
    case 'singbday': //sing happybday command
      await interaction.reply(singBday(string));
      break;
  }
});

// Login to Discord with  client's token
client.login(process.env.token);

//happybday function
function singBday(string){
  return '\nHappy Birthday to you\nHappy Birthday to you\nHappy Birthday dear ' + string +'\nHappy Birthday to you!\nWe wish you a happy birthday! <3';
}

//delay time
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}