const TelegramBot = require('node-telegram-bot-api');
const childProcess = require('child_process');

const token = '5220365714:AAFBDQtSEXSiz7nBRvS8_XuP_Z3BcSYWw7s';

const bot = new TelegramBot(token, { polling: true })

const names = [
	{ name: 'хозяйн' },
	{ name: 'сэр' },
	{ name: 'всемогущий повелитель никита' },
	{ name: 'бро' },
	{ name: 'повелитель' },
	{ name: 'мой царь' },
]

bot.on('message', (msg) => {
	const id = Math.floor(Math.random() * names.length)
	const name = names[id]
	const currentText = msg.text.toLowerCase()
	const chatId = msg.chat.id

	const offComputer = () => {
		var wmi = GetObject("winmgmts:{impersonationLevel=impersonate,(Shutdown)}\\\\.\\root\\cimv2");
		var col_os = wmi.ExecQuery("Select * from Win32_OperatingSystem");
		for (var i = new Enumerator(col_os); !i.atEnd(); i.moveNext())
			i.item().Win32Shutdown(1);
	}

	if (currentText === 'выключить комп' || currentText === 'выключить компьютер' || currentText === 'выкл комп' || currentText === 'выкл компьютер' || currentText === 'выйти из системы') {
		bot.sendMessage(chatId, `Компьютер будет выключен, ${name.name}`)
		offComputer()
	}
	if (currentText === 'открыть браузер' || currentText === 'открыть хром' || currentText === 'открой браузер' || currentText === 'открой хром') {
		bot.sendMessage(chatId, `Браузер будет скоро открыт, ${name.name}`)
		childProcess.exec('start chrome')
	}
	if (currentText === 'закрыть браузер' || currentText === 'закрыть хром' || currentText === 'закрой браузер' || currentText === 'закрой хром') {
		bot.sendMessage(chatId, `Браузер будет скоро закрыт, ${name.name}`)
		childProcess.exec('exit chrome')
	}
});