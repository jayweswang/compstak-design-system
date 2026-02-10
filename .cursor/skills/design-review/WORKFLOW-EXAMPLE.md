# Design Review Workflow Examples

This document shows two approaches: **Step-by-Step (Meticulous)** and **All-at-Once (Quick)**.

---

## Example: Reviewing `demo-export-modal-bad.html`

### Initial Review Command

```
/design-review @demo-export-modal-bad.html
```

---

## Review Output (Categorized)

```markdown
## Design Review Summary

**Scope:** demo-export-modal-bad.html

**Results:**
- ✅ 0 passed checks (0% compliant)
- 🔴 53 critical issues
- 🟡 8 warnings
- 🟢 0 suggestions

---

## Violations by Category

### 🎨 Token Hierarchy & Colors (28 issues)

🔴 **#1. Hard-coded hex: Body background**
- **Location:** Line 15
- **Issue:** `background: #F5F5F5;`
- **Fix:** `background: var(--color-surface-raised);`

🔴 **#2. Generic color name: Trigger button text**
- **Location:** Line 24
- **Issue:** `color: white;`
- **Fix:** `color: var(--color-content-on-dark);`

🔴 **#3. Hard-coded hex: Trigger button background**
- **Location:** Line 25
- **Issue:** `background: #0066CC;`
- **Fix:** `background: var(--color-action-primary-default);`

🔴 **#4. Hard-coded hex: Trigger button hover**
- **Location:** Line 31
- **Issue:** `background: #0052A3;`
- **Fix:** `background: var(--color-action-primary-hovered);`

🔴 **#5. Hard-coded rgba: Overlay background**
- **Location:** Line 38
- **Issue:** `background: rgba(0, 0, 0, 0.6);`
- **Fix:** Define token and use `var(--color-overlay-background);`

