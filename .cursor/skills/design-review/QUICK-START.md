# Design Review Quick Start

Get started with design review in 30 seconds.

---

## Basic Usage

### 1️⃣ Run Review
```
/design-review @your-file.html
```

### 2️⃣ Choose Your Path

**Fast Path (2 min):**
```
fix all violations
```

**Careful Path (15 min):**
```
fix color violations
fix spacing violations
fix typography violations
fix component rule violations
fix accessibility violations
```

**Preview Only:**
```
review color violations
review [category] violations
```

---

## What You'll See

### Review Output
```
## Design Review Summary

Results:
  - 🎨 Colors: 28 issues
  - 📏 Spacing: 20 issues
  - ✏️ Typography: 11 issues
  - 🧩 Component Rules: 5 issues
  - ♿ Accessibility: 8 issues

Total: 72 violations

Options:
  Quick: fix all violations
  Step-by-step: fix color violations (then spacing, etc.)
```

### After Fixing
```
✅ Fixed 28 violations

Progress:
  🎨 Colors:          ████████████████████ 100% ✅
  📏 Spacing:         ░░░░░░░░░░░░░░░░░░░░   0%
  ✏️ Typography:      ░░░░░░░░░░░░░░░░░░░░   0%
  🧩 Component Rules: ░░░░░░░░░░░░░░░░░░░░   0%
  ♿ Accessibility:    ░░░░░░░░░░░░░░░░░░░░   0%

Overall: 39% complete
Next: fix spacing violations
```

---

## Categories Explained

| Icon | Category | What Gets Fixed |
|------|----------|-----------------|
| 🎨 | Colors | `#0066CC` → `var(--color-action-primary-default)` |
| 📏 | Spacing | `20px` → `var(--space-4)` |
| ✏️ | Typography | Font stack, weights (500/400), sizes |
| 🧩 | Component Rules | Button limits, layouts, states |
| ♿ | Accessibility | ARIA, focus, semantic HTML, keyboard |

---

## Common Commands

```bash
# Review
/design-review @file.html

# Fix everything
fix all violations

# Fix by category
fix color violations
fix typography violations
fix spacing violations
fix component rule violations
fix accessibility violations

# Fix with exceptions
fix all except #3, #7, #12

# Preview only
review color violations
review accessibility violations
```

---

## Which Workflow?

### Choose Quick Fix if:
- ✅ Demo or prototype file
- ✅ Trust automated fixes
- ✅ Time is limited

### Choose Step-by-Step if:
- ✅ Production code
- ✅ Learning design system
- ✅ Want to test between fixes
- ✅ Team review/approval needed

---

## More Info

- **[OUTPUT-EXAMPLE.md](OUTPUT-EXAMPLE.md)** - See full review output example
- **[WORKFLOW-EXAMPLE.md](WORKFLOW-EXAMPLE.md)** - Compare both workflows
- **[CATEGORIES.md](CATEGORIES.md)** - Deep dive on each category
- **[FIX-GUIDE.md](FIX-GUIDE.md)** - Complete fix command reference
