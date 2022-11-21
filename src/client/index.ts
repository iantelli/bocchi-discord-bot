import { Client, GatewayIntentBits } from "discord.js"
import events from "../events"
import keys from "../keys"
import { registerEvents } from "../utils"

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
})

registerEvents(client, events)

client.login(keys.clientToken).catch((err) => {
  console.log("[Login error]:", err)
  process.exit(1)
})
