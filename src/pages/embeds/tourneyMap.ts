import { MapStats } from "@rian8337/osu-base"
import { ActionRowBuilder, AttachmentBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, InteractionReplyOptions } from "discord.js"
import { BeatmapResponseApi } from "../../api"
import keys from "../../keys"
import { secondsToMinutes } from "../../utils"

export const tourneyMapEmbed = (
  data: BeatmapResponseApi,
  pp: number,
  sheetId: string,
  mapName: string,
  mapStats: MapStats,
  starRating: number
): InteractionReplyOptions => {
  const file = new AttachmentBuilder(`./public/${sheetId}.png`)
  const embed = new EmbedBuilder()
    .setColor(0xff8ee6)
    .setImage(`https://assets.ppy.sh/beatmaps/${data.ParentSetID}/covers/cover.jpg` ?? "https://assets.ppy.sh/beatmaps/355322/covers/cover.jpg")
    .setTitle(`${mapName} - ${data.DiffName}`)
    .setThumbnail(`attachment://${sheetId}.png`)
    .setDescription(`**${pp.toFixed(2)}** pp`)
    .setURL(`https://osu.ppy.sh/beatmapsets/${data.ParentSetID}#osu/${data.BeatmapID}`)
    .addFields({
      name: `Beatmap Info`,
      value: `${starRating.toFixed(2)}⭐️ - ${data.BPM * mapStats.speedMultiplier}bpm - ${
        sheetId.slice(0, -1) === "DT" ? secondsToMinutes(data.TotalLength * 0.66) : secondsToMinutes(data.TotalLength)
      }⏱️ - x/${data.MaxCombo} combo \n CS ${mapStats.cs!.toFixed(1)} | AR ${mapStats.ar!.toFixed(1)} | OD ${mapStats.od!.toFixed(
        1
      )} | HP ${mapStats.hp!.toFixed(1)}`
    })
    .setFooter({ text: `Bocchi Bot - Powered by Kitsu API` })
    .setTimestamp(new Date())

  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setURL(`${keys.apiLink}/d/${data.ParentSetID}`).setLabel("Download Mapset").setStyle(ButtonStyle.Link)
  )
  return {
    embeds: [embed],
    components: [row],
    files: [file]
  }
}
