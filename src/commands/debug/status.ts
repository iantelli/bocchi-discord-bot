import { SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"
import axios from "axios"
import keys from "../../keys"

const meta = new SlashCommandBuilder()
  .setName("status")
  .setDescription("Get the status of the api server and the uptime")

export default command(meta, async ({ interaction }) => {
  const response = await axios.get(keys.apiLink)
  const message = `API Server Status: ${response.data.online}\nUptime: ${response.data.uptime}`
  interaction.reply({
    ephemeral: true,
    content: message ?? "Something went wrong",
  })
})
