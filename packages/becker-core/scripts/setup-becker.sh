#!/bin/bash
#
# setup-becker.sh - Setup script for Becker analytics with Cloudflare R2 data
#
# This script configures the environment for Becker analytics modules
# and sets up Cloudflare R2 for data storage and retrieval.
#

set -e

echo "========================================="
echo "Becker Analytics Setup"
echo "========================================="
echo ""

# Check for required environment variables
check_env() {
    if [ -z "${R2_ACCOUNT_ID}" ]; then
        echo "❌ Error: R2_ACCOUNT_ID not set"
        echo "Please set your Cloudflare R2 Account ID:"
        echo "  export R2_ACCOUNT_ID=your_account_id"
        exit 1
    fi

    if [ -z "${R2_ACCESS_KEY_ID}" ]; then
        echo "❌ Error: R2_ACCESS_KEY_ID not set"
        exit 1
    fi

    if [ -z "${R2_SECRET_ACCESS_KEY}" ]; then
        echo "❌ Error: R2_SECRET_ACCESS_KEY not set"
        exit 1
    fi

    echo "✅ Environment variables configured"
}

# Create R2 bucket for analytics data
setup_r2_bucket() {
    echo ""
    echo "Setting up Cloudflare R2 bucket..."
    
    BUCKET_NAME="${R2_BUCKET_NAME:-quantpulse-analytics}"
    
    echo "Bucket name: $BUCKET_NAME"
    echo ""
    echo "Note: Use wrangler or rclone to create the bucket:"
    echo "  wrangler r2 bucket create $BUCKET_NAME"
    echo ""
    echo "✅ R2 configuration ready"
}

# Setup data directories
setup_data_dirs() {
    echo ""
    echo "Setting up data directories..."
    
    mkdir -p data/market
    mkdir -p data/analytics
    mkdir -p data/cache
    
    echo "✅ Data directories created"
}

# Create sample configuration
create_config() {
    echo ""
    echo "Creating configuration file..."
    
    cat > becker.config.json <<EOF
{
  "r2": {
    "accountId": "${R2_ACCOUNT_ID}",
    "bucketName": "${R2_BUCKET_NAME:-quantpulse-analytics}",
    "endpoint": "https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com"
  },
  "analytics": {
    "mispricingDelta": {
      "enabled": true,
      "updateInterval": 300000
    },
    "optimismTax": {
      "enabled": true,
      "updateInterval": 300000
    }
  },
  "data": {
    "marketDataPath": "./data/market",
    "analyticsPath": "./data/analytics",
    "cachePath": "./data/cache"
  }
}
EOF
    
    echo "✅ Configuration file created: becker.config.json"
}

# Main setup flow
main() {
    echo "Starting Becker analytics setup..."
    echo ""
    
    check_env
    setup_data_dirs
    create_config
    setup_r2_bucket
    
    echo ""
    echo "========================================="
    echo "✅ Becker Analytics Setup Complete!"
    echo "========================================="
    echo ""
    echo "Next steps:"
    echo "1. Create R2 bucket using wrangler:"
    echo "   wrangler r2 bucket create quantpulse-analytics"
    echo ""
    echo "2. Run the analytics modules:"
    echo "   npm run dev"
    echo ""
}

main "$@"
