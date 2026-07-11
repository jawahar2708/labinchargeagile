# Implementation Plan: Lab Portal Upgrades and Fixes

This document outlines the implementation plan to address the 11-point list of changes requested to improve the aesthetics, functionality, and consistency of the lab portal.

## User Review Required

> [!IMPORTANT]
> **Icon System:** We will replace all text-based emojis with Google Material Symbols (`Material Symbols Outlined`). This will give the portal a professional, uniform look.
> **Design Language:** Glassmorphism will be integrated. This entails applying semi-transparent backgrounds (`rgba`), backdrop blur (`backdrop-filter: blur()`), and subtle borders to cards, modals, and navbars. 
> **Clock Picker:** A new zero-dependency vanilla JS Circular Clock Picker will be built to replace standard HTML time inputs.

## Open Questions

> [!WARNING]
> 1. **Dashboard Fixes:** Could you clarify what specific issues are occurring on the dashboard (`index.html`)? (e.g., layout broken, charts not loading, stats incorrect).
> 2. **Lab Asset Management ('Add Component/Tools'):** Should these sections open as a modal dialog or be embedded directly into the page layout on `inventory.html`?
> 3. **Equipment Tracking:** Are there any specific bugs in the equipment tracking functionalities that need to be addressed, or is it a general overhaul of the logic?

## Proposed Changes

---

### Global Design & Architecture (Icons, Glassmorphism, Consistency)
**Summary:** Upgrade the portal's design system to remove emojis, enforce glassmorphism, and align all pages with the styling of the `material-requests` page.

#### [MODIFY] `index.html`, `inventory.html`, `low-stock.html`, `material-requests.html`, `material-returns.html`, `myprofile.html`, `teams.html`, `tickets.html`, `equipment-tracking.html`
- Import Google Material Symbols via `<link>`.
- Replace all instances of emojis (e.g., 🧪, 🔧, 📊) with `<span class="material-symbols-outlined">icon_name</span>`.
- Standardize layout wrappers to match the component requests page.

#### [MODIFY] `assets/css/global.css`
- Add unified CSS variables for glassmorphism panels (background colors with opacity, blur filters, border colors).
- Define standardized table styles (hover effects, rounded corners, sticky headers) to apply across all pages.
- Add utility classes for icons to align them properly with text.

---

### Tables and Filters
**Summary:** Standardize tables and fix filtering functionality across all views.

#### [MODIFY] `assets/js/global.js` (or individual JS files like `inventory.js`, `tickets.js`)
- Implement a unified table filtering function that parses input values and hides/shows table rows correctly.
- Fix sorting mechanisms if they are currently broken.

#### [MODIFY] CSS files (`inventory.css`, `equipment-tracking.css`, etc.)
- Remove ad-hoc table styles.
- Adopt the new global table classes for unified aesthetics.

---

### Lab Asset Management (Inventory)
**Summary:** Add functionality for components and tools, and fix existing logic.

#### [MODIFY] `inventory.html`
- Add "Add Component" and "Add Tools" buttons.
- Create modal structures for adding new components and tools.

#### [MODIFY] `assets/js/inventory.js`
- Implement event listeners for the new "Add Component" and "Add Tools" forms.
- Validate inputs and update the DOM/storage upon submission.
- Fix any broken logic in editing or deleting assets.

---

### Custom Clock Picker (Material Design)
**Summary:** Build a zero-dependency vanilla JS circular clock dial with AM/PM toggle and auto-switch from hours to minutes.

#### [NEW] `assets/js/clock-picker.js`
- Create the clock picker logic (DOM generation, angle calculation for clock hands, hour/minute switching, AM/PM state).

#### [NEW] `assets/css/clock-picker.css` (or append to `global.css`)
- Style the circular dial, numbers, hands, and dialog background using the portal's indigo color scheme.

#### [MODIFY] Relevant HTML/JS files (e.g., `equipment-tracking.html`)
- Replace standard `<input type="time">` with standard text inputs featuring a trailing clock icon.
- Bind the new Clock Picker to these inputs.

---

### Equipment Tracking & Image Upload
**Summary:** Fix functionality, add image upload capabilities, and provide a 3D box fallback.

#### [MODIFY] `equipment-tracking.html`
- Update the "Add/Edit Equipment" forms to include a file input for image uploads (`<input type="file" accept="image/*">`).
- Ensure the equipment cards/table rows have an `<img>` tag to display the image or fallback.

#### [MODIFY] `assets/js/equipment-tracking.js`
- Implement FileReader logic to convert uploaded images to Base64 strings for local display/storage.
- Add logic to display a default 3D box icon (`<span class="material-symbols-outlined">deployed_code</span>` or an SVG) if the image string is empty.
- Debug and resolve existing functional issues.

## Verification Plan

### Automated Tests
- N/A (Currently no automated test suite mentioned; relies on manual DOM verification).

### Manual Verification
1. **Design Audit:** Navigate through all pages to ensure emojis are gone, Material Symbols are present, and glassmorphism is consistently applied.
2. **Table Audit:** Test filters and sorting on all tables.
3. **Asset Management:** Create, edit, and delete items via the new "Add Component" and "Add Tools" sections.
4. **Clock Picker:** Click time inputs to open the dialog, select an hour, verify it auto-switches to minutes, select minutes, toggle AM/PM, and confirm the value updates the input correctly.
5. **Equipment Tracking:** Upload an image for a new equipment piece, verify it displays. Create another piece without an image and verify the 3D box fallback appears. Ensure general equipment tracking actions work.
