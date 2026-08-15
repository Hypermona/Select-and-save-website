export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "How is Select & Save different from Raindrop.io or traditional bookmark managers?",
    a: "Traditional bookmark managers like Raindrop.io save full page URLs, creating link bloat and making it hard to locate specific quotes or code blocks later. Select & Save lets you highlight and save precise snippets, automatically generates visual PNG screenshots, converts snippets into Q&A cards, and scrolls back to re-highlight your quote on live webpages."
  },
  {
    q: "Is Select & Save 100% private and offline-capable?",
    a: "Yes! All your saved snippets, screenshots, Q&As, and tag folders are stored exclusively in your browser's local storage (chrome.storage.local and IndexedDB). There are zero remote cloud telemetry servers tracking your browsing or data."
  },
  {
    q: "How does the Chrome Built-in AI (Gemini Nano) work?",
    a: "Select & Save leverages Chrome's experimental Prompt API (window.ai.languageModel). This runs Google's Gemini Nano model directly on your device using hardware acceleration. You can search, summarize, or query your library in plain English completely offline with sub-50ms speed and zero API costs."
  },
  {
    q: "What if my browser doesn't support Chrome Built-in AI yet?",
    a: "Select & Save automatically falls back to an ultra-fast client-side local search engine that indexes snippet titles, tags, content text, domain folders, and timestamps with instant keyword streaming."
  },
  {
    q: "What is the Select & Instant Multi-Search overlay?",
    a: "Whenever you highlight text on any webpage, a sleek floating action bar appears. With one click, you can send your highlighted selection directly to Google, ChatGPT, or Claude without copy-pasting or opening manual tabs."
  },
  {
    q: "Is Select & Save free to use?",
    a: "Select & Save is 100% free with zero subscription paywalls, no limits on saved snippets, and no hidden features locked behind paid tiers."
  }
];

/**
 * Returns a valid Schema.org FAQPage JSON-LD object
 */
export function getFaqPageSchema(faqList: FaqItem[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}
