const { SlashCommandBuilder } = require('discord.js');
//spam user's inputted message 3 times
module.exports = {
	data: new SlashCommandBuilder()
    .setName('spam')
    .setDescription('Spam something!')
    .addStringOption(option =>
		  option.setName('input')
			  .setDescription('The input to echo back')
			  .setRequired(true)),
	async execute(interaction) {
      //get user inputs
      const string = interaction.options.getString('input');
		  interaction.reply('spamming 3 times!');
      for (var i = 0; i < 3; i++){
        await interaction.channel.send(string);
      }
	},
};
