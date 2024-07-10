import { Hono } from "@hono/hono"
import { upgradeWebSocket } from "@hono/hono/deno"

export type clientFacingAPI = typeof clientFacingAPIrouter;
export const clientFacingAPIrouter = new Hono()
    .get("/gateway", );