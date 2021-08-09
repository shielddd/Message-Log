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

client.on('webhookUpdate', async (channel ) => {
  const guild = channel.guild;        
  const action = await guild.fetchAuditLogs({ type: "WEBHOOK_CREATE"     }).then(async (audit) => audit.entries.first());
      if (action.executor.id === client.user.id) return;
        const position = channel.position;
        const webhook = await channel.fetchWebhooks();
        const rateLimitPerUser = channel.rateLimitPerUser;
        var newChannel = await channel.clone()
       channel.delete();
      var loggingEmbed = new Discord.MessageEmbed()
  .setTitle('Fz & Irvv')
  .addField(`ID : ${action.executor.tag}`, `**Utilisateur :** ${action.executor}`)
  .setColor(0x36393E)
  .setFooter("Attention, un webhook vient d'être crée.")
  newChannel.setPosition(position);
  newChannel.setRateLimitPerUser(rateLimitPerUser)
  let logChannel = client.channels.cache.get("757278263633510410")
if(!logChannel) return;
logChannel.send(loggingEmbed)
})


client.login(config.BOT_TOKEN);
