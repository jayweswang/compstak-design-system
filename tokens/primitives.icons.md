# Primitive Icons

## Metadata

- **Type**: primitives.icons
- **Version**: 1.0.0
- **Source of Truth**: Material Symbols (Google)
- **Rules Reference**: [components.rules.mdc](../rules/components.rules.mdc)
- **Local Copy**: `material-design-icons/` directory in this repository

**Notes**: This file defines the icon library used in the design system. All icons use Material Symbols, the modern variable font icon set from Google.

---

## Library

| Property | Value |
|----------|-------|
| Name | Material Symbols Outlined |
| Version | latest |
| Type | Variable Font |
| URL | https://fonts.google.com/icons |
| CDN | https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined |
| Local | material-design-icons/variablefont/ |

---

## Usage

### Web Implementation

Include the Material Symbols font in your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

Use icons with the `material-symbols-outlined` class:

```html
<span class="material-symbols-outlined">download</span>
<span class="material-symbols-outlined">close</span>
<span class="material-symbols-outlined">check</span>
```

### Variable Font Customization

Material Symbols supports CSS variable font axes:

```css
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,      /* 0 = outlined, 1 = filled */
    'wght' 400,    /* 100-700 weight */
    'GRAD' 0,      /* -25 to 200 grade */
    'opsz' 24;     /* 20-48 optical size */
}
```

---

## Common Icons

| Icon Name | Usage | Notes |
|-----------|-------|-------|
| download / file_download | Export, download actions | Use `file_download` for document downloads |
| close | Close modal, dialog, panel | |
| check | Confirm, success state | |
| delete | Delete action | Use with destructive intent |
| edit | Edit action | |
| add | Add new item | |
| search | Search input | |
| arrow_back | Navigate back | |
| arrow_forward | Navigate forward | |
| arrow_drop_down | Dropdown indicator | |
| arrow_drop_up | Collapsed state | |
| more_vert | Menu (vertical) | |
| more_horiz | Menu (horizontal) | |
| filter_list | Filter controls | |
| sort | Sort controls | |
| info | Information tooltip | |
| warning | Warning state | |
| error | Error state | |

**Notes**: 
- Browse all available icons at https://fonts.google.com/icons
- Use `file_download` for export/download actions
- Use `close` for modal close buttons
- Icon size is controlled by font-size CSS property
