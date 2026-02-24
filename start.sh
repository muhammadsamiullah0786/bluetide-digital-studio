#!/bin/bash
# Quick Start Commands for BlueTide Digital Studio

echo "🚀 BlueTide Digital Studio - Quick Start"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎯 Available Commands:"
echo ""
echo "  npm run dev      - Start development server (http://localhost:3000)"
echo "  npm run build    - Build for production"
echo "  npm start        - Start production server"
echo "  npm run lint     - Run ESLint"
echo ""
echo "📝 Content Management:"
echo "  - Edit content/text in: data/site.ts"
echo "  - Replace images in: public/"
echo "  - Customize colors in: tailwind.config.ts"
echo ""
echo "🚀 Starting development server..."
echo ""

npm run dev
