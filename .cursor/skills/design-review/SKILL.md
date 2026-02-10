---
name: design-review
description: Review design files and code implementation against the Compstak design system. Check token compliance, color usage, typography, component rules, spacing, and accessibility. Can automatically fix violations with selective exclusion. Use when reviewing Figma designs, HTML/CSS/JS code, when the user asks to check design system compliance, review a component, validate implementation, or fix violations.
---

# Design Review

Review both design files (Figma) and code implementation (HTML/CSS/JS) against the Compstak design system. Violations are **categorized by type** (colors, typography, spacing, component rules, accessibility) for easy understanding and targeted fixing.

## How It Works

**1. Run Review** → Get categorized violation report  
**2. Choose Workflow** → Quick fix all, or step-by-step by category  
**3. Apply Fixes** → Automatic with progress tracking

**⚡ New to this skill?** See [QUICK-START.md](QUICK-START.md) for 30-second setup

---

## Two Workflows: Quick vs Step-by-Step

Choose your approach based on time, learning goals, and file importance:

<comparison>
| | 🚀 Quick Fix | 🔍 Step-by-Step |
|---|---|---|
| **Command** | `fix all violations` | `fix [category] violations` × 5 |
| **Time** | ~2 minutes | ~15 minutes |
| **Control** | All or nothing | Pause between categories |
| **Learning** | Minimal | High - see each change |
| **Testing** | Test at end | Test after each category |
| **Best For** | Demos, prototypes | Production, learning, teams |
</comparison>

---

### 🚀 Quick Fix Workflow

```
/design-review @file.html       # See violations
fix all violations              # Fix everything at once
```

**Output:**
```
Applying all 72 fixes...
✅ 100% complete in 2 minutes!
```

---

### 🔍 Step-by-Step Workflow

```
/design-review @file.html                # See violations by category

fix color violations                     # Fix 🎨 (28 issues)
# [Test changes]

fix spacing violations                   # Fix 📏 (20 issues)
# [Test changes]

fix typography violations                # Fix ✏️ (11 issues)
# [Test changes]

fix component rule violations            # Fix 🧩 (5 issues)
# [Test changes]

fix accessibility violations             # Fix ♿ (8 issues)
# [Test changes]
```

**Output with Progress Tracking:**
```
After each category fix:

Progress:
  🎨 Colors:          ████████████████████ 100% ✅
  📏 Spacing:         ████████████████████ 100% ✅
  ✏️ Typography:      ░░░░░░░░░░░░░░░░░░░░   0%
  🧩 Component Rules: ░░░░░░░░░░░░░░░░░░░░   0%
  ♿ Accessibility:    ░░░░░░░░░░░░░░░░░░░░   0%

Overall: 67% complete (48/72)
Next: fix typography violations
```

---

### 📋 Review-Only (No Changes)

```
/design-review @file.html          # Full categorized report
review color violations            # Show color issues only
review accessibility violations    # Show a11y issues only
```

Use for:
- Sharing findings with team before fixing
- Understanding scope before committing
- Learning about violation types

---

## Example Output

**See [OUTPUT-EXAMPLE.md](OUTPUT-EXAMPLE.md) for complete example showing:**
- Full categorized report with 72 violations
- Progress tracking through step-by-step workflow
- Quick fix vs step-by-step comparison

**See [WORKFLOW-EXAMPLE.md](WORKFLOW-EXAMPLE.md) for:**
- Detailed walkthrough of both workflows
- Time comparisons
- Use case recommendations

## Quick Start Checklist

Use this checklist for any design or code review:

```
Design System Review:
- [ ] 🎨 Token hierarchy followed (primitives → semantic → component)
- [ ] 🎨 No hard-coded color values (hex, rgb)
- [ ] ✏️ Typography uses semantic tokens only
- [ ] 🧩 Component rules followed (button limits, modal layout, etc.)
- [ ] 📏 Spacing uses token values
- [ ] ♿ Accessibility requirements met
- [ ] 🔗 Cross-component composition documented
```

## Violation Category Icons

When reporting violations, use these category icons for clarity:

