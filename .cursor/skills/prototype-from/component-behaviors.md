# Component Behavior Specifications

This file defines the interactive behavior of design system components. Use these specifications when building prototypes to ensure consistent component functionality.

## Buttons

### Primary Button
**Visual States:**
- Default: Primary color background, white text
- Hover: Darker shade of primary color
- Active/Pressed: Even darker shade
- Disabled: Reduced opacity, no pointer events

**Behavior:**
- Cursor changes to pointer on hover
- Provides visual feedback on click (active state)
- Focus ring appears for keyboard navigation
- Disabled buttons show cursor: not-allowed

**Implementation:**
```css
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  transition: background-color 0.2s ease;
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
}

.btn-primary:active:not(:disabled) {
  background-color: var(--color-primary-darker);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Secondary Button
Same state patterns as primary, but with secondary styling (typically outlined or ghost style).

### Icon Buttons
- Circular or square touch targets (minimum 44x44px)
- Hover shows background highlight
- Includes aria-label for accessibility

## Form Fields

### Text Input
**Visual States:**
- Default: Border with neutral color
- Focus: Highlighted border (primary color)
- Error: Red border with error message below
- Success: Green border with success indicator
- Disabled: Grayed out, no interaction

**Behavior:**
- Focus ring appears on tab/click
- Error state shows on blur if validation fails
- Error message appears below field
- Label animates or changes on focus (if floating label pattern)

**Implementation:**
```css
.input {
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease;
}

.input:focus {
  border-color: var(--color-primary);
  outline: 2px solid var(--color-primary-light);
}

.input.error {
  border-color: var(--color-error);
}

.input:disabled {
  background-color: var(--color-gray-100);
  cursor: not-allowed;
}
```

### Select/Dropdown
**Behavior:**
- Click opens dropdown menu
- Arrow keys navigate options
- Enter/Space selects highlighted option
- Escape closes dropdown
- Selected value displays in field
- Dropdown closes on outside click

**States:**
- Closed: Shows selected value with down arrow
- Open: Expands to show options, arrow rotates up
- Hover: Highlights option
- Selected: Shows checkmark or highlight

### Checkbox
**Behavior:**
- Click toggles checked state
- Space bar toggles when focused
- Visual indicator for checked/unchecked

**States:**
- Unchecked: Empty box
- Checked: Box with checkmark
- Indeterminate: Box with dash (for parent checkboxes)
- Disabled: Grayed out

### Radio Button
**Behavior:**
- Click selects, deselects siblings in group
- Arrow keys navigate within radio group
- Only one can be selected per group

**States:**
- Unselected: Empty circle
- Selected: Filled circle
- Disabled: Grayed out

## Modal/Dialog

**Behavior:**
- Opens with backdrop (semi-transparent overlay)
- Backdrop click closes modal (unless specified otherwise)
- ESC key closes modal
- Focus trapped within modal when open
- First focusable element receives focus on open
- Focus returns to trigger element on close
- Body scroll locked when modal is open

**Animation:**
- Fade in backdrop (0.2s)
- Scale up or slide down modal content (0.3s)
- Reverse animation on close

**Implementation:**
```javascript
// Basic modal behavior
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = modal.querySelector('.modal-backdrop');
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus first focusable element
  const firstFocusable = modal.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) firstFocusable.focus();
  
  // Close on backdrop click
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal(modalId);
  });
  
  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal(modalId);
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
```

## Cards

**Behavior:**
- Hover effect (subtle lift or border change)
- Clickable cards have pointer cursor
- Entire card is clickable if it's a link/action

**States:**
- Default: Base elevation/shadow
- Hover: Increased elevation, subtle scale
- Active: Slight depression effect (optional)

## Navigation

### Primary Navigation
**Behavior:**
- Highlights current page/section
- Hover shows background highlight
- Mobile: Collapses to hamburger menu
- Keyboard accessible (tab navigation)

### Tabs
**Behavior:**
- Click switches active tab and content
- Arrow keys navigate between tabs
- Active tab has visual indicator (underline, background)
- Content fades in on switch (optional)

## Tooltips

**Behavior:**
- Appears on hover after brief delay (0.3s)
- Disappears on mouse leave
- Positions intelligently (flips if near edge)
- Shows on focus for keyboard users

## Loading States

### Spinner
- Rotates continuously
- Centered in container
- Replaces content or overlays it

### Skeleton Screens
- Shimmer animation
- Matches layout of content being loaded
- Replaces with real content when ready

### Progress Indicators
- Shows completion percentage
- Smooth animation between states

## Error States

### Inline Errors (Form Fields)
- Red border on invalid field
- Error message below field
- Icon indicating error (optional)
- Clears when user corrects input

### Toast/Alert Notifications
**Behavior:**
- Slides in from top or bottom
- Auto-dismisses after timeout (4-6s)
- Manual dismiss with X button
- Stack multiple toasts

**Types:**
- Success: Green background, checkmark icon
- Error: Red background, X icon
- Warning: Yellow background, alert icon
- Info: Blue background, info icon

## Accessibility Requirements

All interactive components must include:
- **Focus indicators**: Visible outline/ring
- **ARIA labels**: For icon buttons and complex widgets
- **ARIA states**: `aria-expanded`, `aria-checked`, `aria-selected`
- **Keyboard navigation**: All interactions accessible via keyboard
- **Screen reader text**: Hidden labels for context

## Animation Timing

Standard durations:
- Micro-interactions: 0.1-0.2s (hover, active states)
- Transitions: 0.2-0.3s (modals, dropdowns)
- Page transitions: 0.3-0.5s

Easing functions:
- `ease-out` for exits
- `ease-in` for entrances
- `ease-in-out` for both directions

---

## TODO: Complete Specifications

The following components need behavior specifications added:
- [ ] Accordion/Collapsible panels
- [ ] Date picker
- [ ] Time picker
- [ ] Pagination
- [ ] Breadcrumbs
- [ ] Badge/Chip
- [ ] Stepper
- [ ] Search input with autocomplete
- [ ] File upload
- [ ] Toggle switch
- [ ] Range slider
- [ ] Multi-select
- [ ] Tree view
- [ ] Data table (sorting, filtering)

**To add a component specification:**
1. Define all visual states
2. Document interactive behavior
3. Provide implementation example
4. Include accessibility requirements
5. Note any responsive considerations
