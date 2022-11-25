import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, InteractionReplyOptions } from "discord.js"
import { BeatmapResponseApi } from "../../api"
import keys from "../../keys"
import { secondsToMinutes } from "../../utils"

export const beatmapEmbed = (data: BeatmapResponseApi): InteractionReplyOptions => {
    const embed = new EmbedBuilder()
        .setColor(0xFF8EE6)
        .setImage(`https://assets.ppy.sh/beatmaps/${data.ParentSetID}/covers/cover.jpg` ?? "https://assets.ppy.sh/beatmaps/355322/covers/cover.jpg")
        .setTitle(`Difficulty Name: ${data.DiffName}`)
        .setURL(`https://osu.ppy.sh/beatmapsets/${data.ParentSetID}#osu/${data.BeatmapID}`)
        .addFields({
            name: `Beatmap Info`,
            value: `${data.DifficultyRating}⭐️ - ${data.BPM}bpm - ${secondsToMinutes(data.TotalLength)}⏱️ - x/${data.MaxCombo
                } combo \n CS ${data.CS} | AR ${data.AR} | HP ${data.HP} | OD ${data.OD}`,
        })
        .setFooter({ text: `Bocchi Bot - Powered by Kitsu API` })
        .setTimestamp(new Date())

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
            .setURL(`${keys.apiLink}/d/${data.ParentSetID}`)
            .setLabel("Download Map")
            .setStyle(ButtonStyle.Link)
    )
    return {
        embeds: [embed],
        components: [row],
    }
}
