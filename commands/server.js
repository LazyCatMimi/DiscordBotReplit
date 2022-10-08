const { SlashCommandBuilder } = require('discord.js');
//displays server info
module.exports = {
	data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info!'),
	async execute(interaction) {
		await interaction.reply(`Date Created: ${interaction.guild.createdAt}`);
	},
};
