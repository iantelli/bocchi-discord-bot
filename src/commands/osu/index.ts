import { category } from "../../utils"
import beatmap from "./beatmap"
import reccomend from "./reccomend"
import search from "./search"
import set from "./set"

export default category("Osu", [reccomend, search, beatmap, set,], {
    emoji: "🏆",
    description: "Osu commands for the bot.",
})
