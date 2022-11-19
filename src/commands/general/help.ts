import { SlashCommandBuilder } from "discord.js"
import { getCategoryRoot } from "../../pages/help"
import { command } from "../../utils"

const meta = new SlashCommandBuilder()
  .setName("help")
  .setDescription(
    "Shows a list of all commands or info about a specific command."
  )

export default command(meta, ({ interaction }) => {
  const message = interaction.options.getString("message")
  interaction.reply(getCategoryRoot(true))
})
