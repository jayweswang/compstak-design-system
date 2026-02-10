# Token Quick Reference

This file provides quick lookup for common token patterns during design QA. For complete token definitions, always reference the actual token files in `tokens/`.

## Common Token Patterns

### Color Tokens

**Text Colors:**
```
content/primary/text     - Primary text (darkest)
content/secondary/text   - Secondary text (medium)
content/tertiary/text    - Tertiary text (light)
content/on-dark          - Text on dark backgrounds
```

**Action Colors:**
```
action/primary/default   - Primary button default state
action/primary/hovered   - Primary button hover
action/primary/pressed   - Primary button active/pressed

action/destructive/default  - Destructive action default
action/destructive/hovered  - Destructive hover
action/destructive/pressed  - Destructive pressed

action/secondary/default    - Secondary action default
action/secondary/hovered    - Secondary hover
action/secondary/pressed    - Secondary pressed
```

**Surface Colors:**
```
surface/primary          - Primary background
surface/secondary        - Secondary background
surface/elevated         - Elevated surfaces (cards, modals)
```

**Border Colors:**
```
content/primary/border   - Primary borders
content/secondary/border - Secondary borders
content/tertiary/border  - Tertiary borders
```

### Typography Tokens

**Heading Styles (for product UI):**
```
type/heading/lg          - Large heading (modal/dialog titles)
type/heading/md          - Medium heading (section titles)
type/heading/sm          - Small heading (subsection titles)
```

**Display Styles (marketing only, avoid in app UI):**
```
type/display/lg          - Large display (hero text)
type/display/md          - Medium display
type/display/sm          - Small display
```

**Body Text:**
```
type/body/text           - Standard body text
type/body/small          - Small body text
type/caption/text        - Caption text
```

**Font Properties:**
```
Font family: Gotham, Arial, sans-serif
Header weight: 500
Body weight: 400
```

### Spacing Tokens

**Common Spacing Values:**
```
spacing/xs    - Extra small (4px)
spacing/sm    - Small (8px)
spacing/md    - Medium (16px)
spacing/lg    - Large (24px)
spacing/xl    - Extra large (32px)
spacing/2xl   - 2X large (48px)
```

*(Actual token names and values defined in `tokens/primitives.spacing.json` and `tokens/semantics.layout.json`)*

## CSS Implementation Patterns

### Typography Implementation

**Heading:**
```css
.heading-lg {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-heading-lg-size);
  font-weight: 500;
  line-height: var(--type-heading-lg-line-height);
  color: var(--content-primary-text);
}
```

**Body Text:**
```css
.body-text {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-body-text-size);
  font-weight: 400;
  line-height: var(--type-body-text-line-height);
  color: var(--content-primary-text);
}
```

### Button Implementation

**Primary Button:**
```css
.btn-primary {
  background: var(--action-primary-default);
  color: var(--content-on-dark);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-body-text-size);
  font-weight: 500;
}

.btn-primary:hover {
  background: var(--action-primary-hovered);
}

.btn-primary:active {
  background: var(--action-primary-pressed);
}

.btn-primary:disabled {
  background: var(--action-disabled-fill);
  color: var(--action-disabled-ink);
  cursor: not-allowed;
}
```

**Destructive Button:**
```css
.btn-destructive {
  background: var(--action-destructive-default);
  color: var(--content-on-dark);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-body-text-size);
  font-weight: 500;
}

.btn-destructive:hover {
  background: var(--action-destructive-hovered);
}

.btn-destructive:active {
  background: var(--action-destructive-pressed);
}
```

### Modal Implementation

**Modal Container:**
```css
.modal {
  background: var(--surface-elevated);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-lg);
}

.modal-header {
  margin-bottom: var(--spacing-md);
}

.modal-title {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-heading-lg-size);
  font-weight: 500;
  line-height: var(--type-heading-lg-line-height);
  color: var(--content-primary-text);
}

.modal-body {
  margin-bottom: var(--spacing-lg);
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-sm);
}
```

## Token Hierarchy Lookup

### When to Use Which Token Level

| Scenario | Use Token Level | Example |
|----------|----------------|---------|
| Implementing a component in code | Semantic | `var(--action-primary-default)` |
| Defining semantic token values | Primitive | `"action/primary/default": "blue/500"` |
| Component needs unique override | Component token | `components.button.intent.primary.solid.fill-default` |
| Raw value definition | Primitive only | `"blue/500": "#0066CC"` (in primitives.colors.json) |

### Correct Reference Chain

```
Component Implementation (CSS/HTML)
  ↓ uses
Semantic Token (semantics.colors.json)
  ↓ references
Primitive Token (primitives.colors.json)
  ↓ contains
Raw Value (#0066CC)
```

**Example:**
```
Button with blue background in HTML/CSS:
  → var(--action-primary-default)      [semantic token in code]
    → "action/primary/default": "blue/500"  [semantic definition]
      → "blue/500": "#0066CC"                [primitive definition]
```

## Quick Violation Checks

### Grep Patterns for Code Review

**Find hard-coded colors:**
```bash
# Hex colors
grep -r "#[0-9a-fA-F]\{3,6\}" --include="*.css" --include="*.html"

# RGB/RGBA
grep -r "rgba\?(" --include="*.css" --include="*.html"

# HSL
grep -r "hsla\?(" --include="*.css" --include="*.html"
```

**Find hard-coded spacing:**
```bash
# Hard-coded px values in padding/margin
grep -r "padding:\s*[0-9]\+px" --include="*.css"
grep -r "margin:\s*[0-9]\+px" --include="*.css"
```

**Find hard-coded font sizes:**
```bash
grep -r "font-size:\s*[0-9]\+px" --include="*.css"
```

**Find wrong font weights:**
```bash
# Headers with 600 (should be 500)
grep -r "font-weight:\s*600" --include="*.css"
```

**Find primitive token usage (should use semantic):**
```bash
# Looking for var(--blue-*), var(--neutral-*) patterns
grep -r "var(--blue-" --include="*.css"
grep -r "var(--neutral-" --include="*.css"
```

## Token File Locations

Quick reference to token file paths:

```
Design System Root/
├── tokens/
│   ├── primitives.colors.json      - Raw color values
│   ├── primitives.spacing.json     - Raw spacing values
│   ├── primitives.typography.json  - Raw typography properties
│   ├── primitives.icons.json       - Icon references
│   ├── semantics.colors.json       - Semantic color mappings
│   ├── semantics.typography.json   - Semantic typography mappings
│   ├── semantics.layout.json       - Semantic layout tokens
│   └── components.tokens.json      - Component token overrides
└── rules/
    ├── colors.rules.mdc
    ├── spacing.rules.mdc
    ├── typography.rules.mdc
    ├── components.rules.mdc
    └── components/
        ├── button.rules.mdc
        ├── input.rules.mdc
        └── modal.rules.mdc
```

## Figma Variable Mapping

When reviewing Figma designs, verify that:

1. **Color fills/strokes** → Figma Color Variables (matching semantic token names)
2. **Text styles** → Figma Text Styles (matching semantic typography tokens)
3. **Spacing (Auto Layout)** → Token values (4px, 8px, 16px, 24px, 32px, etc.)
4. **Component instances** → Using defined component variants

**Figma Variable Naming Convention:**

Variables in Figma should mirror the semantic token path structure:
- `action/primary/default` (Figma Variable) → `action/primary/default` (semantic token)
- `content/primary/text` (Figma Variable) → `content/primary/text` (semantic token)
- `type/heading/lg` (Figma Text Style) → `type/heading/lg` (semantic token)
