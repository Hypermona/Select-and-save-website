import { marked } from 'marked';

/**
 * Converts standard Markdown text into styled HTML strings for Astro blog posts
 */
export function renderMarkdown(markdown: string): string {
  if (!markdown) return '';

  // 1. Strip YAML frontmatter
  let cleanContent = markdown.replace(/^---[\s\S]*?---\s*/, '');

  // 2. Strip leading H1 title if present (since page layout already renders H1)
  cleanContent = cleanContent.replace(/^#\s+[^\n]+\n*/, '');

  // 3. Parse GFM Markdown into HTML using marked
  const html = marked.parse(cleanContent, {
    gfm: true,
    breaks: false
  }) as string;

  return html;
}

