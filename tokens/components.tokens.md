# Component Tokens

## Metadata

- **Type**: components.tokens
- **Version**: 1.0.0
- **Source of Truth**: Figma Variables
- **Rules Reference**: [components.rules.mdc](../rules/components.rules.mdc)

**Notes**: This file contains component-specific token mappings that reference semantic tokens from semantics.colors.md, semantics.typography.md, semantics.layout.md, and semantics.responsive.md. Component tokens must reference semantic tokens, never primitives directly. Usage rules are defined in components.rules.mdc.

---

## Ai-Adornment

### Color

| Token | Reference | Type |
|-------|-----------|------|
| ai-adornment/color/default | ai/default | COLOR |
| ai-adornment/color/on-dark | ai/on-dark | COLOR |

### Size

| Token | Reference | Type |
|-------|-----------|------|
| ai-adornment/size/default | 10 | FLOAT |
| ai-adornment/size/sm | 8 | FLOAT |

## Attribute List

### Layout

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/layout/gap | space/2 | FLOAT |

### Row / Divider

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/row/divider/border | content/primary/border/on-light | COLOR |
| attribute-list/row/divider/width | 0.5 | FLOAT |

### Row / Label

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/row/label/text | content/secondary/text/on-light | COLOR |

### Row / Value

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/row/value/text | content/primary/text/on-light | COLOR |

### Row / Value / Comparison

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/row/value/comparison/negative | status/error | COLOR |
| attribute-list/row/value/comparison/positive | status/success | COLOR |

### Row / Value / Link

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/row/value/link/decoration | font-style/underline | STRING |
| attribute-list/row/value/link/text | content/primary/text/link | COLOR |

### Row / Value / Subtext

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/row/value/subtext/text | content/secondary/border/on-light | COLOR |

### Section / Ai

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/section/ai/border | ai-adornment/color/default | COLOR |
| attribute-list/section/ai/icon | ai-adornment/color/default | COLOR |
| attribute-list/section/ai/text | ai-adornment/color/default | COLOR |

### Section / Default

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/section/default/border | content/primary/border/on-light | COLOR |
| attribute-list/section/default/text | content/primary/text/on-light | COLOR |

### Section / Layout

| Token | Reference | Type |
|-------|-----------|------|
| attribute-list/section/layout/gap | 1 | FLOAT |
| attribute-list/section/layout/width | 1 | FLOAT |

## Button

### Base

| Token | Reference | Type |
|-------|-----------|------|
| button/base/font-family | type/label/default/font-family | STRING |
| button/base/font-size | type/label/default/font-size | FLOAT |
| button/base/font-weight | font-weight/400 | STRING |
| button/base/letter-spacing | type/label/default/letter-spacing | FLOAT |
| button/base/line-height | type/label/default/line-height | FLOAT |
| button/base/radius | radius/xs | FLOAT |

### Intent / Alert

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/alert/disabled | status/disabled | COLOR |
| button/intent/alert/fill-default | action/alert/default | COLOR |
| button/intent/alert/fill-hovered | action/alert/hovered | COLOR |
| button/intent/alert/fill-pressed | action/alert/pressed | COLOR |
| button/intent/alert/on-fill | content/primary/text/on-light | COLOR |
| button/intent/alert/on-fill-disabled | content/primary/text/on-dark | COLOR |

### Intent / Cancel

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/cancel/disabled | status/disabled | COLOR |
| button/intent/cancel/fill-default | action/cancel/default | COLOR |
| button/intent/cancel/fill-hovered | action/cancel/hovered | COLOR |
| button/intent/cancel/fill-pressed | action/cancel/pressed | COLOR |
| button/intent/cancel/on-fill | content/primary/text/on-light | COLOR |
| button/intent/cancel/on-fill-disabled | content/primary/text/on-dark | COLOR |

### Intent / Destructive

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/destructive/disabled | status/disabled | COLOR |
| button/intent/destructive/fill-default | action/destructive/default | COLOR |
| button/intent/destructive/fill-hovered | action/destructive/hovered | COLOR |
| button/intent/destructive/fill-pressed | action/destructive/pressed | COLOR |
| button/intent/destructive/on-fill | content/primary/text/on-dark | COLOR |

### Intent / Primary / Ghost

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/primary/ghost/disabled | status/disabled | COLOR |
| button/intent/primary/ghost/ink | action/primary/default | COLOR |
| button/intent/primary/ghost/surface-hovered | surface/interactive/primary/hovered | COLOR |
| button/intent/primary/ghost/surface-pressed | surface/interactive/primary/selected | COLOR |

