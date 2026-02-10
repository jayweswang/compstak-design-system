# Design QA Fix Patterns

Detailed patterns for automatically fixing design system violations.

## Color Violation Fixes

### Hard-coded Hex to Semantic Token

**Find & Replace Patterns:**

| Hard-coded Value | Context | Semantic Token |
|------------------|---------|----------------|
| `#0066CC`, `#228FFF` | Primary action background | `var(--color-action-primary-default)` |
| `#257FF6` | Primary action hover | `var(--color-action-primary-hovered)` |
| `#1E71ED` | Primary action pressed | `var(--color-action-primary-pressed)` |
| `#DC3545`, `#D32F2F` | Destructive action | `var(--color-action-destructive-default)` |
| `#F4F5F7` | Cancel button default | `var(--color-action-cancel-default)` |
| `#EBECF0` | Cancel button hover | `var(--color-action-cancel-hovered)` |
| `#DFE1E6` | Cancel button pressed | `var(--color-action-cancel-pressed)` |
| `#FFFFFF`, `white` | Surface/canvas | `var(--color-surface-canvas)` |
| `#F8F8F8`, `#F5F5F5` | Raised surface | `var(--color-surface-raised)` |
| `#303441`, `#000000`, `black` | Primary text | `var(--color-content-primary-text)` |
| `#666666`, `#555`, `#444` | Secondary/tertiary text | `var(--color-content-secondary-text)` |
| `#A8B0BE` | Tertiary text | `var(--color-content-tertiary-text)` |
| `#606581` | Primary border | `var(--color-content-primary-border)` |
| `#CCCCCC`, `#E0E0E0` | Borders (lighter) | `var(--color-content-secondary-border)` |

### RGBA/RGB to Token

```javascript
// Overlay backgrounds
"rgba(0, 0, 0, 0.4)" → "var(--color-overlay-background)"
"rgba(0, 0, 0, 0.6)" → "var(--color-overlay-background)" (define as token first)

// Focus rings
"rgba(34, 143, 255, 0.2)" → "var(--color-focus-ring)"

// Shadows (define as token)
"0 20px 40px rgba(0, 0, 0, 0.15)" → "var(--shadow-modal)"
"0 10px 30px #000000" → "var(--shadow-modal)"
```

### Color Fix Algorithm

```
For each CSS property with color value:
  1. Identify context (button, text, border, surface)
  2. Determine state (default, hover, pressed, disabled)
  3. Map to semantic token based on context + state
  4. Replace hard-coded value with var(--token-name)
  5. If token doesn't exist in :root, add it
```

## Typography Violation Fixes

### Font Family Fixes

**Pattern 1: Missing Gotham**
```
Find: "font-family: Arial"
Replace: "font-family: Gotham, Arial, sans-serif"

Find: "font-family: Helvetica"
Replace: "font-family: Gotham, Arial, sans-serif"

Find: "font-family: sans-serif"
Replace: "font-family: Gotham, Arial, sans-serif"
```

**Pattern 2: Incomplete fallback chain**
```
Find: "font-family: Gotham"
Replace: "font-family: Gotham, Arial, sans-serif"

Find: "font-family: Gotham, sans-serif"
Replace: "font-family: Gotham, Arial, sans-serif"
```

### Font Weight Fixes

**Headers/Labels/Buttons (should be 500):**
```
Find in button/header context: "font-weight: 600"
Replace: "font-weight: 500"

Find in button/header context: "font-weight: 700"
Replace: "font-weight: 500"

Find in button/header context: "font-weight: bold"
Replace: "font-weight: 500"
```

**Body Text (should be 400):**
```
Find in body text context: "font-weight: 500"
Replace: "font-weight: 400"

Find in body text context: "font-weight: 600"
Replace: "font-weight: 400"
```

### Font Size Fixes

**Modal Titles (should be Heading Large):**
```
Find: "font-size: 32px" (Display Large)
Replace: "font-size: var(--font-heading-lg-size)" (24px)

Also update line-height:
Find: "line-height: 1.2"
Replace: "line-height: var(--font-heading-lg-height)"
```

**Body Text:**
```
Find: "font-size: 16px"
Replace: "font-size: var(--font-body-size)"

Find: "line-height: 1.5"
Replace: "line-height: var(--font-body-height)"
```

**Labels:**
```
Find: "font-size: 14px" (in label context)
Replace: "font-size: var(--font-label-size)"

Find: "font-size: 13px" (small label)
Replace: "font-size: var(--font-label-size)"
```

### Typography Fix Algorithm

