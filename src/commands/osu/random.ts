import { SlashCommandBuilder } from "discord.js"
import { getBeatmapInfo, getRandomBeatmap } from "../../api"
import { beatmapPreviewEmbed, errorEmbed } from "../../pages/embeds"
import { command } from "../../utils"

const meta = new SlashCommandBuilder().setName("random").setDescription("Get a random beatmap from a tournament")

export default command(meta, async ({ interaction }) => {
    const beatmap = getRandomBeatmap()

    try {
        if (beatmap) {
            const data = await getBeatmapInfo(beatmap.mapId.toString())
            return interaction.reply(beatmapPreviewEmbed(data))
        }
    } catch (err) {
        return interaction.reply(errorEmbed("Beatmap ID is invalid"))
    }
})
