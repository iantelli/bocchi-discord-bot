import { SlashCommandBuilder, TextChannel } from "discord.js"
import { searchBeatmapSet } from "../../api"
import { errorEmbed, beatmapSetPreviewEmbed } from "../../pages"
import { command } from "../../utils"

const meta = new SlashCommandBuilder()
    .setName("search")
    .setDescription("Search for a beatmap")
    .addStringOption((option) => option.setName("name").setDescription("The name of the beatmap").setRequired(true))
    .addBooleanOption((option) => option.setName("ranked").setDescription("Show ranked maps only").setRequired(false))

export default command(meta, async ({ interaction }) => {
    const query = interaction.options.getString("name")
    const ranked = interaction.options.getBoolean("ranked")

    try {
        if (ranked) {
            // TODO: need to make component to display data
            const data = await searchBeatmapSet(query!, ranked)
            return interaction.reply(beatmapSetPreviewEmbed(data[0]))
        }
        const data = await searchBeatmapSet(query!)
        return interaction.reply(beatmapSetPreviewEmbed(data[0]))
    } catch (err) {
        return interaction.reply(errorEmbed("Beatmap ID is invalid"))
    }
})
