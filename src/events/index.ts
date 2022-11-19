import { Event } from "../types"
import interactionCreate from "./interactionCreate"
import ready from "./ready"

const events: Event<any>[] = [ready, ...interactionCreate]

export default events
