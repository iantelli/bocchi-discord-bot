import { SlashCommandBuilder } from "discord.js"
import { getRecommendedBeatmap } from "../../api"
import { errorEmbed, tourneyMapEmbed } from "../../pages/embeds"
import { Mods } from "../../types"
import { command } from "../../utils"

const meta = new SlashCommandBuilder().setName("r").setDescription("Recommend a beatmap from a random tourney pool")
    .addNumberOption((option) => option.setName("mmr").setDescription("The average mmr of the beatmap").setRequired(true).setMinValue(1).setMaxValue(3300))
    .addStringOption((option) => option.setName("mod").setDescription("The mod of the beatmap").setRequired(true).addChoices({
        name: "No Mod",
        value: Mods.NM,
    }, {
        name: "Hidden",
        value: Mods.HD,
    }, {
        name: "Hard Rock",
        value: Mods.HR,
    }, {
        name: "Double Time",
        value: Mods.DT,
    }, {
        name: "Free Mod",
        value: Mods.FM,
    }, {
        name: "Tie Breaker",
        value: Mods.TB,
    }))

export default command(meta, async ({ interaction }) => {
    const mmr = interaction.options.getNumber("mmr")
    const mod = interaction.options.getString("mod")
    const beatmap = getRecommendedBeatmap(mmr!, mod!)

    try {
        if (beatmap.mapName.length > 0) {
            return interaction.reply(tourneyMapEmbed(beatmap))
        }
    } catch (err) {
        return interaction.reply(errorEmbed("Beatmap not found"))
    }
})