### Intent / Primary / Link

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/primary/link/disabled | status/disabled | COLOR |
| button/intent/primary/link/ink | action/primary/default | COLOR |
| button/intent/primary/link/ink-hovered | action/primary/hovered | COLOR |
| button/intent/primary/link/ink-pressed | action/primary/pressed | COLOR |

### Intent / Primary / Outline

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/primary/outline/border | action/primary/default | COLOR |
| button/intent/primary/outline/disabled | status/disabled | COLOR |
| button/intent/primary/outline/ink | action/primary/default | COLOR |
| button/intent/primary/outline/surface-hovered | surface/interactive/primary/hovered | COLOR |
| button/intent/primary/outline/surface-pressed | surface/interactive/primary/selected | COLOR |

### Intent / Primary / Solid

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/primary/solid/disabled | status/disabled | COLOR |
| button/intent/primary/solid/fill-default | action/primary/default | COLOR |
| button/intent/primary/solid/fill-hovered | action/primary/hovered | COLOR |
| button/intent/primary/solid/fill-pressed | action/primary/pressed | COLOR |
| button/intent/primary/solid/on-fill | content/primary/text/on-dark | COLOR |

### Intent / Secondary / Ghost

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/secondary/ghost/disabled | status/disabled | COLOR |
| button/intent/secondary/ghost/ink | content/primary/text/on-light | COLOR |
| button/intent/secondary/ghost/surface-hovered | action/tertiary/hovered | COLOR |
| button/intent/secondary/ghost/surface-pressed | action/tertiary/pressed | COLOR |

### Intent / Secondary / Outline

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/secondary/outline/border | action/secondary/default | COLOR |
| button/intent/secondary/outline/disabled | status/disabled | COLOR |
| button/intent/secondary/outline/ink | content/primary/text/on-light | COLOR |
| button/intent/secondary/outline/surface-hovered | action/tertiary/hovered | COLOR |
| button/intent/secondary/outline/surface-pressed | action/tertiary/pressed | COLOR |

### Intent / Secondary / Solid

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/secondary/solid/disabled | status/disabled | COLOR |
| button/intent/secondary/solid/fill-default | action/secondary/default | COLOR |
| button/intent/secondary/solid/fill-hovered | action/secondary/hovered | COLOR |
| button/intent/secondary/solid/fill-pressed | action/secondary/pressed | COLOR |
| button/intent/secondary/solid/on-fill | content/primary/text/on-dark | COLOR |

### Intent / Tertiary

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/tertiary/disabled | status/disabled | COLOR |
| button/intent/tertiary/fill-default | action/tertiary/default | COLOR |
| button/intent/tertiary/fill-hovered | action/tertiary/hovered | COLOR |
| button/intent/tertiary/fill-pressed | action/tertiary/pressed | COLOR |
| button/intent/tertiary/on-fill | content/primary/text/on-light | COLOR |
| button/intent/tertiary/on-fill-disabled | content/primary/text/on-dark | COLOR |

### Intent / Unlock

| Token | Reference | Type |
|-------|-----------|------|
| button/intent/unlock/disabled | status/disabled | COLOR |
| button/intent/unlock/fill-default | action/unlock/default | COLOR |
| button/intent/unlock/fill-hovered | action/unlock/hovered | COLOR |
| button/intent/unlock/fill-pressed | action/unlock/pressed | COLOR |
| button/intent/unlock/on-fill | content/primary/text/on-dark | COLOR |

### Size / Default

| Token | Reference | Type |
|-------|-----------|------|
| button/size/default/gap | components/button/default/gap | FLOAT |
| button/size/default/icon | icon/size/md | FLOAT |
| button/size/default/min-height | components/button/default/min-height | FLOAT |
| button/size/default/padding-x | components/button/default/padding-x | FLOAT |
| button/size/default/padding-y | components/button/default/padding-y | FLOAT |

### Size / Sm

| Token | Reference | Type |
|-------|-----------|------|
| button/size/sm/gap | components/button/sm/gap | FLOAT |
| button/size/sm/icon | components/icon/size/sm | FLOAT |
| button/size/sm/min-height | components/button/sm/min-height | FLOAT |
| button/size/sm/padding-x | components/button/sm/padding-x | FLOAT |
| button/size/sm/padding-y | components/button/sm/padding-y | FLOAT |

### Style / Ghost

| Token | Reference | Type |
|-------|-----------|------|
| button/style/ghost/border-width | 0 | FLOAT |
| button/style/ghost/container-fill | False | BOOLEAN |
| button/style/ghost/container-hover-fill | True | BOOLEAN |

### Style / Link

| Token | Reference | Type |
|-------|-----------|------|
| button/style/link/border-width | 0 | FLOAT |
| button/style/link/container-fill | False | BOOLEAN |
| button/style/link/container-hover-fill | False | BOOLEAN |

