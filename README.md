# Parachutes and Promises

Website for Parachutes and Promises, a pop band from Seattle.

**Live site:** [parachutesandpromises.com](https://parachutesandpromises.com)

## Overview

A static single-page website built with plain HTML, CSS, and JavaScript (no frameworks).

### Sections

- **Hero** - Band name over background image
- **Music** - Singles grid with streaming links (Spotify, YouTube, Apple Music, SoundCloud)
- **Follow** - Social media links (Instagram, Spotify, YouTube, Facebook, Apple Music)
- **The Band** - Photo and bio
- **Press** - Review quotes with linked press outlet logos

## File Structure

```
index.html          - Main page
css/styles.css      - All styles
js/main.js          - Animations, nav behavior, scroll reveal
images/             - All image assets
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (for linting/validation tools)

### Setup

```bash
npm install
```

### Linting and Validation

Run all checks:

```bash
npm test
```

Or run individually:

```bash
npm run lint:html    # HTMLHint - HTML best practices
npm run lint:css     # Stylelint - CSS linting
npm run validate     # html-validate - HTML spec validation
```

### Local Preview

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
```

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Google Fonts: Poppins, Inter, Sora
- SVG sprite for service icons
- HTMLHint, Stylelint, html-validate for code quality
