import { Hono } from "@hono/hono";
import { clientFacingAPIrouter } from "./client_facing.ts";

export const APIrouter = new Hono()
    .route('/client', clientFacingAPIrouter)