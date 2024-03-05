build: build-frontend build-web

build-web:
	go build cmd/web/*

build-frontend:
	cd frontend
	npm install
	npm run build

run:
	./main
