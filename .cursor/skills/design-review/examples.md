# Design Review Examples

This file contains concrete examples of design reviews with findings and recommendations, plus examples of automatic fix workflows.

## Example 1: Modal Component Review

### Input

```html
<div class="modal">
  <div class="modal-header">
    <h2 style="font-size: 18px; font-weight: 600;">Delete Account</h2>
  </div>
  <div class="modal-body">
    <p style="color: #666666;">Are you sure you want to delete your account?</p>
  </div>
  <div class="modal-footer">
    <button class="btn-secondary">Cancel</button>
    <button class="btn-primary">Confirm</button>
    <button class="btn-destructive" style="background: #D32F2F;">Delete</button>
  </div>
</div>
```

### Review Findings

**🔴 Critical Issues:**

1. **Hard-coded typography** (line 3)
   - Issue: `font-size: 18px; font-weight: 600;`
   - Should be: `var(--type-heading-lg-size)` and `font-weight: 500` (headers use 500, not 600)
   - Location: Modal title

2. **Hard-coded color** (line 6)
   - Issue: `color: #666666;`
   - Should be: `var(--content-primary-text)`
   - Location: Modal body text

3. **Hard-coded color** (line 11)
   - Issue: `style="background: #D32F2F;"`
   - Should be: Use semantic token `var(--action-destructive-default)`
   - Location: Delete button

4. **Too many buttons** (lines 9-11)
   - Issue: Modal has 3 buttons, with both primary and destructive
   - Rule violation: Primary and destructive cannot be in same interaction
   - Fix: Remove either Confirm (primary) or Delete (destructive). For delete confirmation, use Cancel + Destructive only.

5. **Wrong modal button layout**
   - Issue: All 3 buttons in footer without left/right separation
   - Should be: If 3 buttons, left side = secondary outline (alone), right side = Cancel | Primary/Destructive

**Recommended Fix:**

```html
<div class="modal">
  <div class="modal-header">
    <h2 class="modal-title">Delete Account</h2>
  </div>
  <div class="modal-body">
    <p class="modal-body-text">Are you sure you want to delete your account? This action cannot be undone.</p>
  </div>
  <div class="modal-footer">
    <button class="btn-secondary">Cancel</button>
    <button class="btn-destructive">Delete</button>
  </div>
</div>
```

```css
.modal-title {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-heading-lg-size);
  font-weight: 500;
  line-height: var(--type-heading-lg-line-height);
}

.modal-body-text {
  font-family: Gotham, Arial, sans-serif;
  color: var(--content-primary-text);
  font-size: var(--type-body-text-size);
  font-weight: 400;
  line-height: var(--type-body-text-line-height);
}

.btn-destructive {
  background: var(--action-destructive-default);
  color: var(--content-on-dark);
}

.btn-destructive:hover {
  background: var(--action-destructive-hovered);
}

.btn-destructive:active {
  background: var(--action-destructive-pressed);
}
```

---

## Example 2: Button Layout Review

### Input

Page with multiple primary buttons:

```html
<div class="page">
  <header>
    <button class="btn-primary">Create New</button>
    <button class="btn-primary">Import</button>
  </header>
  
  <section class="actions">
    <button class="btn-primary">Save Changes</button>
    <button class="btn-primary">Publish</button>
  </section>
  
  <footer>
    <button class="btn-primary">Export</button>
  </footer>
</div>
```

### Review Findings

**🟡 Warnings:**

