import { Hono } from "@hono/hono";
import { APIrouter } from "./api/index.ts";

const app = new Hono()
    .route('/apis', APIrouter)