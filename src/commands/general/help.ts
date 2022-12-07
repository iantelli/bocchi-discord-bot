import { SlashCommandBuilder } from "discord.js"
import { getCategoryRoot } from "../../pages/"
import { command } from "../../utils"

const meta = new SlashCommandBuilder().setName("help").setDescription("Shows a list of all commands or info about a specific command.")

export default command(meta, ({ interaction }) => {
  interaction.reply(getCategoryRoot(true))
})
