build: build-web build-frontend

build-web:
	go build cmd/web/*

build-frontend:
	cd frontend && npm run build
	cd ..

run:
	./main
