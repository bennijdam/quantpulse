# QuantPulse

> **⚠️ IMPORTANT: You're viewing the main branch which only contains this README.**
>
> **The complete monorepo with all apps, packages, and scripts is on the `copilot/build-turborepo-setup-again` branch.**

## Quick Start

If you just cloned this repository, switch to the development branch:

```bash
git checkout copilot/build-turborepo-setup-again
```

After switching branches, you'll have access to:
- ✅ Complete Turborepo monorepo structure
- ✅ Three Next.js/Express applications
- ✅ Analytics packages (Becker Core)
- ✅ Prisma database package
- ✅ UI component library
- ✅ Setup scripts and documentation

## Full Setup Instructions

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/bennijdam/quantpulse.git
   cd quantpulse
   ```

2. **Switch to the development branch**:
   ```bash
   git checkout copilot/build-turborepo-setup-again
   ```

3. **Run the automated setup**:
   ```bash
   ./scripts/quick-start.sh
   ```

   OR manually:
   ```bash
   npm install
   npm run build
   npm run dev
   ```

4. **Access the apps**:
   - Terminal: http://localhost:3000
   - Marketing: http://localhost:3001
   - API: http://localhost:3002/health

## What's in the Development Branch?

The `copilot/build-turborepo-setup-again` branch contains:

### Apps
- **terminal** - Bloomberg-style trading terminal (Next.js + React)
- **marketing** - Marketing website (Next.js)
- **server** - REST API backend (Express + TypeScript)

### Packages
- **@quantpulse/becker-core** - Analytics library with Mispricing Delta and Optimism Tax modules
- **@quantpulse/database** - Prisma ORM with Neon PostgreSQL support
- **@quantpulse/ui** - Shared UI components with Bloomberg-style theme

### Documentation
- `LOCAL_DEVELOPMENT.md` - Comprehensive setup guide
- `SETUP.md` - Advanced configuration
- `CONTRIBUTING.md` - Contribution guidelines

### Infrastructure
- `vercel.json` - Vercel deployment config
- `render.yaml` - Render deployment config
- `wrangler.toml` - Cloudflare Workers config
- `scripts/setup-becker.sh` - R2 data setup script

## Why is this on a feature branch?

This is a work-in-progress that will be merged to main once reviewed and approved.

## Need Help?

After switching to the `copilot/build-turborepo-setup-again` branch:
- Read `LOCAL_DEVELOPMENT.md` for detailed setup instructions
- Read `README.md` for project overview
- Open an issue if you encounter problems

---

**Next step:** Run `git checkout copilot/build-turborepo-setup-again` to get started! 🚀
