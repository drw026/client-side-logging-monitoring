.PHONY: all

start: rebuild-all
	@echo "=== Starting the Docker environment ==="
	docker-compose -f .infra/docker-compose.yml up

rebuild-all:
	@echo "=== Rebuilding Docker containers ==="
	docker-compose -f .infra/docker-compose.yml build

stop:
	@echo "=== Stopping the Docker environment ==="
	docker-compose -f .infra/docker-compose.yml stop
