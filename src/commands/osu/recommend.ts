import { SlashCommandBuilder } from "discord.js"
import { getBeatmapInfo, getRecommendedBeatmap } from "../../api"
import { errorEmbed, tourneyMapEmbed } from "../../pages/embeds"
import { Mods } from "../../types"
import { command, calculatePP } from "../../utils"

const meta = new SlashCommandBuilder()
  .setName("r")
  .setDescription("Recommend a beatmap from a random tourney pool")
  .addNumberOption((option) =>
    option.setName("mmr").setDescription("The average mmr of the beatmap").setRequired(true).setMinValue(100).setMaxValue(3300)
  )
  .addStringOption((option) =>
    option.setName("mod").setDescription("The mod of the beatmap").setRequired(true).addChoices(
      {
        name: "No Mod",
        value: Mods.NM
      },
      {
        name: "Hidden",
        value: Mods.HD
      },
      {
        name: "Hard Rock",
        value: Mods.HR
      },
      {
        name: "Double Time",
        value: Mods.DT
      },
      {
        name: "Free Mod",
        value: Mods.FM
      },
      {
        name: "Tie Breaker",
        value: Mods.TB
      }
    )
  )

export default command(meta, async ({ interaction }) => {
  const mmr = interaction.options.getNumber("mmr")
  const mod = interaction.options.getString("mod")
  const beatmap = getRecommendedBeatmap(mmr!, mod!)
  const beatmapResponse = await getBeatmapInfo(beatmap.mapId.toString())

  try {
    if (beatmap.mapName.length > 0) {
      const rating = await calculatePP(beatmap.mapId, beatmap.sheetId.slice(0, -1))
      return interaction.reply(
        tourneyMapEmbed(beatmapResponse, rating!.pp.total, beatmap.sheetId, beatmap.mapName, rating!.map.stats, rating!.map.sr)
      )
    }
  } catch (err) {
    return interaction.reply(errorEmbed("Beatmap not found"))
  }
})