| Icon | Category | Examples |
|------|----------|----------|
| 🎨 | **Token Hierarchy & Colors** | Hard-coded hex, rgba, primitive tokens in components |
| ✏️ | **Typography** | Font stack, weights, sizes, heading vs display |
| 📏 | **Spacing** | Hard-coded padding, margins, gaps, border-radius |
| 🧩 | **Component Rules** | Button limits, modal layout, disabled states |
| ♿ | **Accessibility** | ARIA, focus states, semantic HTML, keyboard nav |
| 🔗 | **Cross-Component** | Undocumented composition, direct token usage |

## Read Order

Always read these files in order before starting QA:

1. `design-system.index.mdc` - System overview and source of truth
2. Relevant token files in `tokens/`
3. Relevant rule files in `rules/`
4. Component-specific rules in `rules/components/` if reviewing a specific component

## Token Hierarchy Compliance

### Correct Token Usage

```
✅ Primitives → Semantic → Component
   Raw values  →  Meaning  →  Specific use

Component code → semantic token (e.g., action/primary/default)
Semantic token → primitive token (e.g., blue/500)
```

### Common Violations

**❌ Direct primitive in component code:**
```css
/* WRONG */
color: var(--blue-500);
background: var(--neutral-100);
```

**✅ Use semantic tokens:**
```css
/* CORRECT */
color: var(--action-primary-default);
background: var(--surface-primary);
```

**❌ Hard-coded values:**
```css
/* WRONG */
color: #0066CC;
padding: 16px;
font-size: 14px;
```

**✅ Use token system:**
```css
/* CORRECT */
color: var(--action-primary-default);
padding: var(--spacing-md);
font-size: var(--type-body-text-size);
```

## Color Compliance

### Rules

1. No hard-coded hex, rgb, or hsl values outside `tokens/primitives.colors.json`
2. Components must use semantic color tokens from `tokens/semantics.colors.json`
3. Semantic tokens must reference primitives only
4. Component tokens (when needed) must reference semantic tokens

### How to Check

**In Figma:**
- Select elements and check applied colors
- Verify all colors reference Figma Variables (not raw values)
- Check that variable names match semantic token structure

**In Code:**
- Search for hex patterns: `#[0-9a-fA-F]{3,6}`
- Search for rgb/rgba patterns: `rgb(`, `rgba(`
- Verify all color properties use `var(--semantic-token)`
- Check CSS custom properties match semantic token paths

### Common Issues

- Using `#0066CC` instead of `var(--action-primary-default)`
- Using primitive token `var(--blue-500)` instead of semantic `var(--action-primary-default)`
- Mixing token system with hard-coded values

### Fix

Replace all hard-coded colors and primitive tokens with semantic tokens from `tokens/semantics.colors.json`. Reference the [color rules](../rules/colors.rules.mdc) for usage guidelines.

## Typography Compliance

### Rules

1. Platform font stack: **Gotham → Arial → sans-serif** (always)
2. Use **heading** styles for product UI, not **display** (lighter weight, more readable)
3. Component headers (modal title, dialog, card): Use `type/heading/lg`
4. Font weights: Headers use **500**, body/other text use **400**
5. All typography must use semantic tokens from `tokens/semantics.typography.json`

### How to Check

**In Figma:**
- Check font family: Should be Gotham (or Arial fallback)
- Check text styles reference semantic variables
- Modal/dialog/card titles: Should use "Heading Large" style
- Headers: font-weight 500
- Body text: font-weight 400

**In Code:**
- Verify `font-family: Gotham, Arial, sans-serif;`
- Check all font-size uses token: `var(--type-heading-lg-size)` etc.
- Verify heading styles (h1-h6, section titles): font-weight 500
- Verify body text: font-weight 400
- No hard-coded font sizes or weights

### Common Issues

- Using "Display" styles in app UI (too heavy/bold)
- Hard-coded font sizes: `font-size: 16px;`
- Wrong font weights: headers with 600 instead of 500
- Missing font stack fallbacks

### Fix