### Style / Outline

| Token | Reference | Type |
|-------|-----------|------|
| button/style/outline/border-width | 1 | FLOAT |
| button/style/outline/container-fill | False | BOOLEAN |
| button/style/outline/container-hover-fill | True | BOOLEAN |

### Style / Solid

| Token | Reference | Type |
|-------|-----------|------|
| button/style/solid/border-width | 0 | FLOAT |
| button/style/solid/container-fill | True | BOOLEAN |
| button/style/solid/container-hover-fill | True | BOOLEAN |

## Comp-Overview

### Container

| Token | Reference | Type |
|-------|-----------|------|
| comp-overview/container/background | surface/base | COLOR |
| comp-overview/container/border | content/tertiary/border/on-light | COLOR |
| comp-overview/container/border-width | 1 | FLOAT |
| comp-overview/container/gap | property-overview/container/layout/gap | FLOAT |
| comp-overview/container/padding-x | property-overview/container/padding-x | FLOAT |
| comp-overview/container/padding-y | property-overview/container/padding-y | FLOAT |
| comp-overview/container/show Property | comp-overview/container/layout/showProperty | BOOLEAN |

### Container / Layout

| Token | Reference | Type |
|-------|-----------|------|
| comp-overview/container/layout/gap | comp-overview/container/gap | FLOAT |
| comp-overview/container/layout/snapshot-gap | 0 | FLOAT |

### Identity

| Token | Reference | Type |
|-------|-----------|------|
| comp-overview/identity/address | content/primary/text/link | COLOR |
| comp-overview/identity/apn | content/secondary/text/on-light | COLOR |
| comp-overview/identity/location | content/secondary/text/on-light | COLOR |
| comp-overview/identity/market | content/secondary/text/on-light | COLOR |
| comp-overview/identity/subtitle | content/primary/text/on-light | COLOR |
| comp-overview/identity/tenant | content/primary/text/link | COLOR |

## Filter Group

### Header / Icon

| Token | Reference | Type |
|-------|-----------|------|
| filter-group/header/icon/icon | icon/size/md | FLOAT |

### Header / Layout

| Token | Reference | Type |
|-------|-----------|------|
| filter-group/header/layout/gap | components/filter-group/header/layout/gap | FLOAT |
| filter-group/header/layout/height | components/filter-group/header/layout/height | FLOAT |
| filter-group/header/layout/padding-x | components/filter-group/header/layout/padding-x | FLOAT |

### Layout

| Token | Reference | Type |
|-------|-----------|------|
| filter-group/layout/gap-header-to-body | components/filter-group/layout/gap-header-to-body | FLOAT |
| filter-group/layout/gap-items | components/filter-group/layout/gap-items | FLOAT |
| filter-group/layout/gap-section | components/filter-group/layout/gap-section | FLOAT |
| filter-group/layout/padding-x | components/filter-group/layout/padding-x | FLOAT |
| filter-group/layout/padding-y | components/filter-group/layout/padding-y | FLOAT |

### Surface / Default

| Token | Reference | Type |
|-------|-----------|------|
| filter-group/surface/default/background | transparent | COLOR |
| filter-group/surface/default/border | content/tertiary/border/on-light | COLOR |
| filter-group/surface/default/icon | content/primary/border/on-light | COLOR |
| filter-group/surface/default/text | content/primary/text/on-light | COLOR |

### Surface / Inverse

| Token | Reference | Type |
|-------|-----------|------|
| filter-group/surface/inverse/background | transparent | COLOR |
| filter-group/surface/inverse/border | transparent | COLOR |
| filter-group/surface/inverse/icon | accent/brand | COLOR |
| filter-group/surface/inverse/text | accent/brand | COLOR |

## Icon

### Checkbox / Size

| Token | Reference | Type |
|-------|-----------|------|
| icon/checkbox/size/md | icon/size/md | FLOAT |
| icon/checkbox/size/sm | icon/size/sm | FLOAT |

### Lock / Size

| Token | Reference | Type |
|-------|-----------|------|
| icon/lock/size/lg | icon/size/lg | FLOAT |
| icon/lock/size/md | icon/size/md | FLOAT |

### Pin / Size

| Token | Reference | Type |
|-------|-----------|------|
| icon/pin/size/lg | icon/size/lg | FLOAT |
| icon/pin/size/md | icon/size/md | FLOAT |
| icon/pin/size/sm | icon/size/sm | FLOAT |
| icon/pin/size/xs | icon/size/xs | FLOAT |

### Size

