import { poolData } from "../../db"
import { TourneyMap } from "../../types"

export const getRandomBeatmap = (): TourneyMap => {
    const random = Math.floor(Math.random() * poolData.length)
    const pool = poolData[random]
    const map = pool.maps[Math.floor(Math.random() * pool.maps.length)]
    return map
}
