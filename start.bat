@echo off
REM Quick Start Commands for BlueTide Digital Studio

echo.
echo ============================================
echo   BlueTide Digital Studio - Quick Start
echo ============================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    call npm install --legacy-peer-deps
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🎯 Available Commands:
echo.
echo   npm run dev      - Start development server (http://localhost:3000)
echo   npm run build    - Build for production
echo   npm start        - Start production server
echo   npm run lint     - Run ESLint
echo.
echo 📝 Content Management:
echo   - Edit content/text in: data/site.ts
echo   - Replace images in: public/
echo   - Customize colors in: tailwind.config.ts
echo.
echo Press any key to start the development server...
pause >nul

echo 🚀 Starting development server...
echo.
call npm run dev
