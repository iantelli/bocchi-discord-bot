import { SlashCommandBuilder } from "discord.js"
import { searchBeatmapSet } from "../../api"
import { errorEmbed } from "../../pages/embeds"
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
            console.log(data)
        }
        const data = await searchBeatmapSet(query!)
        console.log(data)
        return interaction.reply({ content: "test" })
    } catch (err) {
        return interaction.reply(errorEmbed("Beatmap ID is invalid"))
    }
})
