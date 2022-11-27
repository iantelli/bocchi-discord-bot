export function secondsToMinutes(time: number): string {
    // minutes:seconds
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
}
