const { SlashCommandBuilder, EmbedBuilder, Message } = require('discord.js');
//command to flip a coin: heads or tails
module.exports = {
	data: new SlashCommandBuilder()
    .setName('ask8ball')
    .setDescription('Ask a yes/no question to the magical 8 ball.')
    .addStringOption(option =>
		  option.setName('question')
			  .setDescription('your question here')
			  .setRequired(true)),
	async execute(interaction, message) {
    //generate random number 0-1
    const question = interaction.options.getString('question');
    let answers = ["Yes", "No", "Maybe", "Never", "Always"];
    let rand = Math.floor(Math.random() * answers.length);
    
    //make an embed
    const embed = new EmbedBuilder()
      .setColor(0x5614db)
      .setTitle(`${interaction.member.nickname} asked: ${question}`)
      .setDescription(`🔮 ${answers[rand]}`)
      
    //print
		await interaction.reply({embeds:[embed]});
	},
};
