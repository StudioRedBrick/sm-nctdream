package main

import (
	"fmt"

	"net/http"

	"gopkg.in/go-playground/webhooks.v5/github"
)

const (
	path = "/webhooks"
)

func main() {
	hook, _ := github.New(github.Options.Secret("redbrickstudio"))

	http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
		payload, err := hook.Parse(r, github.PushEvent)

		if err != nil {
			if err == github.ErrEventNotFound {
				fmt.Println("error occur ", err)
				// ok event wasn;t one of the ones asked to be parsed
			}
		}
		switch payload.(type) {

		case github.PushPayload:
			pushPayload := payload.(github.PushPayload)
			// Do whatever you want from here...
			fmt.Printf("%+v", pushPayload)
		}
	})
	http.ListenAndServe(":3000", nil)
}