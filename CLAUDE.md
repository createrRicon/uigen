# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

**Note**: This repository is owned by 力康, a UI/UX designer working on no-code platforms and AI agent features. See C:\Users\1\Documents\Claude\CLAUDE.md for complete user profile and collaboration preferences.

**Key collaboration preferences:**
- Provide frameworks and options, not rigid instructions
- Focus on design + development integration
- Visual thinking preference - use diagrams and structured presentations
- Collaborative creation through discussion, not direct answers
- Quick iteration with immediate feedback preferred

## Project Overview

**UIGen** is an AI-powered React component generator with live preview. Users create React components through natural language conversation with Claude AI, with real-time preview and code editing capabilities.

## Commands

```bash
# Development
npm run dev                    # Start development server with Turbopack
npm run dev:daemon             # Start dev server in background

# Production
npm run build                  # Build for production
npm run start                  # Start production server

# Code Quality
npm run lint                   # ESLint checking
npm run test                   # Run tests with Vitest

# Database
npm run setup                  # Install deps + generate Prisma client + migrate
npm run db:reset              # Reset database with --force
```

## Architecture Overview

### Technology Stack
- **Frontend**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with Radix UI components
- **Database**: Prisma with SQLite
- **AI**: Anthropic Claude AI (Vercel AI SDK)
- **Testing**: Vitest with jsdom environment
- **Editor**: Monaco Editor integration

### Core Architectural Patterns

1. **Virtual File System** (`src/lib/file-system.ts`)
   - Complete file system simulation that persists in memory/database
   - No files written to disk during development
   - Supports directories, files, and full CRUD operations

2. **AI Integration**
   - `src/lib/provider.ts`: AI model provider abstraction (supports real Claude API and mock provider)
   - `src/app/api/chat/route.ts`: Main chat endpoint with streaming responses
   - `src/lib/prompts/generation.tsx`: AI system prompt for component generation
   - `src/lib/tools/`: AI tool implementations for file manipulation

3. **State Management**
   - `src/lib/contexts/FileSystemProvider.tsx`: Virtual file system state
   - `src/lib/contexts/ChatProvider.tsx`: Chat history and conversation state
   - Server actions in `src/actions/`: Database mutations

4. **Component Structure**
   - `src/components/chat/`: Chat interface and messaging
   - `src/components/editor/`: Code editor and file tree
   - `src/components/preview/`: Live preview iframe
   - `src/components/ui/`: Reusable UI components (Radix-based)

### Data Flow

```
User Input → ChatInterface → Chat API
                ↓
         AI Model (Claude)
                ↓
         Tool Calls → Virtual File System
                ↓
         Code Editor/Preview (Real-time Updates)
```

### Key Entry Points

- `src/app/page.tsx` - Main entry (handles auth redirect)
- `src/app/[projectId]/page.tsx` - Individual project workspace
- `src/app/main-content.tsx` - Core workspace layout
- `src/lib/file-system.ts` - Virtual file system core
- `src/lib/provider.ts` - AI model provider

## Development Notes

- Uses `@/` path alias for all non-library imports
- Works without Claude API key using mock provider for development
- Project persistence saves chat history and file state to database via Prisma
- Tests located in `__tests__` directories within components
- Streaming AI responses with tool calling for file manipulation

## Database Schema (Prisma + SQLite)

```
User ──1:N──> Project
User:
  - id, email (unique), password (bcrypt hash)
  - timestamps

Project:
  - id, name, userId (nullable, 支持匿名项目)
  - messages (JSON, 聊天记录)
  - data (JSON, 虚拟文件系统状态)
  - onDelete: Cascade (用户删除时级联)
```

## Code Style Preferences

- **Minimal comments** - Keep code self-documenting through clear naming and structure
- Only add comments for non-obvious logic or complex business rules
