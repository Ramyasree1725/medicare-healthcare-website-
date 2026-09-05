# ==============================================================================
# MediCare Health System — Automation Makefile
# ==============================================================================

.PHONY: help install build run dev test test-coverage docker-build docker-run clean

help:
	@echo "MediCare Build Targets:"
	@echo "  make install         - Install project dependencies"
	@echo "  make build           - Build production application bundle"
	@echo "  make run             - Start production server (http://localhost:5000)"
	@echo "  make dev             - Start development watch server"
	@echo "  make test            - Execute clinical automated test suite"
	@echo "  make test-coverage   - Execute test suite with coverage report"
	@echo "  make docker-build    - Build Docker container image"
	@echo "  make docker-run      - Run Docker container on port 5000"

install:
	npm install

build:
	npm run build

run:
	npm start

dev:
	npm run dev

test:
	npm test

test-coverage:
	npm run test:coverage

docker-build:
	docker build -t medicare-health-system:1.0 .

docker-run:
	docker run -d -p 5000:5000 --name medicare-app medicare-health-system:1.0

clean:
	rm -rf node_modules package-lock.json coverage
