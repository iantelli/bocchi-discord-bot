import { category } from "../../utils"
import help from "./help"
import steal from "./steal"
import add from "./add"

export default category("General", [help, steal, add], {
  emoji: "📚",
  description: "General commands for the bot.",
})