```
For each text element:
  1. Identify element type (heading, body, label, button)
  2. Fix font-family to full stack
  3. Fix font-weight based on type (500 for headers, 400 for body)
  4. Replace hard-coded sizes with semantic tokens
  5. Replace hard-coded line-heights with tokens
```

## Spacing Violation Fixes

### Spacing Token Mapping

| Hard-coded Value | Semantic Token | Use Case |
|------------------|----------------|----------|
| `4px`, `0.25rem` | `var(--space-1)` | Tiny gaps, label-to-input |
| `8px`, `0.5rem` | `var(--space-2)` | Small gaps, button padding-y |
| `12px`, `0.75rem` | `var(--space-3)` | Medium-small gaps |
| `16px`, `1rem` | `var(--space-4)` | Standard gaps, button padding-x |
| `24px`, `1.5rem` | `var(--space-6)` | Large gaps, modal padding |
| `32px`, `2rem` | `var(--space-8)` | Extra large gaps |

### Border Radius Fixes

```
Find: "border-radius: 4px"
Replace: "border-radius: var(--radius-xs)"

Find: "border-radius: 6px" or "8px"
Replace: "border-radius: var(--radius-sm)"

Find: "border-radius: 50%" (for circular buttons - wrong)
Replace: "border-radius: var(--radius-sm)"
```

### Padding/Margin Fixes

```
// Single value
"padding: 20px" → "padding: var(--space-4)"

// Two values
"padding: 12px 24px" → "padding: var(--space-2) var(--space-4)"

// Four values
"padding: 10px 15px 10px 15px" → "padding: var(--space-2) var(--space-4)"

// Individual sides
"margin-bottom: 15px" → "margin-bottom: var(--space-2)"
"padding-top: 20px" → "padding-top: var(--space-4)"
```

### Spacing Fix Algorithm

```
For each spacing property (padding, margin, gap, width, height):
  1. Convert px to nearest token value
  2. Round to standard scale (4, 8, 12, 16, 24, 32)
  3. Map to appropriate token
  4. Replace with var(--space-N) or var(--radius-X)
  5. Maintain shorthand format if possible
```

## Component Rule Violation Fixes

### Modal Button Count Fix

**Problem: 4 buttons in modal (exceeds max 3)**

```html
<!-- BEFORE -->
<div class="modal__footer">
  <button class="btn btn--save">Save for later</button>
  <button class="btn btn--cancel">Cancel</button>
  <button class="btn btn--primary">Download</button>
  <button class="btn btn--destructive">Delete</button>
</div>

<!-- AFTER: Remove least essential button(s) -->
<div class="modal__footer">
  <button class="btn btn--cancel">Cancel</button>
  <button class="btn btn--primary">Download</button>
</div>
```

