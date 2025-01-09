const fileURL =
    "https://docs.google.com/spreadsheets/d/1cwf4nEuEnYA4I4yZ2yGM2ALTwFIpEU0EAuUSaK1eeNE/export?format=xlsx";

const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
    res.send(`<script>location.href='${fileURL}'</script>`)
})

app.listen(port, async () => {
    console.log('http://localhost:' + port)
    console.log(`Example app listening on port ${port}`)
    var home = require("os").homedir();
    let dl = home + '/Downloads/download.xlsx'
    let dist = home + '/Desktop/download.xlsx'
    if (fs.existsSync(dl)) fs.rmSync(dl)
    let times = 0
    while (true) {
        await new Promise(r => setTimeout(r, 3000))
        if (fs.existsSync(dl)) break;
        times++
        if (times == 10) return
    }
    fs.renameSync(dl, dist)
})
