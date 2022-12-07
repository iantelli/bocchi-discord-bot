import axios from "axios"
import keys from "../../keys"
import { BeatmapResponseApi } from "./apiResponseType"

export const getBeatmapInfo = async (beatmapId: string): Promise<BeatmapResponseApi> => {
  try {
    const response = await axios.get(keys.apiLink + "/b/" + beatmapId)
    return response.data as BeatmapResponseApi
  } catch (err) {
    throw new Error("Beatmap not found")
  }
}
