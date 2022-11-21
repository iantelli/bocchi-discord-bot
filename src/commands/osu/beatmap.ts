import { SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"
import { getBeatmapInfo } from "../../api"
import { errorEmbed, beatmapPreviewEmbed } from "../../utils/embeds"

const meta = new SlashCommandBuilder()
    .setName("beatmap")
    .setDescription("Get beatmap info")
    .addStringOption((option) => option.setName("beatmapid").setDescription("The id of the beatmap").setRequired(true))

export default command(meta, async ({ interaction }) => {
    const beatmapIdInput = interaction.options.getString("beatmapid")

    try {
        if (beatmapIdInput) {
            const data = await getBeatmapInfo(beatmapIdInput)
            return interaction.reply(beatmapPreviewEmbed(data))
        }
    } catch (err) {
        return interaction.reply(errorEmbed("Beatmap ID is invalid"))
    }
})
