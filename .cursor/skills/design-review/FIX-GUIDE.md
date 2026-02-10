# Quick Guide: Auto-Fixing Design Violations

This guide shows you how to use the design-review skill's automatic fix functionality.

## Basic Usage

### 1. Run Design Review First

```
/design-review @demo-export-modal.html
```

This generates a numbered list of violations.

### 2. Fix All Violations

```
Fix all violations
```

or

```
Apply all fixes
```

### 3. Fix with Exclusions

```
Fix all violations except #3 and #7
```

or

```
Fix everything but keep #12
```

or

```
Apply fixes, skip #5, #8, #15
```

### 4. Fix by Category

```
Fix all color violations
```

```
Fix typography issues only
```

```
Apply spacing fixes
```

## Common Scenarios

### Scenario 1: Review and Fix Everything

```
User: /design-review @my-component.html
Agent: [Generates report with 15 violations]

User: Fix all violations
Agent: [Applies all 15 fixes]
```

### Scenario 2: Keep Custom Styling

```
User: /design-review @custom-button.html
Agent: [Report shows 8 violations including custom colors]

User: Fix all except #2 and #3 - those are intentional brand colors
Agent: [Applies 6 fixes, skips #2 and #3]
```

### Scenario 3: Iterative Fixing

```
User: /design-review @large-file.html
Agent: [Report shows 40 violations]

User: Fix color violations first
Agent: [Fixes 18 color violations, leaves rest]

User: Now fix typography
Agent: [Fixes 12 typography violations]

User: Fix the remaining issues
Agent: [Fixes final 10 violations]
```

### Scenario 4: Review Before Applying

```
User: /design-review @critical-component.html
Agent: [Report shows 5 violations]

User: Show me what would change if I fix #1 and #2
Agent: [Shows before/after for those specific fixes]

User: Looks good, apply those fixes
Agent: [Applies #1 and #2 only]
```

## What Gets Fixed Automatically

### ✅ Automatically Fixable (by Category)

**🎨 Token Hierarchy & Colors:**
- Hard-coded hex/rgb/rgba → semantic tokens
- Primitive tokens → semantic tokens
- Missing token definitions → add to :root

**✏️ Typography:**
- Font stack → `Gotham, Arial, sans-serif`
- Font weights → 500 for headers, 400 for body
- Hard-coded sizes → semantic tokens

**📏 Spacing:**
- Hard-coded px/rem → spacing tokens
- Border radius → radius tokens

**🧩 Component Rules:**
- Remove excess buttons (modal >3)
- Fix button layouts (flex-end)
- Remove conflicting buttons (primary+destructive)

**♿ Accessibility:**
- Semantic HTML: `<div onclick>` → `<button>`
- ARIA attributes: Add missing attributes
- Focus states: Add missing `:focus` styles
- Form labels: Add `for` attributes and `id`s
- Heading levels: Fix hierarchy
- Event listeners: Move inline to JavaScript

### ⚠️ Requires Confirmation

- **Ambiguous colors:** Color could map to multiple tokens
- **Button removal:** When modal has too many buttons
- **Layout changes:** Changing flex properties
- **Breaking changes:** Structural changes affecting functionality

### ❌ Cannot Auto-Fix

- **Design decisions:** Intentional deviations needing human judgment
- **Complex refactors:** Multi-step changes with dependencies
- **Missing information:** Need user input on intent
- **Business logic:** Changes affecting application behavior

## Fix Commands Reference

### Basic Commands

| Command | Action |
|---------|--------|
| `Fix all violations` | Fix everything |
| `Apply all fixes` | Fix everything (synonym) |
| `Fix everything` | Fix everything (synonym) |

### Exclusion Commands

| Command | Action |
|---------|--------|
| `Fix all except #3` | Fix all but issue #3 |
| `Fix all except #3 and #7` | Fix all but issues #3 and #7 |
| `Fix everything but keep #12` | Fix all but issue #12 |
| `Apply fixes, skip #5, #8, #15` | Fix all but issues #5, #8, #15 |
| `Fix all violations except #1-#5` | Fix all but issues 1 through 5 |

### Category Commands

| Command | Action |
|---------|--------|
| `Fix color violations` | Only fix color issues |
| `Fix typography issues` | Only fix typography issues |
| `Fix spacing violations` | Only fix spacing issues |
| `Fix accessibility issues` | Only fix a11y issues |
| `Fix component rules` | Only fix component violations |

### Specific Commands

| Command | Action |
|---------|--------|
| `Fix #3, #7, #12` | Only fix these specific issues |
| `Fix issues 1-10` | Fix issues 1 through 10 |
| `Show me what would change for #5` | Preview fix without applying |

## Fix Output

After applying fixes, you'll get a summary:

