const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const logSentMessage = require("./Logger/logSentMessage");

const client = new Client();
const log = config.LOG;

client.on("ready", () => {
  console.log("cbon ftg");
  client.user.setActivity("patiente un peu",
  client.user.setPresence("dnd"), {
    type: "PLAYING",
  });
});

client.on("message", (message) => {
  if (message.author.bot) return;
  logSentMessage(client, message, log);
});




client.login(config.BOT_TOKEN);
