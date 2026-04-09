# DungeonAI.exe

DungeonAI.exe is a retro-inspired, AI-powered text adventure built with
React.\
It demonstrates advanced front-end architecture, state management, AI
orchestration, and custom design systems --- all packaged as an
interactive portfolio piece.

## Overview

DungeonAI.exe is a browser-based choose-your-own-adventure game where
the AI acts as a dynamic Dungeon Master.\
The experience combines structured prompt engineering with deterministic
front-end state control to create a responsive, replayable narrative
engine.

This project was designed to showcase:

- Advanced React architecture
- Clean state separation and management
- Custom UI system design
- AI API integration
- Scalable component structure
- Production-minded engineering decisions

## Core Features

### Gemini LLM-Driven Dungeon Master

- Structured prompt architecture
- Deterministic response parsing
- AI-enforced formatting for narrative + choices
- Context summarization to maintain performance

### Multiple Game Configurations

Players can configure:

**Genres:** Fantasy, Dungeon, Horror,
Post-Apocalypse

**Character Types:** Rogue, Fighter, Healer,
Magician

**Difficulty Modes:** 3 scaling difficulty levels

These selections dynamically influence prompt conditioning and game
logic.

### Stats System

- Health-based game-ending logic
- Player stat tracking
- Conditional narrative outcomes
- AI-informed action resolution

Game state updates are handled deterministically on the front end, while
narrative flavor remains AI-driven.

### Custom API Key System

- Users provide their own Gemini API key
- Keys are stored locally (not persisted server-side)
- Allows safe deployment without backend key exposure

### Custom Retro Terminal Design System

- Fully custom design system
- Monospace typography
- CRT-inspired green-on-black aesthetic
- Custom UI components
- Responsive grid layout
- ASCII art support

All styles are handcrafted to emulate a classic terminal interface.

### Third-Party Integrations

- **Zustand** - Lightweight global state management
- **react-tooltip** - Enhanced UX interactions
- **Gemini API** - LLM-driven narrative engine

---

## Architecture & State Management

The application maintains clear separation of state domains:

- **Player State**
  - Stats
  - Inventory
  - Character selection
- **Game State**
  - Current narrative turn
  - AI message history
  - Summarized context memory
- **Settings State**
  - Genre
  - Difficulty
  - AI "chaos" modifier
  - API key management

State is centrally orchestrated via Zustand to maintain predictability
and composability.

---

## AI Orchestration Strategy

Key engineering considerations:

- Structured prompt formatting to enforce consistent AI output
- Response parsing to separate:
  - Narrative
  - Choices
  - Game-over states
- Periodic context summarization to prevent runaway token growth
- Deterministic front-end validation of AI-generated events

The result is a hybrid architecture: AI handles narrative creativity.\
The front end enforces rules and game mechanics.

---

## Custom Assets

- Custom iconography
- Custom UI components
- Retro sound effects
- ASCII-rendered visual panels

All assets are integrated into the design system to maintain thematic
consistency.

---

## Tech Stack

- React
- Zustand
- Gemini API
- react-tooltip
- Custom CSS design system
- Modular component architecture

---

## Future Roadmap

- 📱 Mobile-optimized version
- 💾 Persistent save-game system
- 🎲 Expanded stat systems
- 🧬 Expanded AI memory handling

---

## 🎯 Why This Project Matters

DungeonAI.exe demonstrates:

- Strong front-end architectural thinking
- Practical AI API integration
- Clean state modeling
- UX-driven design decisions
- Custom component systems
- Production-ready structure
