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
        content: `[Click here to invite!](https://discord.com/api/oauth2/authorize?client_id=707659593630744688&permissions=8&scope=bot%20applications.commands)`,
      });
    } catch (error) {
      console.error(error);
      return interaction.reply(`An Error Occurred: \`${error.message}\`!`);
    }
  }
};
