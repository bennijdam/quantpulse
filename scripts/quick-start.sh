#!/bin/bash

# Quick start script for local development
# This script helps you get the QuantPulse repository up and running quickly

set -e

echo "🚀 QuantPulse Local Development Setup"
echo "======================================"
echo ""

# Check if we're on the correct branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")
if [ "$CURRENT_BRANCH" != "copilot/build-turborepo-setup-again" ]; then
    echo "⚠️  WARNING: You are on branch '$CURRENT_BRANCH'"
    echo ""
    echo "The complete monorepo is on the 'copilot/build-turborepo-setup-again' branch."
    echo ""
    echo "To switch to the correct branch, run:"
    echo "   git checkout copilot/build-turborepo-setup-again"
    echo ""
    echo "If you just cloned the repository, the main branch only contains a README."
    echo ""
    read -p "Do you want to continue anyway? (y/N) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled. Please switch to the correct branch first."
        exit 1
    fi
fi

# Check Node.js version
echo "📋 Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js >= 18.0.0"
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be >= 18.0.0 (current: $(node -v))"
    exit 1
fi

echo "✅ Node.js $(node -v)"
echo "✅ npm $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Build packages
echo "🔨 Building all packages..."
npm run build
echo "✅ Build complete"
echo ""

# Success message
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Start development servers:"
echo "   npm run dev"
echo ""
echo "2. Visit the apps:"
echo "   - Terminal: http://localhost:3000"
echo "   - Marketing: http://localhost:3001"
echo "   - API: http://localhost:3002/health"
echo ""
echo "3. (Optional) Set up database:"
echo "   - Copy packages/database/.env.example to packages/database/.env"
echo "   - Add your database connection string"
echo "   - Run: cd packages/database && npm run db:push"
echo ""
echo "For detailed instructions, see LOCAL_DEVELOPMENT.md"
echo ""
echo "Happy coding! 🚀"
