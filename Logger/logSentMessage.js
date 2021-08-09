const createEmbed = require("../System/createEmbed");

const logSentMessage = (client, message, logChannelID) => {
  if (message.attachments.array().length === 0) {
    const title = `${message.author.username}`;
    const color = "0x36393E";
    const description = `\n Message: ${message.cleanContent} \n\n **Channel =>** ${message.channel}\n[Lien Redirect](${message.url})`;
    const embed = createEmbed(title, color, description);
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  } else {
    const attachmentURL = message.attachments.map(
      (attachment) => attachment.proxyURL
    );
    const title = `${message.author.username}`;
    const color = "0x36393E";
    const description = `\n **Message =>** ${message.cleanContent} \n\n **Channel =>** ${message.channel}\n[Lien Redirect](${message.url})`;
    const embed = createEmbed(
      title,
      color,
      description,
      attachmentURL[0]
    );
    client.channels.fetch(logChannelID).then((channel) => channel.send(embed));
  }
};
module.exports = logSentMessage;
