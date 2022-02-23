const Command = require("../structures/Command");

module.exports = class Info extends Command {
  constructor(...args) {
    super(...args, {
      name: "info",
      description: "Get the invite link for me.",
      slashCommand: true,
    });
  }

  async run(interaction) {
    try {
      interaction.reply({
        content: `Programmed by Shiro [anime.KnownAsMomo.de](https://Anime.Knownasmomo.de)`,
      });
    } catch (error) {
      console.error(error);
      return interaction.reply(`An Error Occurred: \`${error.message}\`!`);
    }
  }
};
