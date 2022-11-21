import { event } from "../utils"
import keys from "../keys"

export default event("ready", ({ log }, client) => {
    log(`Logged in as ${client.user.tag}!`)
    ;(async () => {
        try {
            client.user.setPresence({
                // number of servers this bot is in with comma separators
                activities: [
                    {
                        name: `${client.guilds.cache.size.toLocaleString()} Servers!`,
                        type: 3,
                    },
                ],
                status: "online",
            })
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error)
        }
    })()
})
