import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, InteractionReplyOptions } from "discord.js"
import { BeatmapSetResponseApi } from "../../api"
import keys from "../../keys"
import { secondsToMinutes } from "../../utils"

export const beatmapSetEmbed = (data: BeatmapSetResponseApi): InteractionReplyOptions => {
    const embed = new EmbedBuilder()
        .setColor(0xFF8EE6)
        .setImage(`https://assets.ppy.sh/beatmaps/${data.SetID}/covers/cover.jpg` ?? "https://assets.ppy.sh/beatmaps/355322/covers/cover.jpg")
        .setTitle(`${data.Artist} - ${data.Title}`)
        .setDescription(`Mapped By: ${data.Creator}`)
        .setURL(`https://osu.ppy.sh/beatmapsets/${data.SetID}#osu/`)
        .addFields({
            name: `Difficulties:`,
            value: `${data.ChildrenBeatmaps.map(
                (beatmap): string =>
                    `**${beatmap.DiffName}** \n ${beatmap.DifficultyRating}⭐️ - ${beatmap.BPM}bpm - ${secondsToMinutes(
                        beatmap.TotalLength
                    )}⏱️ - x/${beatmap.MaxCombo} combo \n CS ${beatmap.CS} | AR ${beatmap.AR} | HP ${beatmap.HP} | OD ${beatmap.OD
                    } \n`
            ).join("")}`,
        })
        .setFooter({ text: `Bocchi Bot - Powered by Kitsu API` })
        .setTimestamp(new Date())

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
            .setURL(`${keys.apiLink}/d/${data.SetID}`)
            .setLabel("Download Mapset")
            .setStyle(ButtonStyle.Link)
    )
    return {
        embeds: [embed],
        components: [row],
    }
}
