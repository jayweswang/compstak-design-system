---
name: prototype-from
description: Build interactive HTML prototypes from Figma frames or templates. Components follow design system specifications for colors, typography, spacing, and behavior. Use when the user wants to create a prototype, build from a Figma design, or start from a template.
---

# Prototype From Figma or Template

Create interactive HTML prototypes that adhere to the Compstak design system. Prototypes can be built from Figma frames or existing templates.

## Prerequisites

Before prototyping, understand the design system:
- Read `design-system.index.mdc` for token definitions
- Check `component-behaviors.md` for interactive component specifications
- Review `rules/*.rules.mdc` for specific component rules

## Approach 1: Prototype from Figma Frame

When the user provides a Figma frame URL or node ID:

### Step 1: Extract design context
Use the Figma tools to get the design:
- `user-Figma-get_design_context` for structure and styles
- `user-Figma-get_screenshot` for visual reference
- `user-Figma-get_variable_defs` if design uses variables

### Step 2: Analyze components
Identify reusable components in the design:
- Buttons
- Input fields
- Dropdowns/selects
- Checkboxes/radios
- Modals
- Cards
- Navigation elements

### Step 3: Build HTML structure
Create semantic HTML that matches the Figma hierarchy:
- Use proper HTML5 elements (`<button>`, `<input>`, `<nav>`, etc.)
- Apply design system classes if available
- Maintain visual hierarchy from design

### Step 4: Apply design system styles
Reference design system tokens for:
- **Colors**: Use token values from `design-system.index.mdc`
- **Typography**: Follow rules from `rules/typography.rules.mdc`
- **Spacing**: Use standard spacing scale
- **Interactive states**: Hover, focus, active, disabled

### Step 5: Add component behaviors
Implement interactive behaviors based on `component-behaviors.md`:
- Button click states
- Form field validation
- Dropdown interactions
- Modal open/close
- Navigation behavior

### Step 6: Verify compliance
After building, run the design-review skill to check compliance:
```
Review this prototype against the design system
```

## Approach 2: Prototype from Template

When the user wants to start from a template:

### Step 1: List available templates
Show templates from `templates/` directory:
```bash
ls -la .cursor/skills/prototype-from/templates/
```

### Step 2: Copy and customize
1. Copy the selected template HTML
2. Customize content and layout per user needs
3. Ensure all components follow design system

### Step 3: Verify compliance
Run design-review to validate the implementation.

## Component Behavior Specifications

For detailed interactive behavior of each component, see [component-behaviors.md](component-behaviors.md).

Quick reference:
- **Buttons**: Primary, secondary, tertiary styles with hover/active states
- **Forms**: Real-time validation, error states, success states
- **Modals**: Open/close animations, backdrop behavior, focus trapping
- **Dropdowns**: Keyboard navigation, selection behavior

## Creating New Templates

To add templates for future use, see [TEMPLATES.md](TEMPLATES.md) for guidelines on creating reusable template files.

## Output Format

Generate a standalone HTML file with:
- Embedded CSS (or link to design system stylesheet if available)
- Embedded JavaScript for interactivity
- Responsive design considerations
- Accessibility attributes (ARIA labels, roles)
- Comments explaining key sections

### File naming convention
- `prototype-[feature-name].html` for Figma-based prototypes
- `demo-[component-name].html` for component demos

## Validation Checklist

Before delivering the prototype:
- [ ] All colors match design system tokens
- [ ] Typography follows design system rules
- [ ] Interactive components have proper states
- [ ] Responsive breakpoints work correctly
- [ ] Accessibility attributes are present
- [ ] JavaScript functionality works as expected
- [ ] Code is clean and commented

## Example Usage

**From Figma:**
```
User: "Create a prototype from this Figma frame: [Figma URL]"
Agent: 
1. Extracts design using Figma tools
2. Identifies components (buttons, inputs, etc.)
3. Builds HTML with design system tokens
4. Adds interactivity per component-behaviors.md
5. Validates with design-review skill
```

**From Template:**
```
User: "Build a prototype from the modal template"
Agent:
1. Lists available templates
2. Copies modal template
3. Customizes per user needs
4. Validates compliance
```

## Related Skills

- **design-review**: Validate prototypes against design system
- Figma tools: Extract design context from Figma files

## Troubleshooting

**Issue**: Components don't match design system
**Solution**: Run design-review skill and fix flagged violations

**Issue**: Interactive behavior not working
**Solution**: Check component-behaviors.md for correct implementation

**Issue**: Missing design tokens
**Solution**: Verify design-system.index.mdc has required token definitions
