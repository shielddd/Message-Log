const { MessageEmbed } = require("discord.js");

const colors = {
  red: "#0x36393E",
  green: "#0x36393E",
  blue: "#0x36393E",
  yellow: "#0x36393E",
};

const createEmbed = (title, color, description, image) => {
  const embed = new MessageEmbed();
  embed.setTitle(title);
  embed.setColor(colors[color]);
  embed.setDescription(description);
  if (image) embed.setImage(image);
  return embed;
};

module.exports = createEmbed;
