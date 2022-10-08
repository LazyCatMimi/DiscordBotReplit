const { SlashCommandBuilder } = require('discord.js');
//lists all the commands
module.exports = {
	data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('List all the commands avaiable'),
	async execute(interaction) {
		await interaction.reply('Hello! My name is Yeeboi. I am bot. Beep Boop.\n I can:\n`/ping\n-replies with pong for testing.\n\n/server\n-display server info.\n\n/spam [input]\n-spam something 3 times.\n\n/singbday [input]\n-sing the birthday song to someone.\n\n/flipcoin\n-flip a coin.`');
	},
};