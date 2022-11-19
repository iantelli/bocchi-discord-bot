import { category } from "../../utils"
import ping from "./ping"

export default category("Debug", [ping], {
    description: "Commands for debugging the bot.",
    emoji: "🐛",
})
