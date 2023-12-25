import telebot
bot=telebot.TeleBot('6918080790:AAHoIeIwYct_KD1QigjBorbVJr1lKo3HMc0')

@bot.message_handler(commands=['id'])
def main(message):
    bot.send_message(message.chat.id, message.chat.id)


bot.polling(none_stop=True)