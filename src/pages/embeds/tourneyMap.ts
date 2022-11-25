import { ActionRowBuilder, AttachmentBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, InteractionReplyOptions } from "discord.js"
import keys from "../../keys"
import { TourneyMap } from "../../types"
import { secondsToMinutes } from "../../utils"

export const tourneyMapEmbed = (data: TourneyMap): InteractionReplyOptions => {
    const file = new AttachmentBuilder(`./src/public/${data.sheetId}.png`)
    const embed = new EmbedBuilder()
        .setColor(0xFF8EE6)
        .setImage(`https://assets.ppy.sh/beatmaps/${data.mapSetId}/covers/cover.jpg` ?? "https://assets.ppy.sh/beatmaps/355322/covers/cover.jpg")
        .setTitle(`${data.mapName} - ${data.difficultyName}`)
        .setDescription(`ID: ${data.mapSetId}`)
        .setThumbnail(`attachment://${data.sheetId}.png`)
        .setURL(`https://osu.ppy.sh/beatmapsets/${data.mapSetId}#osu/${data.mapId}`)
        .addFields({
            name: `Beatmap Info`,
            value: `${data.starRating.toFixed(2)}⭐️ - ${data.bpm}bpm - ${secondsToMinutes(data.length)}⏱️ - x/${data.maxCombo
                }combo `,
        })
        .setFooter({ text: `Bocchi Bot - Powered by Kitsu API` })
        .setTimestamp(new Date())

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
            .setURL(`${keys.apiLink}/d/${data.mapSetId}`)
            .setLabel("Download Mapset")
            .setStyle(ButtonStyle.Link)
    )
    return {
        embeds: [embed],
        components: [row],
        files: [file],
    }
}
