package main

import (
	"github.com/labstack/echo/v4"
)

func setupRoutes(e *echo.Echo) {
	e.Static("/", "frontend/dist/")
}