Replace with semantic typography tokens. For component headers, use `type/heading/lg`. Reference [typography rules](../rules/typography.rules.mdc) for details.

## Component Rules

### Button Component

**Limits and Rules** (from `rules/components/button.rules.mdc`):

- **Primary button limit:** Max **3** primary buttons per page
  - **Exception:** Export/Download buttons don't count toward the limit
- **Primary + Destructive conflict:** Cannot have primary and destructive in the same interaction (same modal, form, or action group)
- **Destructive always paired with Cancel:** Every destructive button must have a cancel option
- **Ghost buttons never disabled:** Use different variant if action unavailable
- **Disabled buttons:** Must have hover tooltip explaining (1) why disabled, (2) how to enable

**How to Check:**

Count primary buttons on the page (excluding Export/Download). Look for:
- Modal footer: Check not both primary and destructive
- Disabled buttons: Verify tooltip present explaining state
- Ghost buttons: Verify none are disabled
- Destructive actions: Verify cancel button exists

**Responsive:**

When width shrinks, convert to icon-only in order: **tertiary** → **secondary** → **primary** (keep primary text visible longest).

### Modal Component

**Rules** (from `rules/components/modal.rules.mdc`):

- **Typography:** Modal title uses `type/heading/lg`
- **Button count:** 1, 2, or 3 buttons maximum
- **Button layout:**
  - **1 button:** Right side (e.g., OK, Primary)
  - **2 buttons (most common):** Both right: Cancel | Primary, or Cancel | Destructive
  - **3 buttons:** Left: one Secondary outline (alone). Right: Cancel | Primary or Destructive

**How to Check:**

| Button Count | Expected Layout | Common Violations |
|--------------|----------------|-------------------|
| 1 | Single button on right | Placed on left |
| 2 | Both on right (Cancel \| Primary) | Split across left/right |
| 3 | Left: Secondary outline. Right: Cancel \| Primary | More than 3 buttons, secondary grouped with right buttons |

**Check:**
- Count buttons (max 3)
- Verify layout matches table above
- Verify not both primary and destructive in same modal
- Verify modal title uses `type/heading/lg`

### Other Components

For component-specific rules, read:
- `rules/components/button.rules.mdc`
- `rules/components/input.rules.mdc`
- `rules/components/modal.rules.mdc`
- `rules/components/<name>.rules.mdc` (add as components are created)

## Spacing Compliance

### Rules

1. All spacing must reference tokens from `tokens/primitives.spacing.json`
2. Use semantic layout tokens from `tokens/semantics.layout.json` when available
3. No hard-coded px, rem, em values outside token system

### How to Check

**In Figma:**
- Check spacing values (padding, margins, gaps)
- Verify spacing references Auto Layout with token values
- Common tokens: 4px, 8px, 12px, 16px, 24px, 32px, etc.

**In Code:**
- Search for spacing patterns: `padding:`, `margin:`, `gap:`
- Verify all use `var(--spacing-*)` tokens
- Check no hard-coded values like `padding: 16px;`

### Fix

Replace hard-coded spacing with semantic or primitive spacing tokens. Reference `tokens/semantics.layout.json` for layout-specific spacing.

## Accessibility Checks

### Color Contrast

- **Text on backgrounds:** Minimum 4.5:1 contrast ratio for normal text, 3:1 for large text
- **Interactive elements:** Sufficient contrast for hover/focus states
- Check both light and dark mode (if applicable)

### Interactive States

- **Focus indicators:** All interactive elements must have visible focus state
- **Hover states:** Clear hover feedback for buttons, links, interactive elements
- **Disabled states:** Visually distinct, with tooltip explaining why (see Button rules)

### Keyboard Navigation

- **Tab order:** Logical, follows visual flow
- **Keyboard access:** All interactive elements reachable via keyboard
- **Focus trapping:** Modals trap focus appropriately

### Semantic HTML

**In Code:**
- Use semantic elements: `<button>`, `<nav>`, `<header>`, `<main>`, etc.
- Not `<div onclick="...">` for buttons
- Proper heading hierarchy: `<h1>` → `<h2>` → `<h3>` (no skipping)

