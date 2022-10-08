//!!NOTE: most of the code in deploy-commands.js and index.js were pulled from the DISCORD.JS GUIDE & DOCUMENTATION. Individual command files in commands folder were done by me
//https://discordjs.guide/creating-your-bot/#resulting-code


//node deploy-commands.js

const { REST, SlashCommandBuilder, Routes } = require('discord.js');

const clientId = "612069752621498368";
const token = process.env.token;


//compile all commands in separate files ends with .js
const fs = require('node:fs');
const path = require('node:path');
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

//go thru each command files and push them all into JSON
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

//maek sure commands work
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
	  Routes.applicationCommands(clientId),
	  { body: commands },
    );

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
