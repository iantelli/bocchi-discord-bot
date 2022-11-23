import { category } from "../../utils"
import beatmap from "./beatmap"
import search from "./search"
import set from "./set"
import random from "./random"

export default category("Osu", [beatmap, set, search, random], {
    emoji: "🏆",
    description: "Osu commands for the bot.",
})
