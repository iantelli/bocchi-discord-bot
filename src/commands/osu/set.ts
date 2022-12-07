import { SlashCommandBuilder } from "discord.js"
import { getBeatmapSetInfo } from "../../api"
import { beatmapSetEmbed, errorEmbed } from "../../pages/embeds"
import { command } from "../../utils"

const meta = new SlashCommandBuilder()
  .setName("set")
  .setDescription("Get beatmap set info")
  .addStringOption((option) => option.setName("setid").setDescription("The id of the beatmap set").setRequired(true))

export default command(meta, async ({ interaction }) => {
  const beatmapSetIdInput = interaction.options.getString("setid")

  try {
    if (beatmapSetIdInput) {
      const data = await getBeatmapSetInfo(beatmapSetIdInput)
      return interaction.reply(beatmapSetEmbed(data))
    }
  } catch (err) {
    return interaction.reply(errorEmbed("Beatmap ID is invalid"))
  }
})
