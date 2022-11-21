import axios from "axios"
import keys from "../../keys"
import { BeatmapSetResponseApi } from "./apiResponseType"

export const getBeatmapSetInfo = async (beatmapSetId: string): Promise<BeatmapSetResponseApi> => {
    try {
        const response = await axios.get(keys.apiLink + "/s/" + beatmapSetId)
        return response.data as BeatmapSetResponseApi
    } catch (err) {
        throw new Error("Beatmap set not found")
    }
}