| Token | Reference | Type |
|-------|-----------|------|
| icon/size/lg | components/icon/size/lg | FLOAT |
| icon/size/md | components/icon/size/md | FLOAT |
| icon/size/sm | components/icon/size/sm | FLOAT |
| icon/size/xs | components/icon/size/xs | FLOAT |

### Style

| Token | Reference | Type |
|-------|-----------|------|
| icon/style/fill | 0 | FLOAT |
| icon/style/grade | 0 | FLOAT |
| icon/style/optical-size | 0 | FLOAT |
| icon/style/weight | 0 | FLOAT |

## Input

### Container / Border

| Token | Reference | Type |
|-------|-----------|------|
| input/container/border/border-radius | radius/xs | FLOAT |
| input/container/border/border-width | 1 | FLOAT |

### Container / Constraints

| Token | Reference | Type |
|-------|-----------|------|
| input/container/constraints/max-width | constraints/control/max-width | FLOAT |

### Size / Default

| Token | Reference | Type |
|-------|-----------|------|
| input/size/default/gap | components/input/default/gap | FLOAT |
| input/size/default/icon | icon/size/md | FLOAT |
| input/size/default/min-height | components/input/default/min-height | FLOAT |
| input/size/default/padding-x | components/input/default/padding-x | FLOAT |
| input/size/default/padding-y | components/input/default/padding-y | FLOAT |

### Size / Lg

| Token | Reference | Type |
|-------|-----------|------|
| input/size/lg/gap | components/input/lg/gap | FLOAT |
| input/size/lg/icon | icon/size/lg | FLOAT |
| input/size/lg/min-height | components/input/lg/min-height | FLOAT |
| input/size/lg/padding-x | components/input/lg/padding-x | FLOAT |
| input/size/lg/padding-y | components/input/lg/padding-y | FLOAT |

### Surface / Default / Base

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/default/base/adornment | content/primary/text/on-light | COLOR |
| input/surface/default/base/background | surface/base | COLOR |
| input/surface/default/base/border | content/secondary/border/on-light | COLOR |
| input/surface/default/base/placeholder | content/tertiary/text/on-light | COLOR |
| input/surface/default/base/text | content/primary/text/on-light | COLOR |

### Surface / Default / State / Disabled

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/default/state/disabled/adornment | status/disabled | COLOR |
| input/surface/default/state/disabled/background | surface/soft | COLOR |
| input/surface/default/state/disabled/text | status/disabled | COLOR |

### Surface / Default / State / Error

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/default/state/error/adornment | status/error | COLOR |
| input/surface/default/state/error/background | surface/status/error | COLOR |
| input/surface/default/state/error/border | status/error | COLOR |
| input/surface/default/state/error/text | status/error | COLOR |

### Surface / Default / State / Focused

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/default/state/focused/adornment | accent/highlight | COLOR |
| input/surface/default/state/focused/background | surface/interactive/primary/selected | COLOR |
| input/surface/default/state/focused/border | accent/highlight | COLOR |

### Surface / Default / State / Hovered

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/default/state/hovered/background | surface/interactive/primary/hovered | COLOR |

### Surface / Inverse / Base

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/inverse/base/adornment | content/primary/text/on-dark | COLOR |
| input/surface/inverse/base/background | surface/inverse-muted | COLOR |
| input/surface/inverse/base/border | content/primary/border/on-dark | COLOR |
| input/surface/inverse/base/placeholder | content/tertiary/text/on-dark | COLOR |
| input/surface/inverse/base/text | content/primary/text/on-dark | COLOR |

### Surface / Inverse / State / Disabled

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/inverse/state/disabled/adornment | status/disabled | COLOR |
| input/surface/inverse/state/disabled/background | surface/interactive/secondary/disabled | COLOR |
| input/surface/inverse/state/disabled/text | status/disabled | COLOR |

### Surface / Inverse / State / Error

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/inverse/state/error/adornment | content/primary/text/on-dark | COLOR |
| input/surface/inverse/state/error/background | surface/interactive/secondary/selected | COLOR |
| input/surface/inverse/state/error/border | status/warning | COLOR |
| input/surface/inverse/state/error/text | content/primary/text/on-dark | COLOR |

### Surface / Inverse / State / Focused

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/inverse/state/focused/background | surface/interactive/secondary/selected | COLOR |
| input/surface/inverse/state/focused/border | content/primary/text/on-dark | COLOR |

### Surface / Inverse / State / Hovered

| Token | Reference | Type |
|-------|-----------|------|
| input/surface/inverse/state/hovered/background | surface/interactive/secondary/hovered | COLOR |
| input/surface/inverse/state/hovered/border | content/primary/text/on-dark | COLOR |

## List Row

### Layout

