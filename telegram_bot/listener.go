package main

import (
	"context"
	"fmt"
	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/ethclient"
	"io/ioutil"
	"log"
	"strings"
)

type NetworkListener struct {
	Websocket       string
	Hash            string
	ContractAddress string
	Score           string
}

func (c *NetworkListener) listenNetwork() {
	client, err := ethclient.Dial(c.Websocket)
	if err != nil {
		log.Fatal(err)
	}

	contractAddress := common.HexToAddress(c.ContractAddress)
	query := ethereum.FilterQuery{
		Addresses: []common.Address{contractAddress},
	}

	logs := make(chan types.Log)
	sub, err := client.SubscribeFilterLogs(context.Background(), query, logs)
	if err != nil {
		log.Fatal(err)
	}
	for {
		select {
		case err := <-sub.Err():
			log.Fatal(err)
		case vLog := <-logs:
			if vLog.Topics[0] == common.HexToHash("0x2d4b597935f3cd67fb2eebf1db4debc934cee5c7baa7153f980fdbeb2e74084e") {
				fmt.Println("Topic", vLog.Topics)
				fmt.Println("Data", vLog.Data)
				fmt.Println("Adresss", vLog.Address)
				abiFile, err := ioutil.ReadFile("lilypad.abi")
				contractAbi, err := abi.JSON(strings.NewReader(string(abiFile)))
				if err != nil {
					// Handle error
					fmt.Println(err)
				}
				event := struct {
					Score string
				}{}
				err = contractAbi.UnpackIntoInterface(&event, "Score", vLog.Data)
				if err != nil {
					log.Fatal(err)
				}
				// 0=>Score
				fmt.Println("Score", event.Score)
				c.Score = event.Score
			}
		}
	}
}
