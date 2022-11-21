import { EmbedBuilder } from "@discordjs/builders"

const beatmapPreviewEmbed = (
    ParentSetID: number,
    BeatmapID: number,
    TotalLength: number,
    HitLength: number,
    DiffName: string,
    FileMD5: string,
    CS: number,
    AR: number,
    HP: number,
    OD: number,
    Mode: number,
    BPM: number,
    Playcount: number,
    Passcount: number,
    MaxCombo: number,
    DifficultyRating: number
): EmbedBuilder => {
    const embed = new EmbedBuilder()
        .setColor(0xff8c00)
        .setImage(`https://assets.ppy.sh/beatmaps/${ParentSetID}/covers/cover.jpg`)
        .setTitle(DiffName)
        .setDescription(`BeatmapID: ${BeatmapID}`)
        .setURL(`https://osu.ppy.sh/beatmapsets/${ParentSetID}#osu/${BeatmapID}`)
        .addFields(
            { name: `⭐️`, value: `${DifficultyRating}`, inline: true },
            { name: `⏱️`, value: `${TotalLength}`, inline: true },
            { name: `BPM`, value: `${BPM}`, inline: true },
            { name: "\u200B", value: "\u200B" },
            { name: `CS`, value: `${CS}`, inline: true },
            { name: `AR`, value: `${AR}`, inline: true },
            { name: `HP`, value: `${HP}`, inline: true },
            { name: `OD`, value: `${OD}`, inline: true }
        )
    return embed
}

export default beatmapPreviewEmbed
