import { category } from "../../utils"
import beatmap from "./beatmap"
import recommend from "./recommend"
import search from "./search"
import set from "./set"

export default category("Osu", [recommend, search, beatmap, set], {
  emoji: "🏆",
  description: "Osu commands for the bot."
})
