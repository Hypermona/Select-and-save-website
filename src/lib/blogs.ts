import fs from 'fs';
import path from 'path';

export interface BlogPostManifest {
  id: string;
  title: string;
  slug: string;
  publishedDate: string;
  author: string;
  category: string;
  readTime: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  filePath: string;
}

export interface BlogPost extends BlogPostManifest {
  content: string;
}

const MANIFEST_PATH = path.join(process.cwd(), 'website_docs', 'blogs', 'blogs_manifest.json');

export function getAllPosts(): BlogPostManifest[] {
  try {
    const rawData = fs.readFileSync(MANIFEST_PATH, 'utf-8');
    return JSON.parse(rawData) as BlogPostManifest[];
  } catch (error) {
    console.error('Error reading blogs manifest:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  const postInfo = posts.find(p => p.slug === slug);
  if (!postInfo) return null;

  try {
    const fullPath = path.join(process.cwd(), postInfo.filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    return {
      ...postInfo,
      content
    };
  } catch (error) {
    console.error(`Error reading blog post file for ${slug}:`, error);
    return null;
  }
}
