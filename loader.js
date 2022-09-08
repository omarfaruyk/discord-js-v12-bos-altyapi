const fs = require("node:fs")
const path = require("node:path")
const { Collection } = require("discord.js")
const commandsPath = path.join(__dirname, "./komutlar")
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"))
const eventsPath = path.join(__dirname, "./events")
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith(".js"))

module.exports = (client) => {
    client.commands = new Collection()

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file)
        const event = require(filePath)
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client))
        } else {
            client.on(event.name, (...args) => event.execute(...args, client))
        }
    }

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file)
        const command = require(filePath)
        for (i = 0; i < command.name.length; i++) {
            client.commands.set(command.name[i], command)
        }
    }
}