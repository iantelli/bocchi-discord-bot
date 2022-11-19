import { SlashCommandBuilder } from "discord.js"
import { command } from "../../utils"

const meta = new SlashCommandBuilder()
  .setName("steal")
  .setDescription("Get the status of the api server and the uptime")
  .addStringOption((option) =>
    option
      .setName("emote")
      .setDescription("The emote you want to steal")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("name")
      .setDescription("The name of the emote")
      .setRequired(false)
  )

export default command(meta, async ({ interaction }) => {
  const emoteString = interaction.options
    .getString("emote")
    ?.slice(1, -1)
    .split(":")
  if (!emoteString)
    return interaction.reply({ content: "Invalid emote", ephemeral: true })
  const emote = {
    animated: emoteString[0] === "a",
    name: emoteString[1],
    id: emoteString[2],
  }

  if (!emote.id)
    return interaction.reply({ content: "Invalid emote", ephemeral: true })

  const extension = emote.animated ? "gif" : "png"
  const emojiName = interaction.options.getString("name") ?? emote.name
  const displayEmote = await interaction.guild?.emojis.create({
    attachment: `https://cdn.discordapp.com/emojis/${emote.id}.${extension}`,
    name: emojiName,
  })
  if (!displayEmote)
    return interaction.reply({
      content: "Something went wrong",
      ephemeral: true,
    })
  interaction.reply({
    content: `Successfully added ${displayEmote} to the server`,
  })
})
