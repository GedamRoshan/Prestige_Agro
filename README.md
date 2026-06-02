# Prestige Agro — React Conversion

This is a Vite + React migration of the provided single-file static site. It keeps the original Tailwind CDN usage for styling and replicates the main sections, modal, drawer, contact form demo fallback (Web3Forms), scroll reveal, and toast.

How to run

1. Open a terminal in this project folder:

```bash
cd ~/Downloads/prestige-agro-react
```
2. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Notes
- The project uses the Tailwind CDN for quick setup; for production you might want to integrate a proper Tailwind build.
- Replace `YOUR_ACCESS_KEY_HERE` in `Contact.jsx` with a Web3Forms access key to enable real email submissions.
- Images referenced with relative paths (like `./premium_turmeric.png`) should be copied into the `public/` folder or updated to reachable URLs.
# Prestige_Agro
