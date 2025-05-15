const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tag')
    .setDescription('Dapatkan link tag Nelly'),

  async execute(interaction) {
    await interaction.reply('you can find it here (https://nelly.tools/tags)');
  },
}
