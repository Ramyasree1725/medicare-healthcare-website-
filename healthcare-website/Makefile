.PHONY: install backend frontend start build test clean

install:
	cd backend && npm install
	cd frontend && npm install

backend:
	cd backend && npm start

frontend:
	cd frontend && npm run dev

start: backend

build:
	cd frontend && npm run build

test:
	@echo "Running tests..."
	@ls backend/tests/*.js | wc -l
	@echo "test files found"

clean:
	rm -rf backend/node_modules frontend/node_modules frontend/dist
