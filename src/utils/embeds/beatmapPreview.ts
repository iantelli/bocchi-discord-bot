import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, InteractionReplyOptions } from "discord.js"
import { BeatmapResponseApi, BeatmapResponseApi as type } from "../../api"
import keys from "../../keys"
import { secondsToMinutes } from "../../utils"

export const beatmapPreviewEmbed = (data: BeatmapResponseApi): InteractionReplyOptions => {
    const embed = new EmbedBuilder()
        .setColor(0xff8c00)
        .setImage(`https://assets.ppy.sh/beatmaps/${data.ParentSetID}/covers/cover.jpg`)
        .setTitle(`Difficulty Name: ${data.DiffName}`)
        .setURL(`https://osu.ppy.sh/beatmapsets/${data.ParentSetID}#osu/${data.BeatmapID}`)
        .addFields({
            name: `Beatmap Info`,
            value: `${data.DifficultyRating}⭐️ - ${data.BPM}bpm - ${secondsToMinutes(data.TotalLength)}⏱️ - x/${data.MaxCombo
                }combo \n **CS**:${data.CS} **AR**:${data.AR} **HP**:${data.HP} **OD**:${data.OD}`,
        })
        .setFooter({ text: `Bocchi Bot - Powered by Kitsu API` })

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
