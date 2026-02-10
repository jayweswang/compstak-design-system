# Violation Categories Reference

Quick reference for categorizing design system violations during reviews.

## Category System

All violations are categorized into 6 main types:

| Icon | Category | Focus Area |
|------|----------|-----------|
| 🎨 | **Token Hierarchy & Colors** | Color values, token usage |
| ✏️ | **Typography** | Fonts, sizes, weights, styles |
| 📏 | **Spacing** | Padding, margins, gaps, radius |
| 🧩 | **Component Rules** | Component-specific violations |
| ♿ | **Accessibility** | ARIA, focus, keyboard, semantic HTML |
| 🔗 | **Cross-Component** | Component relationships |

---

## 🎨 Token Hierarchy & Colors

**What to check:**
- Hard-coded color values (hex, rgb, rgba, hsl)
- Direct use of primitive tokens in components
- Missing color token definitions
- Wrong semantic color mappings

**Common violations:**
- `color: #0066CC;` → Should use `var(--color-action-primary-default)`
- `background: white;` → Should use `var(--color-surface-canvas)`
- `border-color: var(--blue-500);` → Should use semantic, not primitive
- `rgba(0, 0, 0, 0.4)` not defined as token

**Fix pattern:**
```css
/* BEFORE */
.button {
  background: #0066CC;
  color: white;
}

/* AFTER */
.button {
  background: var(--color-action-primary-default);
  color: var(--color-content-on-dark);
}
```

---

## ✏️ Typography

**What to check:**
- Font family stack completeness
- Hard-coded font sizes, weights, line-heights
- Correct font weights (500 for headers, 400 for body)
- Heading vs Display style usage
- Modal/component title styles

**Common violations:**
- `font-family: Arial;` → Missing Gotham and fallback
- `font-family: Gotham;` → Missing Arial fallback
- `font-size: 16px;` → Should use token
- `font-weight: 600;` on buttons → Should be 500
- `font-weight: 500;` on body → Should be 400
- Modal title using Display (32px/700) → Should use Heading (24px/500)

**Fix pattern:**
```css
/* BEFORE */
.modal-title {
  font-family: Gotham;
  font-size: 32px;
  font-weight: 700;
}

/* AFTER */
.modal-title {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--font-heading-lg-size);
  font-weight: var(--font-heading-lg-weight);
}
```

---

## 📏 Spacing

**What to check:**
- Hard-coded spacing values (px, rem, em)
- Missing spacing token usage
- Hard-coded border-radius values
- Inconsistent spacing patterns

**Common violations:**
- `padding: 20px;` → Should use `var(--space-4)`
- `margin-bottom: 15px;` → Should use token
- `gap: 10px;` → Should use `var(--space-2)`
- `border-radius: 4px;` → Should use `var(--radius-xs)`

**Fix pattern:**
```css
/* BEFORE */
.card {
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
}

/* AFTER */
.card {
  padding: var(--space-4);
  margin-bottom: var(--space-2);
  border-radius: var(--radius-sm);
}
```

---

## 🧩 Component Rules

**What to check:**
- Button count limits (modal max 3, page max 3 primary)
- Button layouts (modal footer alignment)
- Primary + Destructive conflicts
- Ghost button states
- Disabled button tooltips
- Destructive pairing with Cancel

**Common violations:**
- Modal with 4+ buttons
- Primary and Destructive in same modal
- Modal buttons using `space-between` instead of `flex-end`
- Ghost button with disabled state
- Disabled button without tooltip
- Destructive button without Cancel

**Fix pattern:**
```html
<!-- BEFORE: 4 buttons, primary+destructive conflict -->
<div class="modal-footer" style="justify-content: space-between;">
  <button class="btn-save">Save</button>
  <button class="btn-cancel">Cancel</button>
  <button class="btn-primary">Download</button>
  <button class="btn-destructive">Delete</button>
</div>

<!-- AFTER: 2 buttons, correct layout -->
<div class="modal-footer" style="justify-content: flex-end;">
  <button class="btn-cancel">Cancel</button>
  <button class="btn-primary">Download</button>
</div>
```

---

## ♿ Accessibility

**What to check:**
- Semantic HTML elements
- ARIA attributes (role, aria-label, aria-labelledby, aria-modal, aria-hidden)
- Focus states (`:focus` styles)
- Form label associations (`for` attribute, `id`)
- Heading hierarchy (h1 → h2 → h3)
- Keyboard support (Escape, Tab, Enter)
- Focus management (JavaScript)
- Color contrast (WCAG AA: 4.5:1)

