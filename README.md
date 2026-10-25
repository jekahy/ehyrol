# Eugene Hyrol - Personal CV & Portfolio

A modern, fast, and responsive CV and portfolio web page built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), engineered for zero-maintenance hosting on **GitHub Pages**.

---

## 🚀 Features

- **Subpage-Ready Architecture**: Multi-page routing (`/`, `/projects`, and ready for `/about`, `/blog`, etc.) with a shared responsive header and navigation menu.
- **Data-Driven Resume**: Single source of truth in [`src/data/cv.json`](file:///Users/eugene/projects/my_web_page/src/data/cv.json) — update your bio, work experience, projects, and skills without touching markup.
- **Dark & Light Mode**: Seamless theme switching with persistence in `localStorage` and zero flash on reload.
- **1-Click PDF Export**: Built-in `@media print` stylesheet that strips navigation and formats the page as a clean printable resume.
- **Automated CI/CD**: Pre-configured [GitHub Actions workflow](file:///Users/eugene/projects/my_web_page/.github/workflows/deploy.yml) that automatically builds and publishes the site to GitHub Pages on every `git push`.

---

## 🛠️ Local Development

```bash
# Start local development server (live reload at http://localhost:4321)
npm run dev

# Build production static bundle (dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```text
my_web_page/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment
├── public/
│   └── favicon.svg             # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.astro        # Responsive menu + Dark mode + Print button
│   │   ├── Footer.astro        # Social links & copyright
│   │   ├── Hero.astro          # Headline, bio, social badges, quick actions
│   │   ├── Experience.astro    # Work history timeline with tags
│   │   ├── Projects.astro      # Card grid for software & open-source work
│   │   ├── Skills.astro        # Categorized skill badges
│   │   ├── Education.astro     # Degree & academic background
│   │   └── Contact.astro       # Direct email & LinkedIn actions
│   ├── data/
│   │   └── cv.json             # ⭐ Single source of truth for all content
│   ├── layouts/
│   │   └── BaseLayout.astro    # Common HTML shell, SEO, theme script
│   ├── pages/
│   │   ├── index.astro         # Main CV page (/)
│   │   └── projects.astro      # Subpage (/projects)
│   └── styles/
│       └── global.css          # Tailwind directives & print styles
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

---

## 🚢 Publishing to GitHub Pages

### 1. Push to GitHub
```bash
git add .
git commit -m "feat: initial Astro CV personal site"
# If your repo is username.github.io:
git remote add origin https://github.com/jekahy/jekahy.github.io.git
# Or if it's a project repository:
# git remote add origin https://github.com/jekahy/my_web_page.git
git push -u origin main
```

### 2. Configure GitHub Pages
1. Go to your repository on GitHub: **Settings** > **Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push any commit to `main`, and the deployment action will publish your site automatically!

> [!NOTE]
> If deploying to a project sub-path (e.g. `https://jekahy.github.io/my_web_page/`), uncomment `base: '/my_web_page'` in [`astro.config.mjs`](file:///Users/eugene/projects/my_web_page/astro.config.mjs).
