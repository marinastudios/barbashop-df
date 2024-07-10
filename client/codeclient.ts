console.log("Checking codeclient websocket permission")
await Deno.permissions.request({ name: "net", host: "localhost:31375" })
const ws = new WebSocket('ws://localhost:31375')


export function sendHead(value: string, signature: string) {
    ws.send(`give {Count:1b,id:"minecraft:player_head",tag:{SkullOwner:{Id:[I;678241927,-1746056244,-2054135360,898287689],Name:"DF-HEAD",Properties:{textures:[{Signature:"${signature}",Value:"${value}"}]}}}}`)
}