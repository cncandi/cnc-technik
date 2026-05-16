# CNC-Technik Website Relaunch

Astro-Grundgerüst für den Relaunch von cnc-technik.de.

## Ziel

Dieses Repository enthält eine schnelle, statische Website-Basis mit Astro. Die Seite kann zunächst über GitHub Pages getestet und später auf ein professionelles Hosting oder auf die Hauptdomain umgezogen werden.

## Enthalten

- Astro-Projektstruktur
- deutsche Startseite
- Inhaltsseiten für ENCY, Robotik, KUKA, P3D Slicer, SOLIDWORKS, Postprozessoren, Schulung und Kontakt
- Markdown/MDX-fähige Content-Struktur
- globale Styles
- GitHub-Actions-Workflow für GitHub Pages
- Sitemap-Integration

## Lokal starten

```bash
npm install
npm run dev
```

## Produktionsbuild

```bash
npm run build
npm run preview
```

## GitHub Pages

Der Workflow liegt unter:

```text
.github/workflows/deploy.yml
```

Nach dem Merge in `main` muss GitHub Pages im Repository auf `GitHub Actions` als Quelle gestellt werden.

## Späterer Livegang

Vor dem Ersatz der bestehenden WordPress-Seite sollten geprüft werden:

- vollständige Sitemap
- alte URLs und 301-Weiterleitungen
- Kontaktformulare
- GA4 und Search Console
- Impressum, Datenschutz und Cookie-Hinweis
- Bilder, Downloads und Performance
