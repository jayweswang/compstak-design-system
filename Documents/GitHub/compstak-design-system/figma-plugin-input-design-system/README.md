# Input Design System — Figma Plugin

This plugin generates an **exportable** input design system inside Figma from your design tokens. It creates:

- **Variables** — Collection **"Input / Design Tokens"** with colors for states (default, hover, focus, error, disabled) and borders, all mapped from `tokens/primitives.colors.json`.
- **Text styles** — **Input / Value**, **Input / Placeholder**, **Input / Label**, **Input / Helper** (from your typography primitives).
- **Input component** — One component set **"Input"** with 5 variants: **Default**, **Hover**, **Focus**, **Error**, **Disabled**. Each variant uses the variables above so you can change tokens in one place.

Everything lives in your current Figma file (variables, styles, and component), so you can use and export it like any other Figma design.

---

## How to run it in Figma

1. **Open Figma** (desktop app or figma.com).
2. **Plugins → Development → Import plugin from manifest…**
3. **Choose** `manifest.json` from this folder (`figma-plugin-input-design-system/manifest.json`).
4. **Run the plugin:** right‑click canvas → **Plugins → Development → Input Design System**, or **Resources** (⌘/) → search **Input Design System**.
5. Click **"Create Input Design System"** in the plugin UI. The button will show **"Working…"** and the status line will show progress (e.g. *Loading fonts…*, *Creating variables…*, *Creating Input component…*, *Creating demo pages…*). A full run usually finishes in **5–15 seconds** depending on the file. If it seems stuck, check the Figma notification for an error.

You’ll get:

- **Four auto-created pages:**
  - **Input / Library** — The Input component set and a short “All variants” stack. This is where the main component lives.
  - **Input / States** — One section per state (Default, Hover, Focus, Error, Disabled) with a label and short description so you can see when to use each.
  - **Input / Variants** — All 5 variants in one column and copy explaining that the **State** property controls the variant.
  - **Input / Demo** — A small form (Email, Password, Confirm password, Read-only) showing the component in context with different states.
- A variable collection **Input / Design Tokens** in the **Variables** panel (Local variables).
- New **text styles** in the **Text** section of the design panel (Input / Value, Placeholder, Label, Helper).

You can use these pages to demo states, variants, and how the component works; copy the component into other files; or publish the file as a library.

---

## Folder structure

```
figma-plugin-input-design-system/
  manifest.json   # Plugin manifest (name, id, main, ui)
  code.js         # Creates variables, text styles, Input component
  ui.html         # Plugin UI with "Create Input Design System" button
  README.md       # This file
```

## Token source

Colors and structure are aligned with:

- `tokens/primitives.colors.json` (neutral, blue, red)
- `tokens/components.tokens.json` → `components.input` (state, size, field)

Spacing (padding, radius, min-height) follows your space/radius primitives (e.g. space/4 = 16px, radius/xs = 4px).
