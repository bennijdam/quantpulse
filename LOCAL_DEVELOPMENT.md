# Local Development Guide

This guide will help you set up the QuantPulse repository on your local machine for development.

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- **Git** - [Download Git](https://git-scm.com/downloads)
- **Node.js** >= 18.0.0 - [Download Node.js](https://nodejs.org/)
- **npm** >= 8.0.0 (comes with Node.js)
- **Code Editor** - We recommend [VS Code](https://code.visualstudio.com/)

### Verify Installation

Run these commands to check your installations:

```bash
git --version
node --version
npm --version
```

Expected output should show versions >= the prerequisites listed above.

## 🚀 Getting Started Locally

### ⚠️ Important: Branch Notice

**The complete monorepo is currently on the `copilot/build-turborepo-setup-again` branch.**

The main branch only contains a basic README. Make sure to checkout the development branch after cloning!

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
# Clone via HTTPS
git clone https://github.com/bennijdam/quantpulse.git

# OR clone via SSH (if you have SSH keys set up)
git clone git@github.com:bennijdam/quantpulse.git

# Navigate into the project directory
cd quantpulse

# IMPORTANT: Switch to the development branch
git checkout copilot/build-turborepo-setup-again
```

### Step 2: Install Dependencies

Install all dependencies for the monorepo:

```bash
npm install
```

This will install dependencies for:
- Root workspace
- All apps (terminal, marketing, server)
- All packages (becker-core, database, ui)

**Expected output:** You should see npm installing packages and eventually a success message.

### Step 3: Build the Project

Build all apps and packages:

```bash
npm run build
```

This uses Turborepo to build everything in the correct order with optimized caching.

**Expected output:** 
```
Tasks:    4 successful, 4 total
Cached:    0 cached, 4 total
Time:    ~20-30s
```

### Step 4: Start Development Servers

You have several options for running the development servers:

#### Option A: Run All Apps Together

```bash
npm run dev
```

This will start:
- Terminal app on http://localhost:3000
- Marketing app on http://localhost:3001
- Server API on http://localhost:3002

#### Option B: Run Individual Apps

```bash
# Terminal only
npm run dev --filter=terminal

# Marketing only
npm run dev --filter=marketing

# Server only
npm run dev --filter=server
```

### Step 5: Verify Everything Works

Open your browser and visit:

- **Terminal**: http://localhost:3000 - Bloomberg-style trading terminal
- **Marketing**: http://localhost:3001 - Marketing website
- **API Health Check**: http://localhost:3002/health - Should return `{"status":"ok"}`

## 🔧 Optional: Database Setup (for production features)

If you want to use the database features:

### 1. Get a PostgreSQL Database

**Option A: Use Neon (Recommended)**
- Sign up at [neon.tech](https://neon.tech)
- Create a new project
- Copy your connection string

**Option B: Local PostgreSQL**
- Install PostgreSQL locally
- Create a database named `quantpulse`

### 2. Configure Database

```bash
# Copy the example env file
cp packages/database/.env.example packages/database/.env

# Edit the .env file with your database connection string
# Replace the DATABASE_URL with your actual connection string
```

### 3. Setup Prisma

```bash
cd packages/database

# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio to view your database
npm run db:studio
```

## 🌐 Optional: Cloudflare R2 Setup (for Becker analytics)

If you want to use Cloudflare R2 for data storage:

### 1. Get Cloudflare Credentials

- Sign up at [Cloudflare](https://dash.cloudflare.com)
- Create an R2 bucket named `quantpulse-data`
- Generate API tokens from the R2 dashboard

### 2. Configure R2

```bash
# Set environment variables
export R2_ACCOUNT_ID="your-account-id"
export R2_ACCESS_KEY_ID="your-access-key"
export R2_SECRET_ACCESS_KEY="your-secret-key"
export R2_BUCKET_NAME="quantpulse-data"

# Run setup script
./scripts/setup-becker.sh
```

## 📁 Project Structure

Understanding the folder structure:

```
quantpulse/
├── apps/                  # Applications
│   ├── terminal/         # Next.js trading terminal (port 3000)
│   ├── marketing/        # Next.js marketing site (port 3001)
│   └── server/           # Express API server (port 3002)
├── packages/             # Shared packages
│   ├── becker-core/     # Analytics library
│   ├── database/        # Prisma database
│   └── ui/              # UI components
├── scripts/             # Utility scripts
└── [config files]       # Root configuration files
```

## 💻 Development Workflow

### Making Changes

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in the relevant app or package

3. **Test your changes:**
   ```bash
   # Lint code
   npm run lint
   
   # Build to check for errors
   npm run build
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Working with Specific Packages

#### Terminal App (apps/terminal)
```bash
cd apps/terminal
npm run dev    # Start dev server on port 3000
npm run build  # Build for production
npm run lint   # Lint code
```

#### Marketing App (apps/marketing)
```bash
cd apps/marketing
npm run dev    # Start dev server on port 3001
npm run build  # Build for production
npm run lint   # Lint code
```

#### Server App (apps/server)
```bash
cd apps/server
npm run dev    # Start dev server with auto-reload
npm run build  # Compile TypeScript
npm start      # Run production build
```

#### Becker Core Package (packages/becker-core)
```bash
cd packages/becker-core
npm run build  # Compile TypeScript
npm run dev    # Watch mode for development
npm run lint   # Lint code
```

## 🔍 Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start all dev servers |
| `npm run build` | Build all apps and packages |
| `npm run lint` | Lint all code |
| `npm run format` | Format code with Prettier |

## 🐛 Troubleshooting

### Port Already in Use

If you get "port already in use" errors:

```bash
# Find process using port 3000 (or 3001, 3002)
lsof -i :3000

# Kill the process (replace PID with actual process ID)
kill -9 PID
```

### Build Errors

If you encounter build errors:

```bash
# Clean everything and start fresh
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm -rf apps/*/.next
rm -rf apps/*/dist
rm -rf packages/*/dist
rm -rf .turbo

# Reinstall
npm install

# Rebuild
npm run build
```

### Node Version Issues

If you're having Node.js version issues:

```bash
# Check your Node version
node --version

# If using nvm, switch to the correct version
nvm install 18
nvm use 18
```

### TypeScript Errors

If you see TypeScript errors in your editor:

1. Make sure you've run `npm install` at the root
2. Build the packages first: `npm run build`
3. Restart your TypeScript server in VS Code: `Cmd/Ctrl + Shift + P` → "TypeScript: Restart TS Server"

## 📝 Recommended VS Code Extensions

For the best development experience, install these VS Code extensions:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Prisma** - Prisma schema support
- **Tailwind CSS IntelliSense** - Tailwind class name completion
- **TypeScript and JavaScript Language Features** - Built-in, but make sure it's enabled

### VS Code Settings

The repository includes a `.vscode/settings.json` file with recommended settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "files.exclude": {
    "**/.turbo": true,
    "**/node_modules": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/.next": true,
    "**/dist": true,
    "**/.turbo": true
  }
}
```

These settings are already included in the repository, so you don't need to create them manually.

## 🎯 Next Steps

Now that you have the repository set up locally:

1. **Explore the code** - Start with `apps/terminal/src/app/page.tsx`
2. **Read the documentation** - Check `README.md` and `SETUP.md`
3. **Try the analytics** - Import and use `@quantpulse/becker-core`
4. **Build something!** - Make changes and see them live

## 📚 Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Need Help?

If you run into issues:

1. Check the [Troubleshooting](#-troubleshooting) section above
2. Review the `SETUP.md` file for detailed setup instructions
3. Open an issue on GitHub with:
   - Your Node.js version
   - Error messages
   - Steps to reproduce

Happy coding! 🚀
