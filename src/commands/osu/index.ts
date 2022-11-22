import { category } from "../../utils"
import beatmap from "./beatmap"
import search from "./search"
import set from "./set"

export default category("Osu", [beatmap, set, search], {
    emoji: "🏆",
    description: "Osu commands for the bot.",
})
