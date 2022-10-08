const { SlashCommandBuilder } = require('discord.js');
//command to flip a coin: heads or tails
module.exports = {
	data: new SlashCommandBuilder()
    .setName('flipcoin')
    .setDescription('heads or tails?'),
	async execute(interaction) {
		var coin = Math.floor(Math.random() * 2);
      if (coin){
        await interaction.reply('You rolled: Heads!');
      }
      else{
        await interaction.reply('You rolled: Tails!');
      }
	},
};