1. **Too many primary buttons** (entire page)
   - Issue: Page has 5 primary buttons (Create New, Import, Save Changes, Publish, Export)
   - Rule: Max 3 primary buttons per page (Export doesn't count toward limit)
   - Current count: 4 primary buttons + 1 Export = VIOLATION
   - Fix: Reduce to 3 primary actions (besides Export)

**Recommended Fix:**

Downgrade some buttons to secondary or tertiary based on priority:

```html
<div class="page">
  <header>
    <button class="btn-primary">Create New</button>
    <button class="btn-secondary">Import</button>
  </header>
  
  <section class="actions">
    <button class="btn-primary">Save Changes</button>
    <button class="btn-primary">Publish</button>
  </section>
  
  <footer>
    <button class="btn-primary">Export</button>
  </footer>
</div>
```

Result: 3 primary (Create New, Save Changes, Publish) + Export = COMPLIANT

---

## Example 3: Typography Review

### Input

```css
.card-title {
  font-family: Gotham;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
}

.card-subtitle {
  font-family: Arial;
  font-size: 16px;
  font-weight: 500;
  color: #666;
}

.card-body {
  font-size: 14px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
}
```

### Review Findings

**🔴 Critical Issues:**

1. **Incomplete font stack** (lines 2, 9, 17)
   - Issue: Missing fallbacks
   - Fix: `font-family: Gotham, Arial, sans-serif;`

2. **Hard-coded font sizes** (lines 3, 10, 16)
   - Issue: `24px`, `16px`, `14px` not using tokens
   - Fix: Use semantic tokens from `tokens/semantics.typography.json`

3. **Wrong font weights** (lines 4, 11)
   - Issue: Headers using 600 and 500
   - Rule: Headers use 500, body uses 400
   - Fix: Card title (header) → 500, subtitle (if header) → 500, if body → 400

4. **Hard-coded colors** (lines 5, 12, 18)
   - Issue: `#000000`, `#666`, `rgb(51, 51, 51)` not using tokens
   - Fix: Use semantic color tokens

**Recommended Fix:**

```css
.card-title {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-heading-md-size);
  font-weight: 500;
  line-height: var(--type-heading-md-line-height);
  color: var(--content-primary-text);
}

.card-subtitle {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-heading-sm-size);
  font-weight: 500;
  line-height: var(--type-heading-sm-line-height);
  color: var(--content-secondary-text);
}

.card-body {
  font-family: Gotham, Arial, sans-serif;
  font-size: var(--type-body-text-size);
  font-weight: 400;
  line-height: var(--type-body-text-line-height);
  color: var(--content-primary-text);
}
```

---

## Example 4: Disabled Button Review

### Input

```html
<button class="btn-ghost" disabled>
  Save
</button>

<button class="btn-primary" disabled>
  Submit Form
</button>
```

### Review Findings

**🔴 Critical Issues:**

1. **Disabled ghost button** (line 1)
   - Issue: Ghost buttons cannot be disabled
   - Rule: Ghost buttons must always be enabled
   - Fix: Change variant to secondary outline, or hide the button

2. **Disabled button without tooltip** (lines 1, 5)
   - Issue: Both disabled buttons lack tooltips
   - Rule: Every disabled button must have tooltip explaining (1) why disabled, (2) how to enable
   - Fix: Add tooltip with explanation

**Recommended Fix:**

```html
<!-- Option 1: Change ghost to secondary -->
<button class="btn-secondary-outline" disabled title="Complete required fields to save">
  Save
</button>

<!-- Option 2: Hide ghost button if action unavailable -->
<!-- Ghost button removed or hidden with CSS -->

<button class="btn-primary" disabled title="Fill in all required fields (Name, Email) to submit">
  Submit Form
</button>
```

With proper ARIA for accessibility:

```html
<button 
  class="btn-primary" 
  disabled 
  aria-disabled="true"
  aria-label="Submit Form - disabled until all required fields are completed"
  title="Fill in all required fields (Name, Email) to submit"
>
  Submit Form
</button>
```

---

## Example 5: Token Hierarchy Violation

### Input

Component token definition:

```json
{
  "components": {
    "button": {
      "intent": {
        "primary": {
          "solid": {
            "fill-default": "blue/500",
            "ink-default": "neutral/0"
          }
        }
      }
    }
  }
}
```

### Review Findings

**🔴 Critical Issues:**

1. **Direct primitive reference in component token** (lines 7-8)
   - Issue: Component token referencing primitive tokens (`blue/500`, `neutral/0`)
   - Rule: Component tokens must reference semantic tokens only
   - Fix: Reference semantic tokens from `tokens/semantics.colors.json`

**Recommended Fix:**

```json
{
  "components": {
    "button": {
      "intent": {
        "primary": {
          "solid": {
            "fill-default": "action/primary/default",
            "ink-default": "content/on-dark"
          }
        }
      }
    }
  }
}
```

This follows the hierarchy:
- Component token → Semantic token → Primitive token
- `components.button.intent.primary.solid.fill-default` → `action/primary/default` → `blue/500`

---

## Example 6: Figma Design Review

### Input

Figma frame with export modal (screenshot description):
- Modal with title "Export Data"
- Title is using "Display Medium" text style
- Body text in black hex #000000
- Three buttons: "Cancel" (left), "Download CSV" (center), "Download Excel" (right)
- Spacing between elements: 20px (not a token value)

### Review Findings

**🔴 Critical Issues:**

1. **Wrong text style for modal title**
   - Issue: Using "Display Medium" style
   - Rule: Modal titles must use "Heading Large"
   - Why: Display styles are too heavy/bold for app UI
   - Fix: Change to "Heading Large" text style in Figma

2. **Hard-coded color value**
   - Issue: Body text using raw hex #000000
   - Rule: All colors must reference Figma Variables (semantic tokens)
   - Fix: Apply color variable `content/primary/text`

3. **Non-standard spacing**
   - Issue: 20px spacing not in spacing scale
   - Rule: Spacing must use token values
   - Fix: Use closest token value (likely 16px or 24px depending on context)

**🟡 Warnings:**

4. **Unclear button layout**
   - Issue: Three buttons with no visual grouping, Cancel on left alone
   - Rule: For 3 buttons in modal, left side = secondary outline (alone), right side = Cancel | Primary
   - Current: Cancel | Download CSV | Download Excel
   - Fix: Group "Cancel | Download CSV" on right, place optional secondary on left if needed
   - Alternative: Reduce to 2 buttons if third isn't necessary

**Recommended Fix:**

In Figma:
1. Select modal title text
2. Change text style to "Heading Large"
3. Select body text
4. Apply color variable: `content/primary/text`
5. Adjust spacing to token value (16px or 24px)
6. Reorganize buttons:
   - Option A: Right side: Cancel | Download Excel (primary)
   - Option B: Left: Download CSV (secondary outline), Right: Cancel | Download Excel (primary)

---

## Example 7: Accessibility Issues

### Input

```html
<div class="icon-button" onclick="deleteItem()">
  <svg>...</svg>
</div>

<form>
  <input type="text" placeholder="Enter name">
  <input type="email" placeholder="Enter email">
</form>
```

### Review Findings

**🔴 Critical Issues:**

1. **Non-semantic interactive element** (line 1)
   - Issue: Using `<div>` with `onclick` instead of `<button>`
   - Accessibility impact: Not keyboard accessible, no default button semantics
   - Fix: Use `<button>` element

2. **Missing ARIA label on icon-only button** (line 1)
   - Issue: Icon button has no text or aria-label
   - Accessibility impact: Screen reader users won't know button purpose
   - Fix: Add aria-label describing action

3. **Missing form labels** (lines 6-7)
   - Issue: Inputs have placeholders but no `<label>` elements
   - Accessibility impact: Screen readers can't associate labels with inputs
   - Fix: Add proper `<label>` elements with `for` attribute

**Recommended Fix:**

```html
<button class="icon-button" aria-label="Delete item" onclick="deleteItem()">
  <svg aria-hidden="true">...</svg>
</button>

<form>
  <div class="form-field">
    <label for="name-input">Name</label>
    <input type="text" id="name-input" placeholder="Enter name" required>
  </div>
  
  <div class="form-field">
    <label for="email-input">Email</label>
    <input type="email" id="email-input" placeholder="Enter email" required>
  </div>
</form>
```

Additional improvements:
- Add focus styles for keyboard navigation
- Ensure color contrast meets WCAG AA standards (4.5:1 for text)
- Test with keyboard: Tab should reach all interactive elements
- Test with screen reader: All elements should be announced correctly

---

## Example 8: Automatic Fix Workflow

This example demonstrates the complete workflow for automatically fixing violations with selective exclusions.

### Initial Request

**User:** "Run design review on demo-button.html"

### Review Report Generated

```markdown
## Design Review Summary

**Scope:** demo-button.html

**Results:**
- 🔴 8 critical issues
- 🟡 2 warnings

### Critical Issues

🔴 1. Hard-coded color: Button background (line 15)
   - Issue: `background: #0066CC;`
   - Fix: `background: var(--color-action-primary-default);`

🔴 2. Hard-coded color: Button hover (line 16)
   - Issue: `background: #0052A3;`
   - Fix: `background: var(--color-action-primary-hovered);`

🔴 3. Hard-coded spacing: Button padding (line 17)
   - Issue: `padding: 12px 24px;`
   - Fix: `padding: var(--space-2) var(--space-4);`

🔴 4. Wrong font weight (line 18)
   - Issue: `font-weight: 600;`
   - Fix: `font-weight: 500;`

🔴 5. Missing font fallback (line 19)
   - Issue: `font-family: Gotham;`
   - Fix: `font-family: Gotham, Arial, sans-serif;`

🔴 6. Hard-coded font size (line 20)
   - Issue: `font-size: 14px;`
   - Fix: `font-size: var(--font-label-size);`

🔴 7. Hard-coded border radius (line 21)
   - Issue: `border-radius: 6px;`
   - Fix: `border-radius: var(--radius-sm);`

🔴 8. Non-semantic element (line 30)
   - Issue: `<div onclick="...">`
   - Fix: `<button type="button">`
```

### User Requests Fix with Exclusions

**User:** "Fix all violations except #1 and #3. Keep those colors and spacing as they are for now."

### Agent Response

```markdown
Applying fixes to demo-button.html

**Fixing (6 issues):**
✓ #2: Button hover color
✓ #4: Font weight
✓ #5: Font fallback
✓ #6: Font size
✓ #7: Border radius
✓ #8: Semantic HTML

**Excluded (not changing):**
• #1: Button background color - keeping #0066CC
• #3: Button padding - keeping 12px 24px

Proceeding with fixes...
```

### Fixes Applied

**Fix #2: Button hover color**
```css
/* BEFORE */
.btn-primary:hover { background: #0052A3; }

/* AFTER */
.btn-primary:hover { background: var(--color-action-primary-hovered); }
```

**Fix #4: Font weight**
```css
/* BEFORE */
.btn { font-weight: 600; }

/* AFTER */
.btn { font-weight: 500; }
```

**Fix #5: Font fallback**
```css
/* BEFORE */
.btn { font-family: Gotham; }

/* AFTER */
.btn { font-family: Gotham, Arial, sans-serif; }
```

**Fix #6: Font size**
```css
/* BEFORE */
.btn { font-size: 14px; }

/* AFTER */
.btn { font-size: var(--font-label-size); }
```

**Fix #7: Border radius**
```css
/* BEFORE */
.btn { border-radius: 6px; }

/* AFTER */
.btn { border-radius: var(--radius-sm); }
```

**Fix #8: Semantic HTML**
```html
<!-- BEFORE -->
<div class="btn btn-primary" onclick="handleClick()">Click me</div>

<!-- AFTER -->
<button type="button" class="btn btn-primary" id="primary-btn">Click me</button>
```

Also update JavaScript:
```javascript
// Add event listener
document.getElementById('primary-btn').addEventListener('click', handleClick);
```

### Final Summary

```markdown
## Fix Summary

**File:** demo-button.html

**Applied fixes:** 6 issues resolved
**Excluded:** 2 issues kept as requested
**Remaining:** 2 issues still need attention

### Changes made:
- Fixed 1 hover color to use semantic token
- Fixed font weight from 600 to 500
- Added complete font fallback chain
- Replaced hard-coded font size with token
- Replaced hard-coded border radius with token
- Changed div to semantic button element
- Added proper event listener in JavaScript

### Excluded (as requested):
- #1: Button background color (#0066CC) - kept for custom branding
- #3: Button padding (12px 24px) - kept for specific use case

### Remaining issues:
🔴 #1: Button background should use var(--color-action-primary-default)
🔴 #3: Padding should use var(--space-2) var(--space-4)

**Note:** Excluded issues remain for now but should be addressed eventually for full design system compliance.
```

---

## Example 9: Complex Fix with Token Definitions

This example shows handling fixes that require adding new token definitions.

### Initial Code with Violations

```html
<style>
  .modal {
    background: white;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.4);
  }
  
  .btn:focus {
    box-shadow: 0 0 0 2px rgba(34, 143, 255, 0.2);
  }
</style>
```

### Fix Process

**Step 1: Identify tokens needed**

Agent recognizes these rgba values don't have existing tokens and need to be added:
- `rgba(0, 0, 0, 0.15)` → `--shadow-modal`
- `rgba(0, 0, 0, 0.4)` → `--color-overlay-background`
- `rgba(34, 143, 255, 0.2)` → `--color-focus-ring`

**Step 2: Add token definitions to :root**

```css
:root {
  /* ... existing tokens ... */
  
  /* Shadow tokens */
  --shadow-modal: 0 20px 40px rgba(0, 0, 0, 0.15);
  
  /* Overlay and focus tokens */
  --color-overlay-background: rgba(0, 0, 0, 0.4);
  --color-focus-ring: rgba(34, 143, 255, 0.2);
}
```

**Step 3: Apply fixes using new tokens**

```css
.modal {
  background: var(--color-surface-canvas);
  box-shadow: var(--shadow-modal);
}

.overlay {
  background: var(--color-overlay-background);
}

.btn:focus {
  box-shadow: 0 0 0 2px var(--color-focus-ring);
}
```

### Result

All hard-coded values replaced with tokens. New tokens added to :root for future use across the codebase.

---

## Example 10: Batch Fixes by Category

### User Request

**User:** "Fix all color violations only"

### Agent Response

Scans QA report, identifies 12 color violations (issues #1-#12), applies only color fixes:

```markdown
Applying color fixes to demo-page.html

**Fixing:** 12 color violations
**Skipping:** 8 typography violations, 5 spacing violations, 3 accessibility violations

Applying fixes...

✓ Replaced 12 hard-coded colors with semantic tokens
✓ Added 2 new tokens to :root (overlay-background, focus-ring)

**Next steps:**
- 8 typography violations remain
- 5 spacing violations remain
- 3 accessibility violations remain

Run "fix all typography" to continue, or "fix all violations" to fix everything.
```

### Workflow Demonstrates

1. **Selective fixing by category** - Only colors fixed
2. **Preserves other violations** - Typography, spacing, a11y untouched
3. **Clear next steps** - Tells user what remains
4. **Iterative fixing** - User can fix in stages

This allows users to:
- Fix in controlled stages
- Review each category before moving to next
- Avoid overwhelming changes in single commit
- Test incrementally

---

## Example 11: Handling Cannot-Auto-Fix Cases

Some violations require human judgment and cannot be auto-fixed.

### Scenario: Ambiguous Color Context

**Violation:** `color: #0066CC;`

**Problem:** Could be several different semantic tokens depending on context:
- `action/primary/default` (button background)
- `content/link` (link text color)
- `accent/brand` (decorative accent)

**Agent Response:**

```markdown
⚠️ Cannot auto-fix #7: Ambiguous color context

**Issue:** Line 45 has `color: #0066CC;`

**Possible fixes:**
- If this is a link: `color: var(--content-link);`
- If this is an accent: `color: var(--accent-brand);`
- If this is an action: `color: var(--action-primary-default);`

**Please specify:** What is this color used for?
```

**User clarifies:** "It's a link"

**Agent applies fix:**
```css
/* Before */
.custom-link { color: #0066CC; }

/* After */
.custom-link { color: var(--content-link); }
```

### Other Cannot-Auto-Fix Examples

1. **Design decisions** - Intentional deviations from design system
2. **Breaking changes** - Structural changes that might break functionality
3. **Complex refactors** - Multiple interdependent changes
4. **Missing context** - Need user input on intent

For these cases, the agent:
- Explains why it can't auto-fix
- Provides options/guidance
- Asks for user clarification
- Applies fix after confirmation
