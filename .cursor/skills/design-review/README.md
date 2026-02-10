# Design Review Skill

Comprehensive design system compliance checking and automatic fixing for Figma designs and code implementations.

---

## What It Does

Automatically reviews your designs and code against the Compstak design system and fixes violations with a single command—or step-by-step by category for careful review.

**Checks:**
- 🎨 Token hierarchy and color compliance
- ✏️ Typography (font stacks, weights, sizes)
- 📏 Spacing (padding, margins, gaps)
- 🧩 Component rules (button limits, layouts)
- ♿ Accessibility (ARIA, focus, keyboard)
- 🔗 Cross-component composition

**Fixes automatically** with progress tracking and selective exclusion.

---

## Quick Start

### Run a Review
```
/design-review @your-file.html
```

### Fix Everything (Fast)
```
fix all violations
```
✅ 2 minutes, all done

### Fix Step-by-Step (Careful)
```
fix color violations
fix spacing violations
fix typography violations
fix component rule violations
fix accessibility violations
```
✅ 15 minutes, test between steps

**See [QUICK-START.md](QUICK-START.md) for commands and examples**

---

## Example Output

When you run `/design-review @demo-export-modal-bad.html`:

```
## Design Review Summary

Results:
  - 🎨 Colors: 28 issues (39%)
  - 📏 Spacing: 20 issues (28%)
  - ✏️ Typography: 11 issues (15%)
  - ♿ Accessibility: 8 issues (11%)
  - 🧩 Component Rules: 5 issues (7%)

Total: 72 violations, 0% compliant

Fix options:
  • fix all violations (quick - 2 min)
  • fix color violations (then spacing, etc.) (step-by-step - 15 min)
```

**See [OUTPUT-EXAMPLE.md](OUTPUT-EXAMPLE.md) for complete example with all violations listed**

---

## Files in This Skill

| File | Purpose | When to Read |
|------|---------|--------------|
| **[QUICK-START.md](QUICK-START.md)** | 30-second guide | Start here! |
| **[SKILL.md](SKILL.md)** | Main skill documentation | Full details |
| **[OUTPUT-EXAMPLE.md](OUTPUT-EXAMPLE.md)** | Real output example | See what review looks like |
| **[WORKFLOW-EXAMPLE.md](WORKFLOW-EXAMPLE.md)** | Compare workflows | Choose quick vs step-by-step |
| **[CATEGORIES.md](CATEGORIES.md)** | Category reference | Understand violation types |
| **[FIX-GUIDE.md](FIX-GUIDE.md)** | Fix commands reference | All fix commands |
| **[fix-patterns.md](fix-patterns.md)** | Technical fix patterns | How fixes work internally |
| **[examples.md](examples.md)** | 11 detailed examples | Learn from examples |
| **[token-reference.md](token-reference.md)** | Token quick lookup | Token cheat sheet |

---

## Common Use Cases

### Use Case 1: Quick Compliance Check
```
/design-review @component.html
# See: 5 violations
fix all violations
# Done: 100% compliant
```

### Use Case 2: Learning the Design System
```
/design-review @component.html
# See: Violations categorized
fix color violations
# Learn: What color tokens exist and when to use them
fix spacing violations
# Learn: Spacing scale and usage
[... continue through categories ...]
```

### Use Case 3: Production Code Review
```
/design-review @critical-component.html
# See: 20 violations

fix color violations
fix spacing violations
fix typography violations
# [All safe mechanical fixes applied]

review component rule violations
# [Carefully review 3 issues - removes buttons]
fix component rule violations

review accessibility violations
# [Carefully review 5 issues - changes HTML]
fix accessibility violations
```

### Use Case 4: Keep Custom Styling
```
/design-review @branded-component.html
# See: 15 violations including custom brand colors

fix all except #3, #5, #9
# Fixes 12 issues, keeps 3 intentional deviations
```

---

## What Gets Fixed Automatically

### ✅ Safe Mechanical Fixes (High Confidence)
- **🎨 Colors:** Hard-coded → semantic tokens
- **📏 Spacing:** Hard-coded px → spacing tokens
- **✏️ Typography:** Font stacks, weights, sizes → tokens

### ⚠️ Structural Fixes (Review Recommended)
- **🧩 Component Rules:** Remove buttons, change layouts
- **♿ Accessibility:** Change HTML structure, add ARIA

**Recommendation:** Use quick fix for token categories, review for structural categories.

---

## Command Cheat Sheet

```bash
# REVIEW (no changes)
/design-review @file.html              # Full categorized report
review [category] violations           # Show category only

# FIX ALL (quick)
fix all violations                     # Fix everything at once

# FIX BY CATEGORY (step-by-step)
fix color violations                   # 🎨
fix spacing violations                 # 📏
fix typography violations              # ✏️
fix component rule violations          # 🧩
fix accessibility violations           # ♿

# FIX WITH EXCLUSIONS
fix all except #3, #7                  # Skip specific issues
fix colors except #5                   # Fix category, skip some
fix all except accessibility           # Fix all but one category
```

---

## Real-World Example

**File:** `demo-export-modal-bad.html`  
**Violations:** 72 (28 colors, 20 spacing, 11 typography, 8 a11y, 5 component)  
**Time to fix:** 2 minutes (quick) or 15 minutes (step-by-step)  
**Result:** 0 violations, 100% compliant, production-ready

**Before:**
- 28 hard-coded hex colors
- 20 hard-coded spacing values
- 11 typography violations
- 4 buttons in modal (max is 3)
- Missing ARIA attributes
- Non-semantic HTML

**After:**
- All colors use semantic tokens
- All spacing uses spacing tokens
- Typography follows design system
- 2 buttons (correct layout)
- Full ARIA compliance
- Semantic HTML throughout

**See [WORKFLOW-EXAMPLE.md](WORKFLOW-EXAMPLE.md) for the complete walkthrough**

---

## Getting Started

1. **Read [QUICK-START.md](QUICK-START.md)** (30 seconds)
2. **Run your first review:** `/design-review @your-file.html`
3. **Choose workflow:** Quick or step-by-step
4. **Apply fixes:** `fix all violations` or by category

That's it! The skill handles the rest automatically.

---

## Support

- **Questions about categories?** Read [CATEGORIES.md](CATEGORIES.md)
- **Want to see examples?** Read [examples.md](examples.md)
- **Need fix commands?** Read [FIX-GUIDE.md](FIX-GUIDE.md)
- **Want technical details?** Read [SKILL.md](SKILL.md)