**Decision logic:**
1. Keep Cancel (required with primary/destructive)
2. Keep primary action (Download)
3. Remove "Save for later" (least essential)
4. Remove "Delete" (destructive shouldn't be with primary)

### Modal Button Layout Fix

**Problem: space-between (wrong layout)**

```css
/* BEFORE */
.modal__footer {
  display: flex;
  justify-content: space-between;  /* Spreads buttons */
}

/* AFTER */
.modal__footer {
  display: flex;
  justify-content: flex-end;  /* Groups on right */
  gap: var(--space-2);
}
```

### Primary + Destructive in Same Modal Fix

**Problem: Both primary and destructive buttons present**

```html
<!-- BEFORE: Both present -->
<button class="btn btn--primary">Confirm</button>
<button class="btn btn--destructive">Delete</button>

<!-- AFTER: Remove one based on modal purpose -->
<!-- For export modal: -->
<button class="btn btn--cancel">Cancel</button>
<button class="btn btn--primary">Download</button>

<!-- For delete confirmation modal: -->
<button class="btn btn--cancel">Cancel</button>
<button class="btn btn--destructive">Delete</button>
```

### Ghost Button Disabled State Fix

**Problem: Ghost button has disabled styling**

```css
/* BEFORE */
.btn--ghost:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* AFTER: Remove entirely */
/* Ghost buttons should never be disabled */
```

### Cancel Button Styling Fix

**Problem: Wrong colors (dark bg, white text)**

```css
/* BEFORE */
.btn--cancel {
  background: #6C757D;  /* Dark */
  color: white;
}

/* AFTER */
.btn--cancel {
  background: var(--color-action-cancel-default);  /* Light gray */
  color: var(--color-content-primary-text);  /* Dark text */
}
```

## Accessibility Violation Fixes

### Non-Semantic Element Fix

**Problem: div with onclick instead of button**

```html
<!-- BEFORE -->
<div class="trigger" onclick="openModal()">Export map file</div>

<!-- AFTER -->
<button type="button" class="trigger" id="open-modal">Export map file</button>
```

Update JavaScript:
```javascript
// Remove onclick from HTML
// Add event listener in JS
document.getElementById('open-modal').addEventListener('click', openModal);
```

### Missing ARIA Attributes Fix

**Problem: Modal missing dialog role and ARIA**

```html
<!-- BEFORE -->
<div class="overlay">
  <div class="modal">
    <h1 class="modal__title">Export map file</h1>

<!-- AFTER -->
<div class="overlay" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <h2 id="modal-title" class="modal__title">Export map file</h2>
```

### Wrong Heading Level Fix

**Problem: h1 for modal title (should be h2)**

```html
<!-- BEFORE -->
<h1 class="modal__title">Export map file</h1>

<!-- AFTER -->
<h2 id="modal-title" class="modal__title">Export map file</h2>
```

### Missing aria-label Fix

**Problem: Icon-only button without label**

```html
<!-- BEFORE -->
<button class="modal__close">✕</button>

<!-- AFTER -->
<button type="button" class="modal__close" aria-label="Close">✕</button>
```

### Form Label Association Fix

**Problem: Label not associated with input**

```html
<!-- BEFORE -->
<label class="modal__label">Map file</label>
<select class="modal__select" name="mapFile">

<!-- AFTER -->
<label class="modal__label" for="map-file">Map file</label>
<select id="map-file" class="modal__select" name="mapFile">
```

### Missing Focus State Fix

**Problem: Interactive element missing :focus styles**

```css
/* BEFORE: Only hover */
.modal__select:hover {
  border-color: var(--color-action-primary-default);
}

/* AFTER: Add focus */
.modal__select:focus {
  outline: none;
  border-color: var(--color-action-primary-default);
  box-shadow: 0 0 0 2px var(--color-focus-ring);
}
```

### Focus Management Fix

**Problem: Missing focus management in modal**

```javascript
// BEFORE
function openModal() {
  overlay.classList.add('is-open');
}

function closeModal() {
  overlay.classList.remove('is-open');
}

// AFTER
function openModal() {
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  
  // Focus first interactive element
  const firstInput = overlay.querySelector('select, input, button');
  if (firstInput) firstInput.focus();
}

function closeModal() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  
  // Restore focus to trigger
  const trigger = document.getElementById('open-modal');
  if (trigger) trigger.focus();
}
```

### Keyboard Support Fix

**Problem: No Escape key or click-outside handlers**

```javascript
// AFTER: Add keyboard and click-outside support

// Escape key closes modal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
    closeModal();
  }
});

// Click outside closes modal
overlay.addEventListener('click', function(e) {
  if (e.target === overlay) {
    closeModal();
  }
});
```

## Fix Priority Order

Apply fixes in this order to avoid conflicts:

1. **HTML structural changes**
   - Semantic elements (div → button)
   - Heading hierarchy (h1 → h2)
   - ARIA attributes
   - Form associations

2. **Component structure fixes**
   - Remove excess buttons
   - Adjust layouts
   - Fix button variants

3. **CSS token replacements**
   - Colors (most violations)
   - Typography
   - Spacing
   - Border radius

4. **JavaScript enhancements**
   - Event listeners
   - Focus management
   - Keyboard handlers
   - ARIA state updates

5. **Final cleanup**
   - Remove unused styles
   - Verify no duplicates
   - Check linter

## Edge Cases

### Circular Dependencies

**Problem:** Token needs to be defined before use

**Solution:** Add token definition to :root first, then apply fixes

```css
/* Step 1: Add token if missing */
:root {
  --color-overlay-background: rgba(0, 0, 0, 0.4);
}

/* Step 2: Use token */
.overlay {
  background: var(--color-overlay-background);
}
```

### Context-Dependent Fixes

**Problem:** Same value maps to different tokens by context

**Solution:** Check context before applying fix

```javascript
// "#0066CC" could be:
// - action/primary/default (button background)
// - content/link (link text)
// - content/primary/border (focused border)

// Check parent element/class to determine context
```

### Multiple Violations in One Line

**Problem:** Single property has multiple issues

```css
/* Has: wrong color + hard-coded spacing */
padding: 20px 30px; background: #0066CC;
```

**Solution:** Fix in order, verify after each

```css
/* Step 1: Fix spacing */
padding: var(--space-4) var(--space-6); background: #0066CC;

/* Step 2: Fix color */
padding: var(--space-4) var(--space-6); background: var(--color-action-primary-default);
```
