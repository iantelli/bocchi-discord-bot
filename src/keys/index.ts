import { Keys } from "../types"

const keys: Keys = {
    clientToken: process.env.CLIENT_TOKEN ?? "nil",
    testGuild: process.env.TEST_GUILD ?? "nil",
    apiLink: process.env.KITSU_API_LINK ?? "nil",
    osuApiKey: process.env.OSU_API_KEY ?? "nil"
}

if (Object.values(keys).includes("nil")) {
    throw new Error("Missing environment variables")
}

export default keys
