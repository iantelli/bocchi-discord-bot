import { event } from "../utils"

export default event("ready", ({ log }, client) => {
  log(`Logged in as ${client.user.tag}!`)
  ;(async () => {
    try {
      client.user.setPresence({
        // number of servers this bot is in with comma separators
        activities: [
          {
            name: `osu!`,
            type: 0
          }
        ],
        status: "online"
      })
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error)
    }
  })()
})
