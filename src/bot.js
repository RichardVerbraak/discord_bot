require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client()
const PREFIX = '$'

client.on('ready', () => {
	console.log(`${client.user.tag} has logged in.`)
})

client.on('message', (message) => {
	// If bot, don't reply a message
	if (message.author.bot) return

	// Trim the whitespace out > Cut (substring) out the dollar sign at the start of the command > Split the arguments out into an array and also remove the whitespaces with regex
	if (message.content.startsWith(PREFIX)) {
		const [commandName, ...args] = message.content
			.trim()
			.substring(PREFIX.length)
			.split(/\s+/)
		console.log(commandName)
		console.log(args)
	}
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
