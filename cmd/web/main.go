package main

import (
	"flag"
	"os"
	"time"

	"github.com/labstack/echo/v4"
)

func main() {
	var port string
	e := echo.New()

	flag.StringVar(&port, "port", os.Getenv("PORT"), "server port")
	flag.Parse()

	configureServer(e)

	setupRoutes(e)

	err := e.Start("0.0.0.0:" + port)
	if err != nil {
		panic(err)
	}
}

func configureServer(e *echo.Echo) {
	e.Server.ReadTimeout = 1 * time.Minute
	e.Server.WriteTimeout = 1 * time.Minute
	e.Server.ReadHeaderTimeout = 1 * time.Minute
	e.Server.MaxHeaderBytes = 1 << 20
}
