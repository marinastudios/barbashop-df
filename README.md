DF PLOT -> SERVER; {uuid} joined
SERVER -> CLIENT(S); {uuid} joined
CLIENT -> SERVER; i will take {uuid}!
CLIENT -> SERVER; give me {uuid}'s skin with {hair}
SERVER -> MOJANG API; what skin is {uuid} wearing?
SERVER -> CACHE; do I have a skin of {skin url} with {hair}?
if no cache hit: {
    *SERVER processes skin with hair #1*
    SERVER -> MINESKIN API; can you upload {processed skin}
    MINESKIN API -> SERVER; yup, heres the data!
}
SERVER -> CACHE; save {skin url} with {hair} as {processed skin}
SEREVR -> CLIENT; here you go!
CLIENT -> CODECLIENT; give the current player and item of {head item with processed skin}