| Token | Reference | Type |
|-------|-----------|------|
| list-row/layout/gap | components/list-row/gap | FLOAT |
| list-row/layout/height | components/list-row/height | FLOAT |
| list-row/layout/padding-x | components/list-row/padding-x | FLOAT |
| list-row/layout/padding-y | components/list-row/padding-y | FLOAT |

### Surface / Default

| Token | Reference | Type |
|-------|-----------|------|
| list-row/surface/default/background | surface/base | COLOR |
| list-row/surface/default/border | content/primary/border/on-light | COLOR |
| list-row/surface/default/hover-background | surface/interactive/primary/hovered | COLOR |
| list-row/surface/default/selected-background | surface/interactive/primary/selected | COLOR |
| list-row/surface/default/subtext | content/secondary/text/on-light | COLOR |
| list-row/surface/default/text | content/primary/text/on-light | COLOR |

### Surface / Inverse

| Token | Reference | Type |
|-------|-----------|------|
| list-row/surface/inverse/background | surface/inverse-muted | COLOR |
| list-row/surface/inverse/border | content/primary/border/on-dark | COLOR |
| list-row/surface/inverse/hover-background | surface/interactive/secondary/hovered | COLOR |
| list-row/surface/inverse/selected-background | surface/interactive/secondary/selected | COLOR |
| list-row/surface/inverse/subtext | content/secondary/text/on-dark | COLOR |
| list-row/surface/inverse/text | content/primary/text/on-dark | COLOR |

## Modal

### Dialog / Container

| Token | Reference | Type |
|-------|-----------|------|
| modal/dialog/container/background | surface/base | COLOR |
| modal/dialog/container/border | content/secondary/border/on-light | COLOR |
| modal/dialog/container/border-width | 1 | FLOAT |
| modal/dialog/container/max-width | constraints/modal/dialog/max-width | FLOAT |
| modal/dialog/container/min-width | constraints/modal/dialog/min-width | FLOAT |
| modal/dialog/container/padding-x | constraints/modal/dialog/padding-x | FLOAT |
| modal/dialog/container/padding-y | constraints/modal/dialog/padding-y | FLOAT |
| modal/dialog/container/radius | radius/xs | FLOAT |

### Dialog / Header / Close-button

| Token | Reference | Type |
|-------|-----------|------|
| modal/dialog/header/close-button/icon | content/primary/text/on-light | COLOR |
| modal/dialog/header/close-button/size | components/modal/dialog/header/close-button/size | FLOAT |

### Dialog / Header / Description

| Token | Reference | Type |
|-------|-----------|------|
| modal/dialog/header/description/text | content/secondary/text/on-light | COLOR |

### Dialog / Header / Title

| Token | Reference | Type |
|-------|-----------|------|
| modal/dialog/header/title/text | content/primary/text/on-light | COLOR |

### Dialog / Overlay

| Token | Reference | Type |
|-------|-----------|------|
| modal/dialog/overlay/background | surface/inverse-base | COLOR |
| modal/dialog/overlay/opacity | 0.6000000238418579 | FLOAT |

## Navigation

### Primary / Container

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/container/background | surface/inverse-base | COLOR |
| navigation/primary/container/gap | space/2 | FLOAT |
| navigation/primary/container/height | 60 | FLOAT |
| navigation/primary/container/padding-x-leading | space/4 | FLOAT |
| navigation/primary/container/padding-x-trailing | space/0 | FLOAT |
| navigation/primary/container/padding-y | space/2 | FLOAT |

### Primary / Item / Intent / Ai / Default

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/ai/default/background | transparent | COLOR |
| navigation/primary/item/intent/ai/default/icon | ai-adornment/color/on-dark | COLOR |
| navigation/primary/item/intent/ai/default/text | content/primary/text/on-dark | COLOR |

### Primary / Item / Intent / Ai / Hovered

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/ai/hovered/background | transparent | COLOR |
| navigation/primary/item/intent/ai/hovered/icon | ai-adornment/color/on-dark | COLOR |
| navigation/primary/item/intent/ai/hovered/text | action/ai/hovered | COLOR |

### Primary / Item / Intent / Ai / Selected

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/ai/selected/background | action/ai/on-dark | COLOR |
| navigation/primary/item/intent/ai/selected/icon | content/primary/text/on-dark | COLOR |
| navigation/primary/item/intent/ai/selected/text | content/primary/text/on-dark | COLOR |

### Primary / Item / Intent / Ai / Selected-hovered

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/ai/selected-hovered/background | action/ai/hovered | COLOR |
| navigation/primary/item/intent/ai/selected-hovered/icon | content/primary/text/on-dark | COLOR |
| navigation/primary/item/intent/ai/selected-hovered/text | content/primary/text/on-dark | COLOR |

