import { MapInfo, ModUtil } from "@rian8337/osu-base";
import {
    MapStars, OsuPerformanceCalculator
} from "@rian8337/osu-difficulty-calculator";

export const calculatePP = async (mapId: number, mods: string) => {
    const beatmapInfo = await MapInfo.getInformation(mapId)

    if (!beatmapInfo!.title) {
        throw new Error("Beatmap not found")
    }
    if (beatmapInfo) {
        const appliedMods = ModUtil.pcStringToMods(mods)
        const newRating = new MapStars(beatmapInfo.beatmap, {
            mods: appliedMods,
        })
        const osuPerformance = new OsuPerformanceCalculator(newRating.osu).calculate();
        return {
            pp: osuPerformance,
            map: {
                stats: newRating.osu.stats,
                sr: newRating.osu.total
            }
        }
    }
}