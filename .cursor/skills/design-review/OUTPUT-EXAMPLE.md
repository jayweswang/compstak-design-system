# Actual Review Output Example

This shows exactly what the user sees when running a design review.

---

## Command: `/design-review @demo-export-modal-bad.html`

---

## Design Review Summary

**Scope:** `demo-export-modal-bad.html` - Export modal component

**Results:**
- ✅ 0 passed checks
- 🔴 72 critical issues
- 🟡 8 warnings
- 🟢 0 suggestions

**Compliance Score:** 0% (needs significant work)

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
- **Fix:** Define as token and use `var(--color-overlay-background);`

🔴 **#6. Generic color name: Modal background**
- **Location:** Line 48
- **Issue:** `background: white;`
- **Fix:** `background: var(--color-surface-canvas);`

🔴 **#7. Hard-coded hex: Modal shadow**
- **Location:** Line 50
- **Issue:** `box-shadow: 0 10px 30px #000000;`
- **Fix:** Define and use `var(--shadow-modal);`

🔴 **#8. Hard-coded hex: Modal header border**
- **Location:** Line 59
- **Issue:** `border-bottom: 2px solid #CCCCCC;`
- **Fix:** Remove border (headers shouldn't have borders)

🔴 **#9. Hard-coded hex: Modal title color**
- **Location:** Line 69
- **Issue:** `color: #000000;`
- **Fix:** `color: var(--color-content-primary-text);`

🔴 **#10-28. [Additional 19 color violations]**
- Close button: 3 colors
- Modal body: 2 colors  
- Form label: 1 color
- Select element: 3 colors
- Footer border: 1 color
- All button variants: 10 colors

---

### ✏️ Typography (11 issues)

🔴 **#29. Incomplete font stack: Body**
- **Location:** Line 13
- **Issue:** `font-family: Arial;` (missing Gotham, fallback)
- **Fix:** `font-family: Gotham, Arial, sans-serif;`

🔴 **#30. Wrong font: Trigger button**
- **Location:** Line 29
- **Issue:** `font-family: Helvetica;`
- **Fix:** `font-family: Gotham, Arial, sans-serif;`

🔴 **#31. Incomplete font stack: Modal title**
- **Location:** Line 66
- **Issue:** `font-family: Gotham, sans-serif;` (missing Arial)
- **Fix:** `font-family: Gotham, Arial, sans-serif;`

🔴 **#32. Modal title using Display style**
- **Location:** Lines 67-68
- **Issue:** 32px font-size, 700 weight (Display Large)
- **Rule:** Modal titles must use Heading Large (24px, 500 weight)
- **Fix:** Change to `var(--font-heading-lg-size)` and weight 500

🔴 **#33. Missing font stack: Modal body**
- **Location:** Line 87
- **Issue:** `font-family: Arial, sans-serif;`
- **Fix:** `font-family: Gotham, Arial, sans-serif;`

🔴 **#34. Wrong font weight: Body text**
- **Location:** Line 89
- **Issue:** `font-weight: 500;` (body should be 400)
- **Fix:** `font-weight: 400;`

🔴 **#35. Wrong font weight: Form label**
- **Location:** Line 109
- **Issue:** `font-weight: 600;` (labels should be 500)
- **Fix:** `font-weight: 500;`

🔴 **#36-39. Hard-coded typography values**
- Line 22: `font-size: 15px;` → Use token
- Line 23: `font-weight: 600;` → Should be 500 for button
- Line 88: `font-size: 14px;` → Use token
- Line 141: `font-weight: 600;` → Should be 500

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

🔴 **#42. Hard-coded border-radius: Trigger button**
- **Location:** Line 27
- **Issue:** `border-radius: 4px;`
- **Fix:** `border-radius: var(--radius-sm);`

🔴 **#43-59. [Additional 17 spacing violations]**
- Modal padding: 1 violation
- Header spacing: 3 violations
- Close button: 2 violations
- Body margins: 2 violations
- Form gaps/margins: 3 violations
- Select padding/radius: 2 violations
- Footer spacing: 3 violations
- Button padding/radius: 2 violations

---

### 🧩 Component Rules (5 issues)

🔴 **#60. Modal has 4 buttons (exceeds max 3)**
- **Location:** Lines 218-224
- **Issue:** Save, Cancel, Download, Delete buttons present
- **Rule:** Modal maximum is 3 buttons
- **Fix:** Remove "Save for later" and "Delete" → keep Cancel + Download

🔴 **#61. Primary + Destructive in same modal**
- **Location:** Lines 221, 223
- **Issue:** Both Download (primary) and Delete (destructive)
- **Rule:** Cannot have both in same interaction
- **Fix:** Remove destructive button (keep primary for export action)

🔴 **#62. Modal button layout wrong**
- **Location:** Line 131
- **Issue:** `justify-content: space-between;` spreads buttons apart
- **Rule:** For 2 buttons, both on right using flex-end
- **Fix:** `justify-content: flex-end;`

🔴 **#63. Cancel button wrong styling**
- **Location:** Lines 155-156
- **Issue:** Dark bg (#6C757D) with white text
- **Rule:** Cancel should have light bg with dark text
- **Fix:** Use `var(--color-action-cancel-default)` (light) with dark text

🔴 **#64. Ghost button with disabled state**
- **Location:** Lines 179-182
- **Issue:** Disabled styles defined for ghost button
- **Rule:** Ghost buttons are never disabled
- **Fix:** Remove `.btn--ghost:disabled` styles

---

### ♿ Accessibility (8 issues)

🔴 **#65. Non-semantic trigger element**
- **Location:** Line 187
- **Issue:** `<div onclick="openModal()">` instead of button
- **Impact:** Not keyboard accessible, no button semantics
- **Fix:** `<button type="button" id="open-modal">`

🔴 **#66. Missing aria-hidden on overlay**
- **Location:** Line 190
- **Issue:** No initial `aria-hidden="true"`
- **Impact:** Screen readers may announce hidden content
- **Fix:** Add `aria-hidden="true"`

🔴 **#67. Missing modal ARIA attributes**
- **Location:** Line 192
- **Issue:** No `role="dialog"`, `aria-modal`, `aria-labelledby`
- **Impact:** Screen readers won't identify as modal
- **Fix:** Add all required ARIA attributes

🔴 **#68. Wrong heading level + missing id**
- **Location:** Line 196
- **Issue:** `<h1>` for modal title (should be `<h2>`), no `id`
- **Impact:** Disrupts heading hierarchy, can't reference with aria-labelledby
- **Fix:** `<h2 id="modal-title" class="modal__title">`

🔴 **#69. Missing aria-label on close button**
- **Location:** Line 198
- **Issue:** Icon-only button with no accessible label
- **Impact:** Screen readers announce "button" with no context
- **Fix:** Add `aria-label="Close"`

🔴 **#70. Form label not associated with input**
- **Location:** Lines 205-206
- **Issue:** Label missing `for`, select missing `id`
- **Impact:** Screen readers can't associate label with input
- **Fix:** Add `for="map-file"` and `id="map-file"`

🔴 **#71. Missing focus state on select**
- **Location:** Lines 114-125
- **Issue:** No `:focus` styles
- **Impact:** Keyboard users can't see focused element
- **Fix:** Add `:focus` with border-color and box-shadow

🔴 **#72. Incomplete focus/keyboard management**
- **Location:** Lines 237-248, 269-271
- **Issues:** 
  - Not setting aria-hidden on open/close
  - Not preventing body scroll
  - Not managing focus properly
  - No Escape key handler
  - No click-outside handler
- **Impact:** Poor keyboard experience, trapped focus
- **Fix:** Add complete focus management and keyboard handlers

---

### 🔗 Cross-Component Composition (0 issues)

✅ No composition issues found

---

## Summary by Severity

🔴 **Critical Issues (72 total):** All must be fixed  
🟡 **Warnings (8 total):** Should fix  
🟢 **Suggestions (0 total):** None

---

## Summary by Category

| Category | Count | % of Total |
|----------|-------|------------|
| 🎨 Colors | 28 | 39% |
| 📏 Spacing | 20 | 28% |
| ✏️ Typography | 11 | 15% |
| ♿ Accessibility | 8 | 11% |
| 🧩 Component Rules | 5 | 7% |
| 🔗 Composition | 0 | 0% |

**Recommendation:** Start with colors (largest category, safest fixes)

---

## What To Do Next

### Option 1: Quick Fix Everything
```
fix all violations
```
✅ Fixes all 72 issues in ~2 minutes

### Option 2: Step-by-Step (Recommended)
```
fix color violations              # Fix 28 issues
fix spacing violations            # Fix 20 issues
fix typography violations         # Fix 11 issues
fix component rule violations     # Fix 5 issues
fix accessibility violations      # Fix 8 issues
```
✅ Fixes all 72 issues in ~15 minutes with full understanding

### Option 3: Mixed Approach
```
# Quick fix token issues (mechanical, safe)
fix color violations
fix spacing violations
fix typography violations

# Carefully review structural changes
review component rule violations
# [review the 5 issues]
fix component rule violations

review accessibility violations
# [review the 8 issues]
fix accessibility violations
```
✅ Balances speed and control

### Option 4: Custom Selection
```
fix all except #60, #61, #65
```
✅ Skip specific issues (e.g., keep 4 buttons for now)

---

## Step-by-Step Progress Tracking

If you choose **Option 2 (Step-by-Step)**, here's what you'll see after each category:

### After `fix color violations`:

```
✅ Fixed 28 violations (🎨 Colors: 100% complete)

Progress:
  🎨 Colors:          ████████████████████ 100% (28/28) ✅
  📏 Spacing:         ░░░░░░░░░░░░░░░░░░░░   0% (0/20)
  ✏️ Typography:      ░░░░░░░░░░░░░░░░░░░░   0% (0/11)
  🧩 Component Rules: ░░░░░░░░░░░░░░░░░░░░   0% (0/5)
  ♿ Accessibility:    ░░░░░░░░░░░░░░░░░░░░   0% (0/8)

Overall: 39% complete (28/72)

Next: fix spacing violations
```

### After `fix spacing violations`:

```
✅ Fixed 20 violations (📏 Spacing: 100% complete)

Progress:
  🎨 Colors:          ████████████████████ 100% (28/28) ✅
  📏 Spacing:         ████████████████████ 100% (20/20) ✅
  ✏️ Typography:      ░░░░░░░░░░░░░░░░░░░░   0% (0/11)
  🧩 Component Rules: ░░░░░░░░░░░░░░░░░░░░   0% (0/5)
  ♿ Accessibility:    ░░░░░░░░░░░░░░░░░░░░   0% (0/8)

Overall: 67% complete (48/72)

Next: fix typography violations
```

### After `fix typography violations`:

```
✅ Fixed 11 violations (✏️ Typography: 100% complete)

Progress:
  🎨 Colors:          ████████████████████ 100% (28/28) ✅
  📏 Spacing:         ████████████████████ 100% (20/20) ✅
  ✏️ Typography:      ████████████████████ 100% (11/11) ✅
  🧩 Component Rules: ░░░░░░░░░░░░░░░░░░░░   0% (0/5)
  ♿ Accessibility:    ░░░░░░░░░░░░░░░░░░░░   0% (0/8)

Overall: 82% complete (59/72)

Next: fix component rule violations
```

### After `fix component rule violations`:

```
✅ Fixed 5 violations (🧩 Component Rules: 100% complete)

Changes made:
  - Removed 2 excess buttons (4 → 2)
  - Fixed button layout (space-between → flex-end)
  - Fixed cancel button styling
  - Removed ghost disabled state

Progress:
  🎨 Colors:          ████████████████████ 100% (28/28) ✅
  📏 Spacing:         ████████████████████ 100% (20/20) ✅
  ✏️ Typography:      ████████████████████ 100% (11/11) ✅
  🧩 Component Rules: ████████████████████ 100% (5/5)  ✅
  ♿ Accessibility:    ░░░░░░░░░░░░░░░░░░░░   0% (0/8)

Overall: 89% complete (64/72)

Next: fix accessibility violations (final category!)
```

### After `fix accessibility violations`:

```
✅ Fixed 8 violations (♿ Accessibility: 100% complete)

Changes made:
  - Fixed semantic HTML (div → button)
  - Added 5 ARIA attributes
  - Fixed heading hierarchy (h1 → h2)
  - Added form label association
  - Added focus state to select
  - Added complete focus management
  - Added keyboard handlers (Escape, click-outside)

Progress:
  🎨 Colors:          ████████████████████ 100% (28/28) ✅
  📏 Spacing:         ████████████████████ 100% (20/20) ✅
  ✏️ Typography:      ████████████████████ 100% (11/11) ✅
  🧩 Component Rules: ████████████████████ 100% (5/5)  ✅
  ♿ Accessibility:    ████████████████████ 100% (8/8)  ✅

Overall: 100% complete (72/72) 🎉

---

✨ ALL CATEGORIES COMPLETE! ✨

Final Results:
  - 72 violations fixed
  - 0 violations remaining
  - 100% design system compliant
  - Production-ready!

Time: ~15 minutes
Linter errors: 0
```

---

## Quick Fix vs Step-by-Step Comparison

### Quick Fix Output:

```
User: fix all violations

Agent:
Applying all 72 fixes to demo-export-modal-bad.html...

✓ Added 34 token definitions
✓ Fixed 28 color violations
✓ Fixed 20 spacing violations
✓ Fixed 11 typography violations
✓ Fixed 5 component rule violations
✓ Fixed 8 accessibility violations

✅ 100% complete in 2 minutes!
```

### Step-by-Step Output:

```
User: fix color violations

Agent: [Detailed output showing 28 fixes, progress bar]
✅ 39% complete (28/72)

User: fix spacing violations

Agent: [Detailed output showing 20 fixes, progress bar]
✅ 67% complete (48/72)

[... continues through all categories ...]

✅ 100% complete after 5 commands!
```

**Key Difference:**
- **Quick:** One command, one output, done in 2 minutes
- **Step-by-Step:** Five commands, detailed progress, test between steps, done in 15 minutes

Choose based on your needs and comfort level!
