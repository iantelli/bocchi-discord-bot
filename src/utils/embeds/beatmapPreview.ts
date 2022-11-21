import { EmbedBuilder } from "@discordjs/builders"
import { InteractionReplyOptions } from "discord.js"
import { BeatmapResponseApi, BeatmapResponseApi as type } from "../../api"

export const beatmapPreviewEmbed = (data: BeatmapResponseApi): InteractionReplyOptions => {
    const embed = new EmbedBuilder()
        .setColor(0xff8c00)
        .setImage(`https://assets.ppy.sh/beatmaps/${data.ParentSetID}/covers/cover.jpg`)
        .setTitle(data.DiffName)
        .setURL(`https://osu.ppy.sh/beatmapsets/${data.ParentSetID}#osu/${data.BeatmapID}`)
        .addFields(
            { name: `⭐️`, value: `${data.DifficultyRating}`, inline: true },
            { name: `⏱️`, value: `${data.TotalLength}`, inline: true },
            { name: `BPM`, value: `${data.BPM}`, inline: true },
            { name: "\u200B", value: "\u200B" },
            { name: `CS`, value: `${data.CS}`, inline: true },
            { name: `AR`, value: `${data.AR}`, inline: true },
            { name: `HP`, value: `${data.HP}`, inline: true },
            { name: `OD`, value: `${data.OD}`, inline: true }
        )
    return {
        embeds: [embed],
    }
}
