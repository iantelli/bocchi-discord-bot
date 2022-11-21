export interface BeatmapResponseApi {
    ParentSetID: number
    BeatmapID: number
    TotalLength: number
    HitLength: number
    DiffName: string
    FileMD5: string
    CS: number
    AR: number
    HP: number
    OD: number
    Mode: number
    BPM: number
    Playcount: number
    Passcount: number
    MaxCombo: number
    DifficultyRating: number
}

export interface BeatmapSetResponseApi {
    SetID: number
    Title: string
    Artist: string
    Creator: string
    Source: string
    Tags: string
    RankedStatus: number
    Genre: number
    Language: number
    Favourites: number
    HasVideo: boolean
    DownloadUnavailable: boolean
    ApprovedDate: string
    LastUpdate: string
    LastChecked: string
    ChildrenBeatmaps: [BeatmapResponseApi]
}
