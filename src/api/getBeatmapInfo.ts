import { BeatmapResponseApi } from "./apiResponseType"
import keys from "../keys"
import axios from "axios"

export const getBeatmapInfo = async (beatmapId: string): Promise<BeatmapResponseApi> => {
    try {
        const response = await axios.get(keys.apiLink + "/b/" + beatmapId)
        return response.data as BeatmapResponseApi
    } catch (err) {
        throw new Error("Beatmap not found")
    }
}