**Common violations:**
- `<div onclick>` instead of `<button>`
- Missing `role="dialog"` on modal
- Missing `aria-label` on icon-only buttons
- Label without `for` attribute
- Select without `id`
- Missing `:focus` styles
- Modal title as `<h1>` instead of `<h2>`
- No Escape key handler
- Focus not managed on open/close

**Fix pattern:**
```html
<!-- BEFORE: Non-semantic, missing ARIA -->
<div onclick="action()">Click me</div>
<div class="modal">
  <h1>Title</h1>
  <label>Name</label>
  <input type="text">
</div>

<!-- AFTER: Semantic, proper ARIA -->
<button type="button" onclick="action()">Click me</button>
<div class="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <h2 id="modal-title">Title</h2>
  <label for="name-input">Name</label>
  <input type="text" id="name-input">
</div>
```

```css
/* Add focus states */
.button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-focus-ring);
}
```

---

## 🔗 Cross-Component Composition

**What to check:**
- Component relationships documented
- Direct child token usage justified
- Composition rules in parent component file

**Common violations:**
- Modal uses Button but not documented in modal.rules.mdc
- Form references Input tokens directly without composition note
- Parent component using child tokens without documentation

**Fix pattern:**
```markdown
<!-- In rules/components/modal.rules.mdc -->

## Composition

Modal composes the following components:
- Button (for footer actions)
- uses Button tokens for Cancel and Primary/Destructive actions

Modal uses semantic tokens for shared behavior; 
uses Button component tokens only for button-specific styling.
```

---

## Categorization Guidelines

### How to Assign Categories

**Multiple violations in one line:**
```css
/* Line has BOTH color and spacing violations */
padding: 20px; background: #0066CC;
```
→ Create **two separate violations:**
- 🎨 #1: Hard-coded color
- 📏 #2: Hard-coded spacing

**Overlapping categories:**
```css
/* Modal title has typography AND component rule violations */
font-size: 32px;  /* Should be 24px for modal title */
```
→ Categorize by **primary issue:**
- ✏️ Typography (wrong size/style)
- Note in description: "Modal titles use Heading Large per component rules"

**Accessibility + other category:**
```html
<!-- Missing ARIA AND wrong element -->
<div onclick="action()">Click</div>
```
→ Report as ♿ Accessibility:
- "Non-semantic element (should be button) + missing ARIA"

### Priority Order

When a violation could fit multiple categories, use this priority:

1. **♿ Accessibility** - Always highest priority (user impact)
2. **🎨 Token Hierarchy** - Foundation of design system
3. **🧩 Component Rules** - Specific component violations
4. **✏️ Typography** - Visual hierarchy and readability
5. **📏 Spacing** - Layout consistency
6. **🔗 Cross-Component** - Documentation/architectural

---

## Report Format Template

```markdown
## Design Review Summary

**Scope:** [filename]

**Results:**
- ✅ [#] passed checks
- 🔴 [#] critical issues
- 🟡 [#] warnings
- 🟢 [#] suggestions

---

## Violations by Category

### 🎨 Token Hierarchy & Colors ([#] issues)

🔴 **#1. [Brief description]**
- **Location:** Line [#]
- **Issue:** [Code example]
- **Fix:** [Corrected code]

### ✏️ Typography ([#] issues)

🔴 **#2. [Brief description]**
- **Location:** Line [#]
- **Issue:** [Code example]
- **Fix:** [Corrected code]

### 📏 Spacing ([#] issues)

### 🧩 Component Rules ([#] issues)

### ♿ Accessibility ([#] issues)

### 🔗 Cross-Component Composition ([#] issues)

---

## Summary by Severity

🔴 **Critical Issues ([#] total):** [list numbers]
🟡 **Warnings ([#] total):** [list numbers]
🟢 **Suggestions ([#] total):** [list numbers]
```

---

## Quick Reference Chart

| If you see... | Category | Typical Fix |
|--------------|----------|-------------|
| `#0066CC`, `rgb()`, `rgba()` | 🎨 | Use semantic token |
| `font-family: Arial` | ✏️ | Add full stack |
| `font-weight: 600` (button) | ✏️ | Change to 500 |
| `font-size: 16px` | ✏️ | Use token |
| `padding: 20px` | 📏 | Use spacing token |
| `border-radius: 4px` | 📏 | Use radius token |
| 4+ buttons in modal | 🧩 | Remove to max 3 |
| Primary + Destructive together | 🧩 | Remove one |
| `<div onclick>` | ♿ | Use `<button>` |
| Missing `aria-label` | ♿ | Add attribute |
| No `:focus` styles | ♿ | Add focus state |
| Label without `for` | ♿ | Add association |
| Undocumented composition | 🔗 | Add to rules file |