### ARIA Labels

- **Interactive elements:** Descriptive labels/aria-label
- **Icon-only buttons:** Must have aria-label
- **Form inputs:** Proper label association

## Cross-Component Composition

### Rules

From `rules/components.rules.mdc`:

- Components may reference other components' tokens only when there's a **composition** relationship (e.g., form contains button)
- Prefer semantic tokens for shared behavior
- Document composition in parent component's rule file

### How to Check

1. Identify component relationships (what contains what)
2. Verify composition is documented in parent component rule file
3. Check that parent uses semantic tokens, not direct child component tokens (unless documented)

## Common Violations Reference

### Quick Fixes

| Violation | Fix |
|-----------|-----|
| Hard-coded hex color | Replace with semantic color token from `tokens/semantics.colors.json` |
| Direct primitive token in component | Replace with semantic token |
| Hard-coded font size | Use semantic typography token from `tokens/semantics.typography.json` |
| Hard-coded spacing | Use spacing token from `tokens/primitives.spacing.json` |
| Using Display styles in app UI | Change to Heading styles (`type/heading/*`) |
| Font-weight 600 on headers | Change to 500 |
| Font-weight 500 on body text | Change to 400 |
| Missing font fallback | Add full stack: `Gotham, Arial, sans-serif` |
| 4+ primary buttons on page | Reduce to max 3 (Export/Download doesn't count) |
| Primary + Destructive in same modal | Use one or the other, not both |
| Disabled button without tooltip | Add tooltip explaining why disabled + how to enable |
| Disabled ghost button | Change variant or hide button |
| Modal with 4+ buttons | Reduce to max 3 |
| Modal title not Heading Large | Change to `type/heading/lg` |

## Review Workflow

### Step 1: Identify Scope

- [ ] What is being reviewed? (Figma design, HTML/CSS, React component, full page)
- [ ] Which components are included?
- [ ] Are there specific concerns to focus on?

### Step 2: Load Context

Read in order:
1. `design-system.index.mdc`
2. Relevant token files
3. Relevant rule files
4. Component-specific rules

### Step 3: Systematic Review

Go through Quick Start Checklist section by section and **categorize each violation**:

## Violation Categories

### 🎨 **Token Hierarchy & Colors**
- Hard-coded hex, rgb, rgba, hsl values
- Using primitive tokens directly in components
- Missing color token definitions
- Wrong semantic color mapping

### ✏️ **Typography**
- Missing/incomplete font stack
- Hard-coded font sizes, weights, line-heights
- Wrong font weights (should be 500 for headers, 400 for body)
- Using Display styles in app UI (should use Heading)
- Modal/component titles not using correct style

### 📏 **Spacing**
- Hard-coded px, rem, em values
- Missing spacing token usage
- Hard-coded border-radius
- Inconsistent spacing patterns

### 🧩 **Component Rules**
- Too many buttons (modal >3, page >3 primary)
- Primary + Destructive in same interaction
- Wrong button layouts (modal footer)
- Ghost buttons with disabled state
- Missing button tooltips on disabled state
- Destructive without Cancel pairing

### ♿ **Accessibility**
- Non-semantic HTML (`<div onclick>` vs `<button>`)
- Missing ARIA attributes (role, aria-label, aria-labelledby, etc.)
- Missing focus states (`:focus` styles)
- Form labels not associated (`for` attribute)
- Wrong heading hierarchy
- Missing keyboard support (Escape, Tab, Enter)
- Incomplete focus management (JavaScript)
- Color contrast issues

### 🔗 **Cross-Component Composition**
- Undocumented component relationships
- Direct child token usage without documentation
- Missing composition rules

---

**Review Process:**

1. **Token hierarchy:** Check no primitives in components, no hard-coded values → Category: 🎨
2. **Colors:** Search for violations (hex, rgb, primitive tokens) → Category: 🎨
3. **Typography:** Check font stack, weights, semantic token usage, heading vs display → Category: ✏️
4. **Component rules:** Count buttons, check layouts, verify states → Category: 🧩
5. **Spacing:** Verify token usage → Category: 📏
6. **Accessibility:** Check contrast, focus states, keyboard nav, semantic HTML → Category: ♿
7. **Composition:** Verify documented relationships → Category: 🔗

### Step 4: Document Findings

For each violation found:
- **Category** (Token Hierarchy, Colors, Typography, Spacing, Component Rules, Accessibility, Composition)
- **Location** (file:line or Figma layer path)
- **Issue description**
- **Severity** (🔴 Must fix | 🟡 Should fix | 🟢 Nice to have)
- **Fix recommendation** with correct token/pattern

### Step 5: Provide Summary

Organize violations by category for clarity:

```markdown
## Design Review Summary

**Scope:** [what was reviewed]

**Results:**
- ✅ [# passed checks]
- 🔴 [# critical issues]
- 🟡 [# warnings]
- 🟢 [# suggestions]

---

## Violations by Category

### 🎨 Token Hierarchy & Colors ([#] issues)

🔴 **#1. Hard-coded hex color: Button background**
- **Location:** Line 25
- **Issue:** `background: #0066CC;`
- **Fix:** `background: var(--color-action-primary-default);`

🔴 **#2. Hard-coded rgba: Overlay**
- **Location:** Line 38
- **Issue:** `background: rgba(0, 0, 0, 0.6);`
- **Fix:** Define as token and use `var(--color-overlay-background);`

### ✏️ Typography ([#] issues)

🔴 **#3. Wrong font stack**
- **Location:** Line 13
- **Issue:** `font-family: Arial;` (missing Gotham, fallback)
- **Fix:** `font-family: Gotham, Arial, sans-serif;`

🔴 **#4. Modal title using Display style**
- **Location:** Lines 67-68
- **Issue:** 32px/700 weight (Display Large)
- **Fix:** Use Heading Large: 24px/500 weight

### 📏 Spacing ([#] issues)

🔴 **#5. Hard-coded padding**
- **Location:** Line 21
- **Issue:** `padding: 12px 24px;`
- **Fix:** `padding: var(--space-2) var(--space-4);`

### 🧩 Component Rules ([#] issues)

🔴 **#6. Modal has 4 buttons (exceeds max 3)**
- **Location:** Lines 218-224
- **Issue:** Save, Cancel, Download, Delete buttons
- **Fix:** Remove "Save for later" and "Delete" → keep Cancel + Download

🔴 **#7. Primary + Destructive in same modal**
- **Location:** Lines 221, 223
- **Issue:** Both Download (primary) and Delete (destructive)
- **Fix:** Remove destructive button for export modal

### ♿ Accessibility ([#] issues)

🔴 **#8. Non-semantic trigger element**
- **Location:** Line 187
- **Issue:** `<div onclick="openModal()">`
- **Fix:** `<button type="button">`

🔴 **#9. Missing ARIA attributes**
- **Location:** Lines 190-192
- **Issue:** No `role="dialog"`, `aria-modal`, `aria-labelledby`
- **Fix:** Add all required ARIA attributes

🔴 **#10. Missing focus state**
- **Location:** Lines 114-125
- **Issue:** Select element has no `:focus` styles
- **Fix:** Add focus styles with border-color and box-shadow

### 🔗 Cross-Component Composition ([#] issues)

🟡 **#11. Undocumented composition**
- **Location:** Modal component
- **Issue:** Modal uses Button but not documented
- **Fix:** Document in `rules/components/modal.rules.mdc`

---

## Summary by Severity

### 🔴 Critical Issues ([#] total)
Quick list of must-fix issues for easy tracking

### 🟡 Warnings ([#] total)
Should-fix issues that improve quality

### 🟢 Suggestions ([#] total)
Nice-to-have improvements
```

## Review Examples

### Example 1: Code Review

**Input:** HTML file with modal component

**Check:**
1. Modal title typography: Should use `var(--type-heading-lg-*)`
2. Button count: Max 3
3. Button layout: Verify follows modal rules
4. Colors: No hex values, semantic tokens only
5. Spacing: Token-based padding/margins

### Example 2: Figma Design Review

**Input:** Figma frame with button variations

**Check:**
1. Colors reference Figma Variables (semantic tokens)
2. Typography uses text styles (semantic)
3. Spacing uses Auto Layout with token values
4. Count primary buttons (max 3 per page)
5. Check disabled states have proper indicators

## Additional Resources

- **[Categories Reference](CATEGORIES.md)** - Complete guide to violation categories
- [Fix Patterns](fix-patterns.md) - Detailed patterns for fixing violations
- [Examples](examples.md) - Review examples with findings and fixes
- [Token Reference](token-reference.md) - Quick token lookup
- [Fix Guide](FIX-GUIDE.md) - Auto-fix command reference
- [Design System Index](../design-system.index.mdc) - Source of truth
- [Color Rules](../rules/colors.rules.mdc) - Color token usage
- [Typography Rules](../rules/typography.rules.mdc) - Typography guidelines
- [Component Rules Hub](../rules/components.rules.mdc) - Cross-component policy
- [Button Rules](../rules/components/button.rules.mdc) - Button-specific rules
- [Modal Rules](../rules/components/modal.rules.mdc) - Modal-specific rules

## Automatic Fix Workflow

After completing a design review, you can automatically apply fixes for violations. This workflow supports selective exclusion of specific issues.

### Fix Command Patterns

User can request fixes in several ways:

#### **Quick Fix (All-at-Once)**
```
fix all violations
apply all fixes
fix everything
```

#### **Step-by-Step (By Category)**
```
fix color violations           # 🎨 Fix token & color issues
fix typography violations      # ✏️ Fix font stack, weights, sizes
fix spacing violations         # 📏 Fix padding, margins, gaps
fix component rule violations  # 🧩 Fix button limits, layouts
fix accessibility violations   # ♿ Fix ARIA, focus, semantic HTML
```

**Category order recommended:**
1. Colors (usually most violations, safest to fix)
2. Spacing (mechanical replacements)
3. Typography (mechanical replacements)
4. Component Rules (may remove elements, review carefully)
5. Accessibility (changes HTML structure, review carefully)

#### **Review Without Fixing**
```
review color violations        # Just show, don't fix
review typography violations   # Show violations only
review [category] violations   # Preview before fixing
```

#### **Selective Exclusions**
```
fix all except #3, #7          # Skip specific issues
fix colors except #5           # Fix category, skip some
fix all except accessibility   # Fix everything but one category
```

### Review vs Fix Commands

**Review commands** show violations without making changes:
```
review color violations          # Show color issues, no changes
review typography violations     # Show typography issues, no changes
review [category] violations     # Show any category
```

**Fix commands** apply changes:
```
fix color violations            # Apply color fixes
fix typography violations       # Apply typography fixes
fix [category] violations       # Apply any category
```

**Use review first** when you want to:
- Understand what will change before committing
- Share findings with team before fixing
- Prioritize which categories to fix first
- Learn about specific violation types

### Fix Application Process

When user requests fixes:

**Step 1: Confirm scope**
- Review which issues will be fixed
- List any exclusions explicitly
- Show issue numbers and brief descriptions
- Show category breakdown if fixing by category
- Ask for confirmation if scope is unclear

**Step 2: Apply fixes systematically**

Order of operations:
1. **Structural changes** (if any)
   - HTML semantic elements (div → button)
   - ARIA attributes
   - Heading hierarchy
   - Form label associations

2. **CSS token replacements**
   - Color values → semantic tokens
   - Spacing values → spacing tokens
   - Typography values → typography tokens
   - Border radius → radius tokens

3. **Component rule fixes**
   - Remove excess buttons
   - Adjust button layouts
   - Fix modal structure
   - Correct button variants

4. **JavaScript enhancements**
   - Focus management
   - Keyboard handlers
   - ARIA state updates
   - Accessibility improvements

**Step 3: Verify fixes**
- Check no new linter errors introduced
- Verify all targeted issues resolved
- Confirm excluded issues remain unchanged

### Fix Exclusion System

When user specifies exclusions (e.g., "fix all except #16"):

1. **Track issue numbers** from QA report
2. **Preserve original code** for excluded issues
3. **Document why excluded** (if user provides reason)
4. **Note in commit/summary** which issues remain

### Example Fix Session

**User:** "Fix all violations except #3, #7, and #12"

**Agent response:**

```markdown
Applying fixes to demo-export-modal-bad.html

**Fixing (51 issues):**
✓ #1-2: Color violations
✓ #4-6: Color violations  
✓ #8-11: Typography violations
✓ #13-51: Remaining violations

**Excluded (not changing):**
• #3: Trigger button background color
• #7: Modal shadow
• #12: Modal title color

Applying fixes...
```

Then systematically apply each fix using StrReplace tool.

### Fix Templates by Category

#### Color Fixes

**Pattern:** Find hard-coded color → Replace with semantic token

```javascript
// Find pattern
"color: #0066CC"
"background: white"
"border-color: #CCCCCC"

// Replace with
"color: var(--color-action-primary-default)"
"background: var(--color-surface-canvas)"
"border-color: var(--color-content-primary-border)"
```

#### Typography Fixes

**Pattern:** Find hard-coded typography → Replace with token + correct values

```javascript
// Find pattern
"font-family: Arial"
"font-size: 16px"
"font-weight: 600"  // for body text
"font-weight: 700"  // for headers

// Replace with
"font-family: Gotham, Arial, sans-serif"
"font-size: var(--font-body-size)"
"font-weight: 400"  // body text
"font-weight: 500"  // headers/buttons
```

#### Spacing Fixes

**Pattern:** Find hard-coded spacing → Replace with spacing token

```javascript
// Find pattern
"padding: 20px"
"margin-bottom: 15px"
"gap: 10px"
"border-radius: 4px"

// Replace with
"padding: var(--space-4)"
"margin-bottom: var(--space-2)"
"gap: var(--space-2)"
"border-radius: var(--radius-sm)"
```

#### Structural Fixes (HTML)

**Pattern:** Fix semantic HTML and ARIA

```javascript
// Find pattern
"<div onclick='...'>"
"<h1 class='modal__title'>"
"<label>Label text</label>"

// Replace with
"<button type='button'>"
"<h2 id='modal-title' class='modal__title'>"
"<label for='input-id'>Label text</label>"
```

### Important Fix Guidelines

1. **Always preserve user exclusions** - Never modify issues user wants to keep
2. **One fix at a time** - Use separate StrReplace calls for each logical change
3. **Test after major fixes** - Check for linter errors after structural changes
4. **Document what changed** - Summarize applied fixes at the end
5. **Handle edge cases** - Some fixes may depend on others (e.g., need token defined before using it)

### Fix Summary Template

After applying fixes, provide summary:

```markdown
## Fix Summary

**File:** [filename]

**Applied fixes:** [X] issues resolved
**Excluded:** [Y] issues kept as-is
**Remaining:** [Z] issues (if any couldn't be auto-fixed)

### Changes made:
- Replaced [N] hard-coded colors with semantic tokens
- Fixed [N] typography violations (font stack, weights, sizes)
- Replaced [N] hard-coded spacing values with tokens
- Fixed [N] component rule violations
- Added [N] accessibility improvements

### Excluded (as requested):
- #3: Trigger button background color
- #7: Modal shadow
- #12: Modal title color

### Manual fixes needed (if any):
- Issue #X: [Description and why it can't be auto-fixed]
```

### When NOT to Auto-Fix

Some violations require human judgment:

1. **Design decisions** - Color choices that may be intentional
2. **Breaking changes** - Structural changes that might break functionality
3. **Complex refactors** - Multiple interdependent changes
4. **Unclear intent** - When the correct fix is ambiguous

For these cases, provide guidance but ask user to confirm before applying.

## When to Use This Skill

Automatically apply when:
- User asks to "review design", "review component", "check compliance"
- User mentions Figma review or code review in design system context
- User asks "does this follow the design system?"
- User requests validation of implementation
- User requests "fix violations" or "apply fixes"
- Before committing changes to design system components
- During PR review for UI changes
