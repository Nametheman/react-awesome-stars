#!/bin/bash

echo "🚀 Building React Star Rating Component..."

# Clean previous build
npm run clean

# Build the component
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📦 Files generated in dist/ directory:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi 