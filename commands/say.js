const { SlashCommandBuilder } = require('discord.js');
//say something the user tells the bot to say anonymously
module.exports = {
	data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Say something anonymously through Yeeboi')
    .addStringOption(option =>
		  option.setName('input')
			  .setDescription('The input to echo back')
			  .setRequired(true)),
	async execute(interaction) {
      //get user inputs
      const string = interaction.options.getString('input');
		  interaction.reply({ content: 'message sent anonymously', ephemeral: true });
      await interaction.channel.send(string);
	},
};
