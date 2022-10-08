const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
//command to flip a coin: heads or tails
module.exports = {
	data: new SlashCommandBuilder()
    .setName('flipcoin')
    .setDescription('heads or tails?'),
	async execute(interaction) {
    //generate random number 0-1
    var coin = Math.floor(Math.random() * 2);
    
    //make an embed
    const embed = new EmbedBuilder()
      .setColor(0xffb829)
      .setTitle(coin? "Heads" : "Tails")
      .setImage(coin? "https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-Coin-popular-coins-flat-icons-inmotus-design-64.png" : "https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-Coin-popular-coins-flat-icons-inmotus-design-59.png")

    //print
		await interaction.reply({embeds:[embed]});
	},
};
