import { Client, GatewayIntentBits } from "discord.js"
import { registerEvents } from "../utils"
import keys from "../keys"
import events from "../events"

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
})

registerEvents(client, events)

client.login(keys.clientToken).catch((err) => {
  console.log("[Login error]:", err)
  process.exit(1)
})
