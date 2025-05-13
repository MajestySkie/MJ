require('dotenv').config();
const keepAlive = require('./server.js');
keepAlive();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Bot aktif sebagai ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  if (content.includes("tag") || content.includes("tags")) {
    message.reply("you can find it here (https://nelly.tools/tags)");
  } else if (
    content.includes("thanks") ||
    content.includes("thank you") ||
    content.includes("ty")
  ) {
    message.reply("Glad to help, need more help? tags <&@1370633231774257254> <&@1370638346530853005>");
  }
});

client.login(process.env.TOKEN);
