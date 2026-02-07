#!/bin/bash

echo "🚀 Setting up Pokemon Search App for FM Tech..."
echo ""

# Check Node version
NODE_VERSION=$(node -v)
echo "✓ Node version: $NODE_VERSION"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Run tests
echo ""
echo "🧪 Running tests..."
npm test

# Build the app
echo ""
echo "🔨 Building the application..."
npm run build

echo ""
echo "✅ Setup complete!"
echo ""
echo "To run the development server:"
echo "  npm run dev"
echo ""
echo "To run tests:"
echo "  npm test"
echo ""
echo "To deploy to Vercel:"
echo "  vercel"
echo ""
echo "Good luck with your submission! 🎉"
