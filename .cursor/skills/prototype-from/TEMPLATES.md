# Creating Prototype Templates

This guide explains how to create reusable prototype templates for common UI patterns.

## Purpose

Templates provide pre-built starting points for prototypes, ensuring:
- Consistency across prototypes
- Faster prototype creation
- Design system compliance by default
- Reusable patterns for common use cases

## Template Structure

Each template is a standalone HTML file in the `templates/` directory with:
- Complete HTML structure
- Embedded CSS (using design system tokens)
- Embedded JavaScript for interactivity
- Placeholder content that's easy to customize
- Comments explaining customization points

## Template Naming Convention

```
templates/
├── modal-[variant].html
├── form-[type].html
├── card-[layout].html
├── dashboard-[style].html
└── landing-[pattern].html
```

Examples:
- `modal-confirmation.html`
- `form-multi-step.html`
- `card-grid-3col.html`
- `dashboard-analytics.html`

## Template Metadata

Each template should include metadata in HTML comments at the top:

```html
<!--
TEMPLATE: Modal - Confirmation Dialog
DESCRIPTION: A centered modal with title, message, and two action buttons (Cancel/Confirm)
COMPONENTS: Modal, Button (Primary), Button (Secondary)
USE CASES: Delete confirmations, destructive actions, user confirmations
LAST UPDATED: 2026-02-10
-->
```

## Essential Template Patterns

Create templates for these common patterns:

### 1. Modal Patterns
- **Confirmation Modal**: Cancel/Confirm buttons
- **Form Modal**: Input fields with save/cancel
- **Info Modal**: Single close button
- **Multi-step Modal**: Wizard-style with next/back/finish

### 2. Form Patterns
- **Basic Form**: Standard form fields with submit
- **Multi-step Form**: Progressive form with steps indicator
- **Search Form**: Search input with filters
- **Login Form**: Username/password with validation

### 3. Card Layouts
- **Card Grid**: Responsive grid of cards
- **Card List**: Vertical list of cards
- **Dashboard Cards**: Stats/metrics cards
- **Product Cards**: Image, title, description, CTA

### 4. Navigation Patterns
- **Top Nav**: Horizontal navigation bar
- **Side Nav**: Vertical sidebar navigation
- **Tabs**: Tab-based content switching
- **Breadcrumbs**: Hierarchical navigation

### 5. Data Display
- **Table**: Data table with sorting/filtering
- **List**: Styled list with actions
- **Timeline**: Chronological event display
- **Dashboard**: Multi-widget layout

## Template Requirements

Every template must:

### 1. Use Design System Tokens
```css
/* Good - uses design system tokens */
.modal {
  background-color: var(--color-background-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}

/* Bad - hardcoded values */
.modal {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
```

### 2. Include All States
Show examples of:
- Default state
- Hover state
- Active/pressed state
- Disabled state
- Error state (if applicable)
- Loading state (if applicable)

### 3. Be Responsive
Include responsive breakpoints:
```css
/* Mobile-first approach */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 4. Include Accessibility
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader considerations

```html
<!-- Good -->
<button 
  type="button" 
  aria-label="Close modal"
  aria-controls="modal-1"
>
  <span aria-hidden="true">&times;</span>
</button>

<!-- Bad -->
<div onclick="closeModal()">
  &times;
</div>
```

### 5. Document Customization Points
Use HTML comments to mark areas for customization:

```html
<!-- START: CUSTOMIZE - Modal Title -->
<h2 class="modal-title">Confirm Action</h2>
<!-- END: CUSTOMIZE -->

<!-- START: CUSTOMIZE - Modal Content -->
<p class="modal-message">
  Are you sure you want to proceed with this action?
</p>
<!-- END: CUSTOMIZE -->

<!-- START: CUSTOMIZE - Button Text -->
<button class="btn-secondary">Cancel</button>
<button class="btn-primary">Confirm</button>
<!-- END: CUSTOMIZE -->
```

## Template File Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Template Name</title>
  
  <style>
    /* === Design System Tokens === */
    :root {
      /* Include relevant tokens from design-system.index.mdc */
    }
    
    /* === Base Styles === */
    /* Reset and base styles */
    
    /* === Component Styles === */
    /* Template-specific component styles */
    
    /* === Responsive Styles === */
    /* Media queries */
  </style>
</head>
<body>
  <!-- Template content with customization markers -->
  
  <script>
    // === Interactive Behavior ===
    // Component behavior following component-behaviors.md
    
    // === Helper Functions ===
    // Utility functions
  </script>
</body>
</html>
```

## Creating a New Template

Follow these steps:

### Step 1: Identify the Pattern
- What UI pattern does this template solve?
- What are common use cases?
- What components are involved?

### Step 2: Build Base Structure
- Create semantic HTML structure
- Use design system tokens for styling
- Implement component behaviors from `component-behaviors.md`

### Step 3: Add Interactivity
- Include necessary JavaScript
- Follow behavior specifications
- Handle edge cases

### Step 4: Document Customization
- Mark customization points with comments
- Add template metadata at the top
- Include usage examples in comments

### Step 5: Test and Validate
- Test all interactive states
- Verify responsive behavior
- Check accessibility
- Run through design-review skill

### Step 6: Save to Templates Directory
```bash
# Save with descriptive name
.cursor/skills/prototype-from/templates/[pattern-name].html
```

## Template Maintenance

When updating templates:
- Note the `LAST UPDATED` date in metadata
- Document breaking changes in comments
- Keep deprecated templates in `templates/deprecated/`
- Update TEMPLATES.md if adding new patterns

## Example Template Checklist

Before adding a template, verify:
- [ ] Uses design system tokens (no hardcoded values)
- [ ] Includes all component states
- [ ] Responsive across breakpoints
- [ ] Accessible (ARIA, keyboard nav, semantic HTML)
- [ ] Customization points marked with comments
- [ ] Metadata block at top of file
- [ ] Interactive behavior follows component-behaviors.md
- [ ] Tested in multiple browsers
- [ ] Passes design-review validation

## Template TODO List

Templates needed (priority order):
1. [ ] `modal-confirmation.html` - Basic confirmation modal
2. [ ] `modal-form.html` - Modal with form fields
3. [ ] `form-basic.html` - Standard form layout
4. [ ] `form-multi-step.html` - Multi-step wizard form
5. [ ] `card-grid-3col.html` - Responsive 3-column card grid
6. [ ] `dashboard-basic.html` - Basic dashboard layout
7. [ ] `nav-top.html` - Top navigation bar
8. [ ] `nav-side.html` - Sidebar navigation
9. [ ] `table-data.html` - Sortable data table
10. [ ] `landing-hero.html` - Landing page with hero section

## Contributing Templates

To contribute a new template:
1. Create the template following this guide
2. Test thoroughly
3. Add to the TODO list above (check it off)
4. Document any special considerations
5. Note in commit message: "Add template: [template-name]"

---

## Quick Reference: Token Usage

When building templates, reference these files:
- **Colors**: `design-system.index.mdc` - Color tokens
- **Typography**: `rules/typography.rules.mdc` - Font rules
- **Spacing**: `design-system.index.mdc` - Spacing scale
- **Components**: `component-behaviors.md` - Behavior specs
- **Validation**: Run `design-review` skill on finished template
