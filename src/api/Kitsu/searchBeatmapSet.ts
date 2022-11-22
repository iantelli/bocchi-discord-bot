import axios from "axios"
import keys from "../../keys"
import { SearchBeatmapSetResponseApi } from "./apiResponseType"

export const getBeatmapSetInfo = async (searchQuery: string, rankedStatus?: boolean): Promise<SearchBeatmapSetResponseApi> => {
    const params = {
        query: searchQuery,
        mode: 1,
        amount: 10,
        status: rankedStatus ? 1 : 0,
    }
    try {
        const response = await axios.get(keys.apiLink + "/search", { params })
        return response.data as SearchBeatmapSetResponseApi
    } catch (err) {
        throw new Error("Beatmap set not found")
    }
}