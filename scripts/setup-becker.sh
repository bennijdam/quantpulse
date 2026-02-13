#!/bin/bash

# setup-becker.sh
# Setup script for Becker analytics with Cloudflare R2 data integration

set -e

echo "🚀 QuantPulse Becker Setup"
echo "=========================="

# Check for required environment variables
check_env_var() {
    if [ -z "${!1}" ]; then
        echo "❌ Error: $1 is not set"
        echo "Please set the following environment variables:"
        echo "  - R2_ACCOUNT_ID: Your Cloudflare account ID"
        echo "  - R2_ACCESS_KEY_ID: Your R2 access key ID"
        echo "  - R2_SECRET_ACCESS_KEY: Your R2 secret access key"
        echo "  - R2_BUCKET_NAME: Your R2 bucket name (default: quantpulse-data)"
        exit 1
    fi
}

echo "📋 Checking environment variables..."
check_env_var "R2_ACCOUNT_ID"
check_env_var "R2_ACCESS_KEY_ID"
check_env_var "R2_SECRET_ACCESS_KEY"

# Set default bucket name if not provided
R2_BUCKET_NAME=${R2_BUCKET_NAME:-quantpulse-data}

echo "✅ Environment variables configured"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Build becker-core package
echo "🔨 Building becker-core analytics..."
cd packages/becker-core
npm run build
cd ../..
echo "✅ Becker-core built successfully"
echo ""

# Setup R2 data directory
echo "📁 Setting up data directory..."
mkdir -p data/r2-cache
echo "✅ Data directory created"
echo ""

# Configure Wrangler for R2 access
echo "⚙️  Configuring Cloudflare R2 access..."
cat > .dev.vars << EOF
R2_ACCOUNT_ID=${R2_ACCOUNT_ID}
R2_ACCESS_KEY_ID=${R2_ACCESS_KEY_ID}
R2_SECRET_ACCESS_KEY=${R2_SECRET_ACCESS_KEY}
R2_BUCKET_NAME=${R2_BUCKET_NAME}
EOF

echo "✅ R2 configuration complete"
echo ""

# Create sample data structure
echo "📊 Creating sample data structure..."
cat > data/r2-cache/README.md << 'EOF'
# R2 Data Cache

This directory stores cached data from Cloudflare R2.

## Structure
- `market-data/`: Historical market data
- `analytics/`: Precomputed analytics results
- `models/`: Trained models and parameters

## Usage
Data is automatically synced from R2 bucket
EOF

echo "✅ Sample data structure created"
echo ""

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start development servers"
echo "2. Access the terminal at http://localhost:3000"
echo "3. Access the marketing site at http://localhost:3001"
echo "4. API server will be available at http://localhost:3002"
echo ""
echo "For R2 data sync, use the following commands:"
echo "  - Upload data: wrangler r2 object put <BUCKET>/<KEY> --file <FILE>"
echo "  - Download data: wrangler r2 object get <BUCKET>/<KEY> --file <FILE>"
echo "  - List objects: wrangler r2 object list <BUCKET>"
