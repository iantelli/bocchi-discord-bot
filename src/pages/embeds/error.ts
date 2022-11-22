import { EmbedBuilder, InteractionReplyOptions } from "discord.js"

export const errorEmbed = (description: string): InteractionReplyOptions => {
    const embed = new EmbedBuilder().setColor(0xeb3434).setTitle("Something went wrong :(").setDescription(description)
    return {
        embeds: [embed],
        ephemeral: true,
    }
}
