#! /bin/bash

sudo ps -ef | grep 'sudo go run main.go' | grep -v 'grep' | awk '{print $2}' | sudo xargs kill