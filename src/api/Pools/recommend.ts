import { poolData } from "../../db"
import { TourneyMap } from "../../types"

export const getRecommendedBeatmap = (mmr: number, mod: string): TourneyMap => {
    const pool = poolData.filter(pool => pool.averageMMR >= mmr)
    const randomPool = pool[Math.floor(Math.random() * pool.length)]
    if (!pool) {
        throw new Error('No pool found for mmr')
    }
    const map = randomPool.maps.filter(map => map.mod === mod)
    const randomMap = map[Math.floor(Math.random() * map.length)]
    if (!map) {
        throw new Error('No map found for mod')
    }

    return randomMap
}