import { SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"
import axios from "axios"

const meta = new SlashCommandBuilder()
  .setName("add")
  .setDescription("Add an emote to the server from 7TV URL")
  .addStringOption((option) =>
    option
      .setName("link")
      .setDescription(
        'Link to the 7TV emote ex: "https://7tv.app/emotes/60ae958e229664e8667aea38"'
      )
      .setRequired(true)
      .setMinLength(24)
      .setMaxLength(50)
  )

export default command(meta, async ({ interaction }) => {
  await interaction.deferReply({
    fetchReply: true,
  })

  const emote = new URL(interaction.options.getString("link") ?? "")
  const emoteId = emote.pathname

  const emoteData = await axios.get(process.env.API_LINK + emoteId)

  if (emoteData.data.host.files[0]) {
    const emoji = await interaction.guild?.emojis.create({
      attachment: `https:${emoteData.data.host.url}/1x.${
        emoteData.data.animated ? "gif" : "webp"
      }`,
      name: emoteData.data.name,
    })
    await interaction.editReply({ content: `Added ${emoji} to the server!` })
  } else {
    await interaction.editReply({
      content: `Failed to add emote to the server! Invalid URL`,
    })
  }
})
