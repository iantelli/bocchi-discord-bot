export interface TourneyMap {
    mapId: number
    mod: string
    mapName: string
    difficultyName: string
    length: number
    starRating: number
    mapSetId: number
    maxCombo: number
    bpm: number
    downloadAvailable: boolean
    mmr: number
    skillset: string
    sheetId: string
}

export interface TourneyPool {
    version: number
    name: string
    link?: string
    averageMMR: number
    ranked: boolean
    canBeRandomlySelected: boolean
    gamemode: string
    maps: TourneyMap[]
    uuid: string
}