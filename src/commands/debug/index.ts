import { category } from "../../utils"
import ping from "./ping"
import status from "./status"

export default category("Debug", [ping, status], {
  description: "Commands for debugging the bot.",
  emoji: "🐛",
})
