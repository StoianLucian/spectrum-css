---
"@spectrum-css/picker": major
---

#### Spectrum 2 migration
Picker now uses Spectrum 2 tokens and specifications. A few notable changes:
- The mod custom property `--mod-line-height-100` has been renamed to `--mod-button-line-height`.
- The mod custom property `--mod-sans-font-family-stack` has been renamed to `--mod-button-font-family`.
- The mod custom property `--mod-animation-duration-100` has been renamed to `--mod-button-animation-duration`.
- The mod custom property `--mod-picker-spacing-text-to-alert-icon-inline-start` has been renamed to `--mod-picker-spacing-text-to-icon-inline-end`. This removed the fallback that was marked as deprecated in a previous version.