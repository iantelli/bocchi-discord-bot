import { SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"

const meta = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with pong!")
  .addStringOption((option) =>
    option.setName("message").setDescription("The message the both will reply with.").setMinLength(1).setMaxLength(2000).setRequired(false)
  )

export default command(meta, ({ interaction }) => {
  const message = interaction.options.getString("message")
  interaction.reply({
    ephemeral: true,
    content: message ?? "Pong! 🏓"
  })
})
