//node deploy-commands.js

const { REST, SlashCommandBuilder, Routes } = require('discord.js');

const clientId = "612069752621498368";
const guildId = "376133469820026901";
const token = process.env.token;

//add commands
const commands = [
	new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
	new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info!'),
  new SlashCommandBuilder()
    .setName('help')
    .setDescription('List all the commands avaiable'),
  new SlashCommandBuilder()
    .setName('spam')
    .setDescription('Spam something!')
    .addStringOption(option =>
		  option.setName('input')
			  .setDescription('The input to echo back')
			  .setRequired(true)),
  new SlashCommandBuilder()
    .setName('singbday')
    .setDescription('Sing a bday song to someone!')
    .addStringOption(option =>
		  option.setName('input')
			  .setDescription('A person')
			  .setRequired(true)),
]
	.map(command => command.toJSON());




const rest = new REST({ version: '10' }).setToken(token);

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