### Primary / Item / Intent / Default / Default

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/default/default/background | transparent | COLOR |
| navigation/primary/item/intent/default/default/icon | content/primary/text/on-dark | COLOR |
| navigation/primary/item/intent/default/default/text | content/primary/text/on-dark | COLOR |

### Primary / Item / Intent / Default / Hovered

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/default/hovered/background | transparent | COLOR |
| navigation/primary/item/intent/default/hovered/icon | action/primary/hovered | COLOR |
| navigation/primary/item/intent/default/hovered/text | action/primary/hovered | COLOR |

### Primary / Item / Intent / Default / Selected

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/default/selected/background | action/primary/default | COLOR |
| navigation/primary/item/intent/default/selected/icon | content/primary/text/on-dark | COLOR |
| navigation/primary/item/intent/default/selected/text | content/primary/text/on-dark | COLOR |

### Primary / Item / Intent / Default / Selected-hovered

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/intent/default/selected-hovered/background | action/primary/hovered | COLOR |
| navigation/primary/item/intent/default/selected-hovered/icon | content/primary/text/on-dark | COLOR |
| navigation/primary/item/intent/default/selected-hovered/text | content/primary/text/on-dark | COLOR |

### Primary / Item / Layout

| Token | Reference | Type |
|-------|-----------|------|
| navigation/primary/item/layout/padding-x | space/1 | FLOAT |
| navigation/primary/item/layout/padding-y | space/2 | FLOAT |
| navigation/primary/item/layout/radius | radius/pill | FLOAT |

### Secondary

| Token | Reference | Type |
|-------|-----------|------|
| navigation/secondary/show-label | components/navigation/show-label | BOOLEAN |

### Secondary / Container

| Token | Reference | Type |
|-------|-----------|------|
| navigation/secondary/container/background | surface/subtle | COLOR |
| navigation/secondary/container/gap | space/2 | FLOAT |
| navigation/secondary/container/padding-x | space/4 | FLOAT |
| navigation/secondary/container/padding-y | space/2 | FLOAT |

### Secondary / Context

| Token | Reference | Type |
|-------|-----------|------|
| navigation/secondary/context/link | content/primary/text/link | COLOR |
| navigation/secondary/context/text | content/primary/text/on-light | COLOR |

### Secondary / Item / Layout

| Token | Reference | Type |
|-------|-----------|------|
| navigation/secondary/item/layout/gap | space/1 | FLOAT |
| navigation/secondary/item/layout/icon | icon/size/sm | FLOAT |
| navigation/secondary/item/layout/padding-x | space/1 | FLOAT |
| navigation/secondary/item/layout/padding-y | space/2 | FLOAT |
| navigation/secondary/item/layout/radius | radius/xs | FLOAT |

### Secondary / Item / State / Default

| Token | Reference | Type |
|-------|-----------|------|
| navigation/secondary/item/state/default/background | transparent | COLOR |
| navigation/secondary/item/state/default/icon | button/intent/primary/link/ink | COLOR |
| navigation/secondary/item/state/default/text | button/intent/primary/link/ink | COLOR |

### Secondary / Item / State / Disabled

| Token | Reference | Type |
|-------|-----------|------|
| navigation/secondary/item/state/disabled/background | transparent | COLOR |
| navigation/secondary/item/state/disabled/icon | status/disabled | COLOR |
| navigation/secondary/item/state/disabled/text | status/disabled | COLOR |

### Secondary / Item / State / Hovered

| Token | Reference | Type |
|-------|-----------|------|
| navigation/secondary/item/state/hovered/background | surface/interactive/primary/hovered | COLOR |
| navigation/secondary/item/state/hovered/icon | button/intent/primary/link/ink-hovered | COLOR |
| navigation/secondary/item/state/hovered/text | button/intent/primary/link/ink-hovered | COLOR |

### Tertiary / Container

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/container/background | surface/base | COLOR |
| navigation/tertiary/container/border-bottom | content/secondary/border/on-light | COLOR |
| navigation/tertiary/container/border-width | 1 | FLOAT |
| navigation/tertiary/container/gap | space/2 | FLOAT |
| navigation/tertiary/container/padding-x | space/4 | FLOAT |
| navigation/tertiary/container/padding-y | space/0 | FLOAT |

### Tertiary / Indicator

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/indicator/gap | space/0 | FLOAT |
| navigation/tertiary/indicator/thickness | 4 | FLOAT |

### Tertiary / Indicator / Color

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/indicator/color/ai | ai/default | COLOR |
| navigation/tertiary/indicator/color/default | content/primary/text/link | COLOR |

