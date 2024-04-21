package main

import (
	"fmt"
	"github.com/mymmrac/telego"
	tu "github.com/mymmrac/telego/telegoutil"
	"os"
)

func main() {
	botToken := os.Getenv("TOKEN")
	bot, err := telego.NewBot(botToken, telego.WithDefaultDebugLogger())
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	// Call method getMe
	botUser, _ := bot.GetMe()
	fmt.Printf("Bot User: %+v\n", botUser)
	networkListener := NetworkListener{
		Websocket:       os.Getenv("FILECOIN_WEBSOCKET"),
		Hash:            os.Getenv("HASH"),
		ContractAddress: os.Getenv("CONTRACT_ADDRESS"),
		Score:           "-",
	}
	go networkListener.listenNetwork()
	updates, _ := bot.UpdatesViaLongPolling(nil)
	defer bot.StopLongPolling()

	for update := range updates {
		if update.Message != nil {
			// Retrieve chat ID
			chatID := update.Message.Chat.ID

			// Call method sendMessage.
			// Send a message to sender with the same text (echo bot).
			// (https://core.telegram.org/bots/api#sendmessage)
			sentMessage, _ := bot.SendMessage(
				tu.Message(
					tu.ID(chatID),
					"Hi last score is "+networkListener.Score,
				),
			)

			fmt.Printf("Sent Message: %v\n", sentMessage)
		}
	}
}
