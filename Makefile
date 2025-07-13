.PHONY: help install dev build lint test preview clean deploy format type-check all

# Default target
.DEFAULT_GOAL := help

# Colors for output (compatible with bash and zsh)
RESET := $(shell printf '\033[0m')
GREEN := $(shell printf '\033[32m')
YELLOW := $(shell printf '\033[33m')
CYAN := $(shell printf '\033[36m')
RED := $(shell printf '\033[31m')

## Development
dev: ## Start development server
	@printf "$(CYAN)Starting development server...$(RESET)\n"
	bun run dev

install: ## Install dependencies
	@printf "$(CYAN)Installing dependencies...$(RESET)\n"
	bun install

## Building
build: ## Build for production
	@printf "$(CYAN)Building for production...$(RESET)\n"
	bun run build

preview: build ## Preview production build
	@printf "$(CYAN)Starting preview server...$(RESET)\n"
	bun run preview

## Code Quality
lint: ## Run linter
	@printf "$(CYAN)Running linter...$(RESET)\n"
	bun run lint

lint-fix: ## Run linter with auto-fix
	@printf "$(CYAN)Running linter with auto-fix...$(RESET)\n"
	bun run lint -- --fix

format: ## Format code with prettier
	@printf "$(CYAN)Formatting code...$(RESET)\n"
	bun run format

type-check: ## Run TypeScript type checking
	@printf "$(CYAN)Running type check...$(RESET)\n"
	bun run type-check

## Testing
test: ## Run tests
	@printf "$(CYAN)Running tests...$(RESET)\n"
	bun run test

test-watch: ## Run tests in watch mode
	@printf "$(CYAN)Running tests in watch mode...$(RESET)\n"
	bun run test -- --watch

test-coverage: ## Run tests with coverage
	@printf "$(CYAN)Running tests with coverage...$(RESET)\n"
	bun run test -- --coverage

## Quality Gates
check: lint type-check test ## Run all quality checks
	@printf "$(GREEN)All quality checks passed!$(RESET)\n"

ci: install check build ## Full CI pipeline
	@printf "$(GREEN)CI pipeline completed successfully!$(RESET)\n"

## Maintenance
clean: ## Clean build artifacts and node_modules
	@printf "$(YELLOW)Cleaning build artifacts...$(RESET)\n"
	rm -rf dist/ build/ .next/ out/
	@printf "$(YELLOW)Cleaning dependencies...$(RESET)\n"
	rm -rf node_modules/
	@printf "$(GREEN)Clean completed!$(RESET)\n"

fresh: clean install ## Clean install
	@printf "$(GREEN)Fresh installation completed!$(RESET)\n"

## Deployment
deploy: build ## Deploy to production (customize as needed)
	@printf "$(CYAN)Deploying to production...$(RESET)\n"
	# Add your deployment commands here
	@printf "$(GREEN)Deployment completed!$(RESET)\n"

## Utilities
outdated: ## Check for outdated dependencies
	@printf "$(CYAN)Checking for outdated dependencies...$(RESET)\n"
	bun outdated

upgrade: ## Upgrade dependencies
	@printf "$(CYAN)Upgrading dependencies...$(RESET)\n"
	bun update

## Help
help: ## Show this help message
	@printf "$(CYAN)Available commands:$(RESET)\n"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@printf "\n"
	@printf "$(YELLOW)Examples:$(RESET)\n"
	@printf "  make dev          # Start development server\n"
	@printf "  make check        # Run all quality checks\n"
	@printf "  make ci           # Full CI pipeline\n"
	@printf "  make fresh        # Clean install\n"