### Tertiary / Tab / Intent / Ai / Background

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/tab/intent/ai/background/default | transparent | COLOR |
| navigation/tertiary/tab/intent/ai/background/hovered | surface/interactive/primary/hovered | COLOR |
| navigation/tertiary/tab/intent/ai/background/selected | surface/base | COLOR |

### Tertiary / Tab / Intent / Ai / Icon

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/tab/intent/ai/icon/default | ai/default | COLOR |
| navigation/tertiary/tab/intent/ai/icon/hovered | action/ai/hovered | COLOR |

### Tertiary / Tab / Intent / Ai / Text

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/tab/intent/ai/text/default | content/secondary/text/on-light | COLOR |
| navigation/tertiary/tab/intent/ai/text/hovered | action/ai/hovered | COLOR |
| navigation/tertiary/tab/intent/ai/text/selected | ai/default | COLOR |

### Tertiary / Tab / Intent / Default / Background

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/tab/intent/default/background/default | transparent | COLOR |
| navigation/tertiary/tab/intent/default/background/hovered | surface/interactive/primary/hovered | COLOR |
| navigation/tertiary/tab/intent/default/background/selected | surface/base | COLOR |

### Tertiary / Tab / Intent / Default / Text

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/tab/intent/default/text/default | content/secondary/text/on-light | COLOR |
| navigation/tertiary/tab/intent/default/text/hovered | action/primary/hovered | COLOR |
| navigation/tertiary/tab/intent/default/text/selected | action/primary/default | COLOR |

### Tertiary / Tab / Layout

| Token | Reference | Type |
|-------|-----------|------|
| navigation/tertiary/tab/layout/gap | space/1 | FLOAT |
| navigation/tertiary/tab/layout/height | 40 | FLOAT |
| navigation/tertiary/tab/layout/padding-x | space/4 | FLOAT |
| navigation/tertiary/tab/layout/padding-y | space/2 | FLOAT |

## Property Overview

### Container

| Token | Reference | Type |
|-------|-----------|------|
| property-overview/container/background | surface/base | COLOR |
| property-overview/container/border | content/tertiary/border/on-light | COLOR |
| property-overview/container/border-width | 1 | FLOAT |
| property-overview/container/gap | property-overview/container/gap | FLOAT |
| property-overview/container/padding-x | property-overview/container/padding-x | FLOAT |
| property-overview/container/padding-y | property-overview/container/padding-y | FLOAT |

### Container / Layout

| Token | Reference | Type |
|-------|-----------|------|
| property-overview/container/layout/gap | 0 | FLOAT |
| property-overview/container/layout/snapshot-gap | 0 | FLOAT |

### Identity

| Token | Reference | Type |
|-------|-----------|------|
| property-overview/identity/address | content/primary/text/link | COLOR |
| property-overview/identity/apn | content/secondary/text/on-light | COLOR |
| property-overview/identity/location | content/secondary/text/on-light | COLOR |
| property-overview/identity/market | content/secondary/text/on-light | COLOR |

## Sidebar

### Header

| Token | Reference | Type |
|-------|-----------|------|
| sidebar/header/gap | components/sidebar/header/gap | FLOAT |
| sidebar/header/padding-x | components/sidebar/header/padding-x | FLOAT |
| sidebar/header/padding-y | components/sidebar/header/padding-y | FLOAT |
| sidebar/header/title | content/primary/text/on-dark | COLOR |

### Panel

| Token | Reference | Type |
|-------|-----------|------|
| sidebar/panel/border | content/secondary/border/on-dark | COLOR |
| sidebar/panel/border-width | 1 | FLOAT |
| sidebar/panel/gap | components/sidebar/panel/gap | FLOAT |
| sidebar/panel/padding-x | components/sidebar/panel/padding-x | FLOAT |
| sidebar/panel/padding-y | components/sidebar/panel/padding-y | FLOAT |
| sidebar/panel/surface | surface/inverse-muted | COLOR |

### Searchband

| Token | Reference | Type |
|-------|-----------|------|
| sidebar/searchband/background | surface/inverse-base | COLOR |
| sidebar/searchband/gap | components/sidebar/searchband/gap | FLOAT |
| sidebar/searchband/padding-x | components/sidebar/searchband/padding-x | FLOAT |
| sidebar/searchband/padding-y | components/sidebar/searchband/padding-y | FLOAT |
| sidebar/searchband/radius | radius/none | FLOAT |

## Snapshot

| Token | Reference | Type |
|-------|-----------|------|
| snapshot/gap | components/snapshot/gap | FLOAT |
| snapshot/icon | icon/size/lg | FLOAT |
| snapshot/label | content/secondary/text/on-light | COLOR |
| snapshot/subtext | content/tertiary/text/on-light | COLOR |
| snapshot/value | content/primary/text/on-light | COLOR |

