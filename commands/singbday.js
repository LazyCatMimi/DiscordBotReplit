const { SlashCommandBuilder } = require('discord.js');
//sing happy birthday to @dded user
module.exports = {
	data:new SlashCommandBuilder()
    .setName('singbday')
    .setDescription('Sing a bday song to someone!')
    .addStringOption(option =>
		  option.setName('input')
			  .setDescription('A person')
			  .setRequired(true)),
	async execute(interaction) {
    //get user inputs
    const string = interaction.options.getString('input');
		await interaction.reply(`\nHappy Birthday to you\nHappy Birthday to you\nHappy Birthday dear ${string}\nHappy Birthday to you!\nWe wish you a happy birthday! <3`);
	},
};
