const Discord = require('discord.js')
const client = new Discord.Client()
const { botid, token, prefix } = require("./ayarlar.json")
require("./loader")(client)

// * ETİKETE TEPKİ
client.on('message', async message => {

    const embedetiket = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`**${prefix}yardım** Komutu ile Komutlarımı Görebilirsiniz`)
    if (message.content === `<@${botid}>`) {
      message.channel.send(embedetiket)
    }

})

// ! TOKEN
client.login(token)