import type { clientFacingAPI } from "../server/api/client_facing.ts"
import { hc } from "@hono/hono/client"

console.log("checking barber shop api permission")
await Deno.permissions.query({ name: 'net', host: location.href })

export const api = hc<clientFacingAPI>(location.href + '/apis/client')