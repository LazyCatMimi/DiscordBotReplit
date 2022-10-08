//!!NOTE: most of the code in deploy-commands.js and index.js were pulled from the DISCORD.JS GUIDE & DOCUMENTATION. Individual command files in commands folder were done by me
//https://discordjs.guide/creating-your-bot/#resulting-code

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
const { Collection, Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

//compile all commands in separate files
const fs = require('node:fs');
const path = require('node:path');

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


//reply only when user message is a command
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
    
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Login to Discord with  client's token
client.login(process.env.token);

//delay time
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}