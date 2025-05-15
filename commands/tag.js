const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tag')
    .setDescription('Dapatkan link tag Nelly'),

  async execute(interaction) {
    try {
      await interaction.reply('you can find it here (https://nelly.tools/tags)');
    } catch (error) {
      console.error('Gagal membalas slash command:', error);
    }
  },
};
