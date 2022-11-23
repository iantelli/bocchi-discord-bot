import axios from "axios"
import keys from "../../keys"
import { SearchBeatmapSetResponseApi } from "./apiResponseType"

export const searchBeatmapSet = async (
    searchQuery: string,
    rankedStatus?: boolean
): Promise<SearchBeatmapSetResponseApi> => {
    const params = {
        query: searchQuery,
        mode: 0,
        amount: 10,
    }

    try {
        if (rankedStatus === undefined) {
            const response = await axios.get(keys.apiLink + "/search", { params: { ...params } })
            return response.data as SearchBeatmapSetResponseApi
        }
        const response = await axios.get(keys.apiLink + "/search", { params: { ...params, status: 1 } })
        return response.data as SearchBeatmapSetResponseApi
    } catch (err) {
        throw new Error("No beatmaps found with the provided search query")
    }
}