```markdown
## Fix Summary

**File:** demo-button.html

**Applied fixes:** 12 issues resolved
**Excluded:** 2 issues kept as requested
**Remaining:** 0 issues

### Changes made:
- Replaced 8 hard-coded colors with semantic tokens
- Fixed 3 typography violations (font stack, weights)
- Replaced 2 hard-coded spacing values with tokens
- Added 1 missing ARIA attribute
- Fixed 1 semantic HTML issue (div → button)

### Excluded (as requested):
- #3: Button background color - kept for custom branding
- #7: Custom padding - kept for specific use case

### Files modified:
- demo-button.html (15 changes)
```

## Tips for Effective Fixing

### 1. Review Before Fixing

Always run QA first to see what violations exist:

```
/design-qa @component.html
[Review report]
Fix all violations
```

### 2. Fix in Stages for Large Files

For files with many violations, fix by category:

```
Fix color violations
[Review changes, test]

Fix typography violations  
[Review changes, test]

Fix remaining issues
```

### 3. Keep Intentional Deviations

Mark intentional design choices to skip:

```
Fix all except #2, #5, #9 - those are intentional brand deviations
```

### 4. Use Preview for Critical Changes

For important files, preview first:

```
Show me what would change if I fix all violations
[Review]
Looks good, apply those fixes
```

### 5. Test After Fixes

After applying fixes:
- Check the file renders correctly
- Test interactive elements
- Verify no functionality broke
- Run linter to confirm no new errors

## Troubleshooting

### "Cannot auto-fix this violation"

**Reason:** Issue requires human judgment

**Solution:** Agent will explain why and provide options

```
⚠️ Cannot auto-fix #7: Ambiguous color context

The color #0066CC could be:
- action/primary/default (button)
- content/link (link)  
- accent/brand (decoration)

Please specify the context.
```

Respond with context, agent will apply fix.

### "Fix depends on another issue"

**Reason:** Fixes have dependencies

**Solution:** Agent will fix in correct order automatically

```
ℹ️ Fixing #3 requires fixing #1 first (token needs to be defined)

Applying fixes in order: #1 → #3
```

### "File has changed since review"

**Reason:** File modified between review and fix

**Solution:** Re-run review, then apply fixes

```
⚠️ File modified since review report

Please run /design-review again to get current violations.
```

## Integration with Git

### Commit Strategy

**Option 1: Single commit with all fixes**
```
Fix all violations
[All fixes applied]
git add .
git commit -m "fix: apply design system compliance fixes"
```

**Option 2: Separate commits by category**
```
Fix color violations
git add . && git commit -m "fix: replace hard-coded colors with tokens"

Fix typography violations
git add . && git commit -m "fix: standardize typography using design tokens"

Fix remaining issues
git add . && git commit -m "fix: add accessibility and semantic HTML fixes"
```

**Option 3: Keep some changes separate**
```
Fix all except #3, #7
git add . && git commit -m "fix: apply design system compliance (partial)"

[Later, after review]
Fix #3 and #7
git add . && git commit -m "fix: apply remaining design system fixes"
```

## Advanced Usage

### Combining with Linting

```
/design-review @component.html
Fix all violations
[Fixes applied]
Check for linter errors
[If errors found]
Fix linter errors
```

### Batch Processing Multiple Files

```
/design-review @src/components/*.html
[Reports generated for each file]

Fix all violations in all files
[Agent applies fixes to all files systematically]
```

### Preview Mode

```
/design-review @component.html
Show me what all fixes would look like
[Agent shows complete before/after diff]

Apply those changes
[Agent applies all fixes]
```

## Best Practices

1. **Always review first** - Never fix without seeing violations
2. **Review the report** - Understand what will change
3. **Test incrementally** - Don't fix everything at once in critical files
4. **Keep exclusions documented** - Note why certain issues are excluded
5. **Commit often** - Commit after each category of fixes
6. **Re-run review after fixes** - Verify all issues resolved
7. **Use version control** - Easy to revert if needed

## Quick Reference Card

```
┌─────────────────────────────────────────────────────┐
│ Design Review Fix Commands                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│ FIX ALL:                                           │
│   Fix all violations                               │
│   Apply all fixes                                  │
│                                                     │
│ FIX WITH EXCLUSIONS:                               │
│   Fix all except #3 and #7                        │
│   Fix everything but keep #12                     │
│   Apply fixes, skip #5, #8, #15                   │
│                                                     │
│ FIX BY CATEGORY:                                   │
│   Fix color violations                            │
│   Fix typography issues                           │
│   Fix spacing violations                          │
│   Fix accessibility issues                        │
│                                                     │
│ FIX SPECIFIC:                                      │
│   Fix #3, #7, #12                                 │
│   Fix issues 1-10                                 │
│                                                     │
│ PREVIEW:                                           │
│   Show me what would change for #5               │
│   Show me what all fixes would look like         │
│                                                     │
└─────────────────────────────────────────────────────┘
```