[... #6-#28: Additional color violations ...]

---

### ✏️ Typography (11 issues)

🔴 **#29. Incomplete font stack: Body**
- **Location:** Line 13
- **Issue:** `font-family: Arial;`
- **Fix:** `font-family: Gotham, Arial, sans-serif;`

🔴 **#30. Wrong font: Trigger button**
- **Location:** Line 29
- **Issue:** `font-family: Helvetica;`
- **Fix:** `font-family: Gotham, Arial, sans-serif;`

🔴 **#31. Modal title using Display instead of Heading**
- **Location:** Lines 67-68
- **Issue:** 32px font, 700 weight (Display Large)
- **Fix:** 24px font, 500 weight (Heading Large)

🔴 **#32. Wrong font weight: Body text**
- **Location:** Line 89
- **Issue:** `font-weight: 500;` (should be 400 for body)
- **Fix:** `font-weight: 400;`

[... #33-#39: Additional typography violations ...]

---

### 📏 Spacing (20 issues)

🔴 **#40. Hard-coded padding: Body**
- **Location:** Line 16
- **Issue:** `padding: 20px;`
- **Fix:** `padding: var(--space-4);`

🔴 **#41. Hard-coded padding: Trigger button**
- **Location:** Line 21
- **Issue:** `padding: 12px 24px;`
- **Fix:** `padding: var(--space-2) var(--space-4);`

[... #42-#59: Additional spacing violations ...]

---

### 🧩 Component Rules (5 issues)

🔴 **#60. Modal has 4 buttons (exceeds max 3)**
- **Location:** Lines 218-224
- **Issue:** Save, Cancel, Download, Delete
- **Fix:** Remove "Save for later" and "Delete" → keep Cancel + Download

🔴 **#61. Primary + Destructive in same modal**
- **Location:** Lines 221, 223
- **Issue:** Both Download (primary) and Delete (destructive) present
- **Fix:** Remove destructive button

🔴 **#62. Modal button layout wrong**
- **Location:** Line 131
- **Issue:** `justify-content: space-between;`
- **Fix:** `justify-content: flex-end;`

🔴 **#63. Cancel button wrong styling**
- **Location:** Lines 155-156
- **Issue:** Dark background (#6C757D) with white text
- **Fix:** Light background with dark text

🔴 **#64. Ghost button with disabled state**
- **Location:** Lines 179-182
- **Issue:** Ghost buttons cannot be disabled
- **Fix:** Remove `:disabled` styles for ghost variant

---

### ♿ Accessibility (8 issues)

🔴 **#65. Non-semantic trigger element**
- **Location:** Line 187
- **Issue:** `<div onclick="openModal()">` instead of button
- **Fix:** `<button type="button">`

🔴 **#66. Missing aria-hidden on overlay**
- **Location:** Line 190
- **Issue:** No initial `aria-hidden="true"`
- **Fix:** Add `aria-hidden="true"`

🔴 **#67. Missing modal ARIA attributes**
- **Location:** Line 192
- **Issue:** No `role="dialog"`, `aria-modal`, `aria-labelledby`
- **Fix:** Add all required ARIA attributes

🔴 **#68. Wrong heading level**
- **Location:** Line 196
- **Issue:** `<h1>` for modal title (should be `<h2>`)
- **Fix:** Change to `<h2 id="modal-title">`

🔴 **#69. Missing aria-label on close button**
- **Location:** Line 198
- **Issue:** Icon-only button without label
- **Fix:** Add `aria-label="Close"`

🔴 **#70. Form label not associated with input**
- **Location:** Lines 205-206
- **Issue:** Label missing `for`, select missing `id`
- **Fix:** Add `for="map-file"` and `id="map-file"`

🔴 **#71. Missing focus state on select**
- **Location:** Lines 114-125
- **Issue:** No `:focus` styles defined
- **Fix:** Add focus border and box-shadow

🔴 **#72. Incomplete focus management in JavaScript**
- **Location:** Lines 237-248
- **Issue:** Not managing aria-hidden, body scroll, or focus
- **Fix:** Add complete focus management

---

### 🔗 Cross-Component Composition (0 issues)

✅ No composition issues found

---

## Summary by Severity

🔴 **Critical Issues (72 total):** All violations are critical
🟡 **Warnings (0 total):** None
🟢 **Suggestions (0 total):** None

---

## Fix Options

Choose your approach based on time and preference:

### Option 1: Quick Fix (All at Once)
```
fix all violations
```
**Time:** ~2 minutes  
**Best for:** Demos, prototypes, quick compliance

### Option 2: Step-by-Step Fix (By Category)
Review and fix one category at a time for better understanding:

1. `fix color violations` (28 issues)
2. `fix typography violations` (11 issues)
3. `fix spacing violations` (20 issues)
4. `fix component rule violations` (5 issues)
5. `fix accessibility violations` (8 issues)

**Time:** ~15 minutes  
**Best for:** Learning, careful review, team collaboration
```

---

## Workflow 1: Quick Fix (All-at-Once)

**Use case:** You trust the automated fixes and want to get compliant fast.

### Step 1: Run Review
```
/design-review @demo-export-modal-bad.html
```

**Output:** 72 violations across 5 categories

### Step 2: Apply All Fixes
```
fix all violations
```

**Agent applies fixes in optimal order:**

```
Applying all fixes to demo-export-modal-bad.html

✓ Phase 1: Adding token system (foundation)
  - Added 34 token definitions to :root
  
✓ Phase 2: Token replacements (59 fixes)
  - 28 color replacements
  - 20 spacing replacements  
  - 11 typography replacements

✓ Phase 3: Structural changes (8 fixes)
  - Fixed semantic HTML (div → button)
  - Added ARIA attributes
  - Fixed heading hierarchy
  - Added form associations

✓ Phase 4: Component rules (5 fixes)
  - Removed 2 excess buttons
  - Fixed button layout
  - Fixed button styling

✓ Phase 5: JavaScript enhancements
  - Added focus management
  - Added keyboard handlers
  - Added aria-hidden updates

---

✅ All 72 violations fixed!
✅ Linter check: 0 errors
✅ File is now 100% design system compliant

Time: 2 minutes
```

### Result
- **Before:** 0% compliant, 72 violations
- **After:** 100% compliant, production-ready
- **Time saved:** 6-8 hours of manual work

---

## Workflow 2: Step-by-Step Fix (Meticulous)

**Use case:** You want to understand each change, learn the design system, or carefully review before applying.

### Step 1: Run Review
```
/design-review @demo-export-modal-bad.html
```

**Output:** 72 violations categorized into 5 groups

### Step 2: Review Category Summaries

Look at the category breakdown:
- 🎨 Colors: 28 issues (largest category)
- 📏 Spacing: 20 issues  
- ✏️ Typography: 11 issues
- ♿ Accessibility: 8 issues
- 🧩 Component Rules: 5 issues

**Decision:** Start with colors (most violations)

---

### Step 3: Fix Colors (Category 1 of 5)

```
fix color violations
```

**Agent response:**

```
Fixing 🎨 Color violations (28 issues)

**What's being fixed:**
- Adding color token definitions to :root
- Replacing 28 hard-coded hex/rgb values with semantic tokens

**Proceeding...**

✓ Added token definitions:
  - color-content-primary-text
  - color-surface-canvas
  - color-action-primary-default
  [... 16 more tokens ...]

✓ Replaced colors:
  #1: body background → var(--color-surface-raised)
  #2: button text → var(--color-content-on-dark)
  #3: button bg → var(--color-action-primary-default)
  [... 25 more replacements ...]

✅ Fixed 28 color violations
⏳ Remaining: 44 violations (4 categories)

Next: `fix typography violations` or `fix spacing violations`
```

**Result after Step 3:**
- ✅ 28 color violations fixed
- 🎨 Colors now 100% compliant
- ⏳ 44 violations remain

---

### Step 4: Fix Typography (Category 2 of 5)

```
fix typography violations
```

**Agent response:**

```
Fixing ✏️ Typography violations (11 issues)

✓ Fixed font stacks (5 locations):
  - body: Arial → Gotham, Arial, sans-serif
  - trigger: Helvetica → Gotham, Arial, sans-serif
  [... 3 more ...]

✓ Fixed font weights:
  - Modal title: 700 → 500 (headers use 500)
  - Body text: 500 → 400 (body uses 400)
  [... 3 more ...]

✓ Fixed font sizes:
  - Modal title: 32px → 24px (Display → Heading Large)
  - All sizes now use tokens

✅ Fixed 11 typography violations
⏳ Remaining: 33 violations (3 categories)

Next: `fix spacing violations`
```

**Result after Step 4:**
- ✅ 39 total violations fixed (colors + typography)
- ✏️ Typography now 100% compliant
- ⏳ 33 violations remain

---

### Step 5: Fix Spacing (Category 3 of 5)

```
fix spacing violations
```

**Agent response:**

```
Fixing 📏 Spacing violations (20 issues)

✓ Replaced padding values (8 locations)
✓ Replaced margin values (6 locations)
✓ Replaced gap values (3 locations)
✓ Replaced border-radius values (3 locations)

All spacing now uses tokens:
  - 20px → var(--space-4)
  - 12px → var(--space-2)
  - 8px → var(--space-1)
  [... more ...]

✅ Fixed 20 spacing violations
⏳ Remaining: 13 violations (2 categories)

Next: `fix component rule violations`
```

**Result after Step 5:**
- ✅ 59 total violations fixed
- 📏 Spacing now 100% compliant
- ⏳ 13 violations remain

---

### Step 6: Fix Component Rules (Category 4 of 5)

```
fix component rule violations
```

**Agent response:**

```
Fixing 🧩 Component Rule violations (5 issues)

✓ Modal buttons: Removed 2 excess buttons (4 → 2)
  - Removed "Save for later"
  - Removed "Delete" (conflicts with primary)
  
✓ Button layout: Changed flex-end alignment

✓ Cancel button: Fixed styling (light bg, dark text)

✓ Ghost button: Removed disabled state styles

✅ Fixed 5 component rule violations
⏳ Remaining: 8 violations (1 category)

Next: `fix accessibility violations` (final category!)
```

**Result after Step 6:**
- ✅ 64 total violations fixed
- 🧩 Component rules now 100% compliant
- ⏳ 8 violations remain (last category!)

---

### Step 7: Fix Accessibility (Category 5 of 5)

```
fix accessibility violations
```

**Agent response:**

```
Fixing ♿ Accessibility violations (8 issues)

✓ Semantic HTML:
  - Changed div to button (trigger)
  
✓ ARIA attributes:
  - Added aria-hidden="true" to overlay
  - Added role="dialog" to modal
  - Added aria-modal="true"
  - Added aria-labelledby="modal-title"
  - Added aria-label="Close" to close button
  
✓ Heading hierarchy:
  - Changed h1 → h2 for modal title
  - Added id="modal-title"
  
✓ Form accessibility:
  - Added for="map-file" to label
  - Added id="map-file" to select
  
✓ Focus states:
  - Added :focus styles to select
  
✓ JavaScript enhancements:
  - Added aria-hidden management
  - Added focus management (focus select on open, return to trigger on close)
  - Added keyboard handlers (Escape, click outside)
  - Added body scroll prevention

✅ Fixed 8 accessibility violations

---

🎉 ALL VIOLATIONS FIXED! 🎉

Final Results:
- ✅ 72 violations resolved
- ✅ 100% design system compliant
- ✅ 0 linter errors
- ✅ Production-ready

Time: ~15 minutes (learning as you go)
```

**Final Result:**
- ✅ 72 violations fixed across 5 categories
- ✅ File is now 100% compliant
- ✅ You learned what each category fixes

---

## Comparison: Quick vs Step-by-Step

| Aspect | Quick (All-at-Once) | Step-by-Step (Meticulous) |
|--------|---------------------|---------------------------|
| **Command** | `fix all violations` | 5 category commands |
| **Time** | ~2 minutes | ~15 minutes |
| **Understanding** | Low (black box) | High (see each change) |
| **Control** | None (all or nothing) | Full (pause between categories) |
| **Learning** | Minimal | Significant |
| **Testing** | Test at end | Test after each category |
| **Rollback** | All or nothing | Category by category |
| **Best for** | Demos, prototypes, trusted files | Learning, production, team review |

---

## Mixed Approach (Recommended for Teams)

You can also mix both approaches:

### Example: Fix Most Issues Quickly, Review Critical Manually

```bash
# Step 1: Quick fix of token issues (most violations)
fix color violations
fix spacing violations
fix typography violations

# Step 2: Carefully review component and accessibility
review component rule violations
# [review the 5 issues]
fix component rule violations

review accessibility violations  
# [review the 8 issues carefully]
fix accessibility violations
```

This gives you:
- ⚡ Speed for mechanical fixes (tokens)
- 🧐 Careful review for UX-impacting changes (component rules, a11y)

---

## Category-Specific Commands Reference

### Review Commands (No Changes)
```bash
review color violations          # Just show them
review typography violations
review spacing violations
review component rule violations
review accessibility violations
```

### Fix Commands (Apply Changes)
```bash
fix color violations             # Fix just colors
fix typography violations        # Fix just typography
fix spacing violations           # Fix just spacing
fix component rule violations    # Fix just components
fix accessibility violations     # Fix just accessibility

fix all violations               # Fix everything at once
```

### Selective Fix Commands
```bash
fix all except #3, #7           # Skip specific issues
fix colors except #5            # Fix category, skip some
fix all except accessibility    # Fix everything but one category
```

---

## Pro Tips

### 1. **Start with Token Categories (Safest)**
```bash
fix color violations      # Mechanical, low risk
fix spacing violations    # Mechanical, low risk
fix typography violations # Mechanical, low risk
```
These are the safest to auto-fix because they're mechanical token replacements.

### 2. **Review Structural Categories Carefully**
```bash
review component rule violations  # Removes buttons, changes layouts
review accessibility violations   # Changes HTML structure
```
These change behavior and structure, so review before fixing.

### 3. **Test After Each Category**
```bash
fix color violations
# Test the page visually
fix spacing violations
# Test again
```

### 4. **Use Git Commits Per Category**
```bash
fix color violations
git add . && git commit -m "fix: replace hard-coded colors with semantic tokens"

fix typography violations
git add . && git commit -m "fix: update typography to use design system tokens"
```

This gives you granular history and easy rollback.

---

## When to Use Each Workflow

### Use **Quick Fix** when:
- ✅ Working on demos or prototypes
- ✅ You trust the design system
- ✅ The file is new/temporary
- ✅ Time is limited
- ✅ You're experienced with the design system

### Use **Step-by-Step** when:
- ✅ Learning the design system
- ✅ Working on production code
- ✅ Multiple team members reviewing
- ✅ Want to understand each change
- ✅ Testing between changes
- ✅ Need granular git history
- ✅ Regulatory/compliance requirements

### Use **Mixed Approach** when:
- ✅ Most violations are token issues (safe to auto-fix)
- ✅ Some violations need careful review
- ✅ Want speed AND control
