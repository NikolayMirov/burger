const { Telegraf } = require('telegraf')
const TOKEN = '6339894854:AAHEGFLfiaMFRDUBoggmbxArNSb9ycY9jFg'
const bot = new Telegraf(TOKEN)

const web_link = 'https://managetrade.ru/'

bot.start((ctx: any) =>
	ctx.reply('Welcome :)))))', {
		reply_markup: {
			keyboard: [[{ text: 'web app', web_app: { url: web_link } }]],
		},
	})
)

bot.launch()
