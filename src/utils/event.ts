import { Event, EventExec, EventKeys } from "../types"
import { Client } from "discord.js"

export function event<T extends EventKeys>(id: T, exec: EventExec<T>): Event<T> {
  return { id, exec }
}

export function registerEvents(client: Client, events: Event<any>[]): void {
  for (const event of events)
    client.on(event.id, async (...args) => {
      const props = {
        client,
        log: (...args: unknown[]) => console.log(`[${event.id}]:`, ...args)
      }

      try {
        await event.exec(props, ...args)
      } catch (err) {
        props.log("Uncaught error:", err)
      }
    })
}
