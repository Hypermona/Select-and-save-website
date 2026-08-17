# Select & Save — Complete Website SEO Implementation Guide

This guide outlines every SEO configuration, HTML tag, metadata tag, and JSON-LD structured data schema required to rank high on search engines (Google, Bing, DuckDuckGo) and generate attractive social previews across X/Twitter, LinkedIn, and Facebook.

---

## 1. Primary HTML Meta Tags Template

Place the following HTML snippet inside the `<head>` element of your website framework (React, Next.js, Astro, or static HTML):

```html
<!-- Primary Meta Tags -->
<title>Select & Save - Save Web Text, Code & Screenshots with On-Device AI</title>
<meta name="title" content="Select & Save - Save Web Text, Code & Screenshots with On-Device AI" />
<meta name="description" content="Select text from any webpage or document and instantly save it as QnA knowledge cards with automatic screenshot capture, deep-link navigation, and 100% private local Chrome AI." />
<meta name="keywords" content="chrome extension, web clipper, text saver, local AI, Gemini Nano, privacy-first bookmark manager, QnA saver, deep link text highlighter, personal knowledge management" />
<meta name="author" content="Hypermona" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://selectandsave.app/" />

<!-- Mobile & Theme Optimization -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#6366f1" />

<!-- Favicons & Icons -->
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://selectandsave.app/" />
<meta property="og:title" content="Select & Save - Save Web Text, Code & Screenshots with On-Device AI" />
<meta property="og:description" content="Select text from any webpage or document and save it as QnA knowledge cards with automatic screenshot capture, deep-link navigation, and 100% private local Chrome AI." />
<meta property="og:image" content="https://selectandsave.app/assets/og-cover.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Select & Save" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://selectandsave.app/" />
<meta name="twitter:title" content="Select & Save - Save Web Text, Code & Screenshots with On-Device AI" />
<meta name="twitter:description" content="Select text from any webpage or document and save it with automatic screenshot capture and local Gemini Nano AI." />
<meta name="twitter:image" content="https://selectandsave.app/assets/og-cover.png" />
<meta name="twitter:site" content="@SelectAndSaveApp" />
```

---

## 2. Structured Data (JSON-LD Schemas)

Include JSON-LD scripts inside the `<head>` of relevant pages so Google displays rich search snippets, rating stars, and software badges.

### Homepage SoftwareApplication Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Select & Save",
  "operatingSystem": "Chrome OS, Windows, macOS, Linux",
  "applicationCategory": "Browser Extension / Productivity",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "128"
  },
  "downloadUrl": "https://chromewebstore.google.com/detail/select-and-save/fdahohfefbhomeejeekneopnafdmcdai",
  "featureList": [
    "100% Private Local Browser Storage",
    "On-Device Gemini Nano Local AI Chat",
    "Automatic Selection Screenshot Cropping",
    "Deep-Link Text Fragment Re-Highlighting"
  ]
}
</script>
```

### Blog Post Article Schema (For Blog Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{BLOG_TITLE}}",
  "description": "{{BLOG_DESCRIPTION}}",
  "image": "https://selectandsave.app{{BLOG_COVER_IMAGE}}",
  "author": {
    "@type": "Organization",
    "name": "Select & Save Team",
    "url": "https://selectandsave.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Select & Save",
    "logo": {
      "@type": "ImageObject",
      "url": "https://selectandsave.app/assets/icon-512.png"
    }
  },
  "datePublished": "{{PUBLISHED_DATE}}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://selectandsave.app/blogs/{{BLOG_SLUG}}"
  }
}
</script>
```

---

## 3. Robots.txt Specification

Place `robots.txt` at the root of your web server (`https://selectandsave.app/robots.txt`):

```txt
User-agent: *
Allow: /

Sitemap: https://selectandsave.app/sitemap.xml
```

---

## 4. XML Sitemap Blueprint (`sitemap.xml`)

Generate `sitemap.xml` at root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://selectandsave.app/</loc>
    <lastmod>2026-08-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://selectandsave.app/privacy-policy</loc>
    <lastmod>2026-08-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://selectandsave.app/blogs</loc>
    <lastmod>2026-08-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://selectandsave.app/blogs/how-to-organize-web-research-snippets</loc>
    <lastmod>2026-08-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://selectandsave.app/blogs/chrome-built-in-ai-gemini-nano-local-knowledge-base</loc>
    <lastmod>2026-08-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://selectandsave.app/blogs/stop-losing-web-highlights-deep-link-text-fragment</loc>
    <lastmod>2026-08-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://selectandsave.app/blogs/modern-web-clipper-alternative-speed-privacy</loc>
    <lastmod>2026-08-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://selectandsave.app/blogs/building-personal-knowledge-base-in-chrome</loc>
    <lastmod>2026-08-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 5. Technical Performance & Core Web Vitals Checklist

1. **Font Preloading**: Preconnect to Google Fonts (`fonts.googleapis.com`) to prevent layout shifts (CLS).
2. **Semantic HTML5 Hierarchy**: Use exactly **one** `<h1>` tag per page, followed by logical `<h2>` and `<h3>` tags.
3. **Image Alt Tags**: Ensure every image (hero screenshot, feature icons, blog covers) includes descriptive `alt="..."` text containing keywords.
4. **Unique Interactive IDs**: Every CTA button should have a unique ID for analytics and automated testing (e.g. `id="hero-download-btn"`).