## Table

**Usage Guidelines:**

### Typography
- **All table cell values** (both text and numerical) use `Open Sans` font family for optimal readability in tabular data
- **Table headers** use `Gotham Medium` for hierarchy and emphasis

### Content Alignment
- **Numerical/Comparable Data**: Right-aligned (e.g., square footage, rent, prices, percentages)
  - Facilitates numerical comparison by aligning decimal points and magnitudes
  - Follows standard table UI best practices for scanability
- **Text Data**: Left-aligned (e.g., property names, addresses, descriptions)
  - Natural reading direction for text content
  - Maintains consistency with standard reading patterns

### Row Interactions
When implementing tables, determine the appropriate interaction pattern:

1. **Downloadable Data** (checkbox + download button):
   - Include checkbox in first column for row selection
   - Include download button/icon in row or header
   - Use when users need to export selected rows

2. **Selectable Only** (checkbox only):
   - Include checkbox in first column for row selection
   - Use when rows are selected for actions other than download (e.g., bulk edit, delete)

3. **Read-Only** (no checkbox):
   - No checkbox or download button
   - Use for display-only tables where no row-level actions are needed

**Note**: Always prompt the user to clarify if table data should be selectable or downloadable before implementation.

### Cell

| Token | Reference | Type |
|-------|-----------|------|
| table/cell/content-gap | components/table/cell/content-gap | FLOAT |
| table/cell/padding-x | components/table/cell/padding-x | FLOAT |

### Container

| Token | Reference | Type |
|-------|-----------|------|
| table/container/border | content/secondary/border/on-light | COLOR |
| table/container/padding-x | components/table/container/padding-x | FLOAT |

### Density / Comfortable

| Token | Reference | Type |
|-------|-----------|------|
| table/density/comfortable/header-min-height | components/table/density/comfortable/header-min-height | FLOAT |
| table/density/comfortable/header-min-width | components/table/density/comfortable/header-min-width | FLOAT |
| table/density/comfortable/padding-y | components/table/density/comfortable/padding-y | FLOAT |
| table/density/comfortable/row-min-height | components/table/density/comfortable/row-min-height | FLOAT |
| table/density/comfortable/row-min-width | components/table/density/comfortable/row-min-width | FLOAT |

### Density / Compact

| Token | Reference | Type |
|-------|-----------|------|
| table/density/compact/header-min-height | components/table/density/compact/header-min-height | FLOAT |
| table/density/compact/header-min-width | components/table/density/compact/header-min-width | FLOAT |
| table/density/compact/padding-y | components/table/density/compact/padding-y | FLOAT |
| table/density/compact/row-min-height | components/table/density/compact/row-min-height | FLOAT |
| table/density/compact/row-min-width | components/table/density/compact/row-min-width | FLOAT |

### Density / Default

| Token | Reference | Type |
|-------|-----------|------|
| table/density/default/header-min-height | components/table/density/default/header-min-height | FLOAT |
| table/density/default/header-min-width | components/table/density/default/header-min-width | FLOAT |
| table/density/default/padding-y | components/table/density/default/padding-y | FLOAT |
| table/density/default/row-min-height | components/table/density/default/row-min-height | FLOAT |
| table/density/default/row-min-width | components/table/density/default/row-min-width | FLOAT |

### Header

| Token | Reference | Type |
|-------|-----------|------|
| table/header/icon | content/secondary/text/on-light | COLOR |
| table/header/text | content/primary/text/on-light | COLOR |

### Header / States / Default

| Token | Reference | Type |
|-------|-----------|------|
| table/header/states/default/background | surface/muted | COLOR |

### Header / States / Hovered

| Token | Reference | Type |
|-------|-----------|------|
| table/header/states/hovered/background | surface/soft | COLOR |

### Header / States / Selected

| Token | Reference | Type |
|-------|-----------|------|
| table/header/states/selected/background | surface/base | COLOR |
| table/header/states/selected/text | accent/brand | COLOR |

### Row / Background

| Token | Reference | Type |
|-------|-----------|------|
| table/row/background/default | surface/base | COLOR |
| table/row/background/hovered | surface/interactive/primary/hovered | COLOR |
| table/row/background/selected | surface/interactive/primary/selected | COLOR |

### Row / Divider

| Token | Reference | Type |
|-------|-----------|------|
| table/row/divider/border-width | 1 | FLOAT |
| table/row/divider/color | content/tertiary/border/on-light | COLOR |

### Row / Summary

| Token | Reference | Type |
|-------|-----------|------|
| table/row/summary/background | surface/emphasis | COLOR |
| table/row/summary/text | content/primary/text/on-light | COLOR |

