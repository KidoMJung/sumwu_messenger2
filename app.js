'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
    token: 'EAAP1zRrn08cBAINbqdwJ9hG9cxayhCKOs1ZBu81G4sO6iXyflZAgMui2eCuZCZBEtO87Srs4cWXSVAsUrB10HftMhsHPz0YpuZCtr2a6pFiJkDpMhbmcza798LA1dBaXxZCsO0GmBnPjlMYjPEJErEnJSQgJDNFAZAbZAqkrxBe8uwZDZD',
    verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
    console.log(err.message)
})

bot.on('message', (payload, reply) => {
    let text = payload.message.text

    bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
    if (err) throw err

    console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
})
})
})

http.createServer(bot.middleware()).listen(3000)