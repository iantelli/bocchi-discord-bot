import { category } from "../../utils"
import beatmap from "./beatmap"
import set from "./set"

export default category("Osu", [beatmap, set], {
    emoji: "💣",
    description: "Osu commands for the bot.",
})
