# Design and Development Guidelines - unodetantosluises

## Visual Identity and Fidelity

- **No generic styles:** This website is personal and has a unique identity. It is strictly prohibited to use generic template styles (such as Bootstrap, default Tailwind, or standard AI components).
- **Strict adherence to the design:** All visual development must be based exactly on the screenshots and Figma designs provided by the user. Do not add margins, rounded corners, shadows, or decorative effects that are not explicitly shown in the visual reference.
- **Design questions:** If an interaction, state (hover/active), or responsive version is unclear in the image, ask the user instead of assuming a default design.

## Technical Stack

- **Frontend:** React 18 + Vite.
- **Routing:** React Router DOM (declarative routes in `src/App.jsx`).
- **Styles:** Sass / SCSS (`_name.scss` files alongside each component/page).
- **Semantics:** Clean and accessible HTML5, avoiding unnecessary divs.

## Project Structure & Architecture

- **Pages (`src/pages/`):**
  - `/` -> `Home/Home.jsx` (Navigation canvas with folders and intro).
  - `/portafolio` -> `Portfolio/Portfolio.jsx`
  - `/experiencia` -> `Experience/Experience.jsx`
  - `/blog` -> `Blog/Blog.jsx`
  - `/sobre-mi` -> `About/About.jsx`
  - `/contacto` -> `Contact/Contact.jsx`
- **Shared Components (`src/components/`):**
  - `BackgroundGrid`: Exact non-uniform vector grid and pixel blocks background (preserved on every page).
  - `Controls`: Universal controls placed on the top-right corner (Day/Night theme toggle and Home navigation button).
  - `Layout`: Top-level wrapper for consistent canvas dimensions and responsiveness.
  - `ReturnButton`: Reusable back button with Day/Night contrast icons and history navigation for subpages.
  - `Roles`: Dynamic rotating roles displayed on the Home hero section.
- **Context:**
  - `ThemeContext`: Global dark/light theme state controlling `data-theme` on the body and CSS variables.
