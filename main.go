package main

import (
	"gopkg.in/go-playground/webhooks.v5/github"
	"github.com/labstack/echo"
	"fmt"
)

const (
	path = "/webhooks"
)

func main() {
	hook, _ := github.New(github.Options.Secret("redbrickstudio"))

	e := echo.New()

	e.POST(path,func(e echo.Context) error {
		payload, err := hook.Parse(e.Request(), github.PushEvent, github.CommitCommentEvent)
		if err != nil {
			if err == github.ErrEventNotFound {
				fmt.Println("error occur ", err)
				// ok event wasn;t one of the ones asked to be parsed
			}
		}
		fmt.Println(payload)

		return nil
	})
	e.Logger.Fatal(e.Start(":1323"))

	//http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
	//	payload, err := hook.Parse(r, github.PushEvent, github.CommitCommentEvent)
	//
	//	if err != nil {
	//		if err == github.ErrEventNotFound {
	//			fmt.Println("error occur ", err)
	//			// ok event wasn;t one of the ones asked to be parsed
	//		}
	//	}
	//	fmt.Println(payload)
	//	switch payload.(type) {
	//
	//	case github.PushPayload:
	//		pushPayload := payload.(github.PushPayload)
	//		// Do whatever you want from here...
	//		fmt.Printf("%+v", pushPayload)
	//	}
	//})
	//http.ListenAndServe(":3000", nil)
}
