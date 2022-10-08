const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require('node:fs');
//lists all the commands
module.exports = {
	data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('List all the commands avaiable.'),
	async execute(interaction) {
    //go thru all commands and list them
    let finalStr = "";
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));//filter js files in commands folder
    
    for (const file of commandFiles) { //go thru each file and put each command's name & description data into a single string
      const command = require(`./${file}`);
      finalStr += `/${command.data.name}\n-${command.data.description}\n\n`;
    }

    //make an embed
      const embed = new EmbedBuilder()
        .setTitle(`Beep Boop! My name is Yeeboi. I am bot.`)
        .setDescription(`\n-----------Commands-----------\n${finalStr}`)
    
    //finally print
    await interaction.reply({embeds:[embed]});

	},
};