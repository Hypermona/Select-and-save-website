# Privacy Policy for Select & Save

*Last Updated: August 9, 2026*

## Overview

At **Select & Save**, your privacy is our top priority. We believe that your research, saved web snippets, notes, and browsing context belong strictly to you. Select & Save is engineered from the ground up as a **privacy-first, local-first Chrome Extension**.

This Privacy Policy outlines how data is handled when you install and use the **Select & Save** extension and visit our official web portal.

---

## 1. Zero Remote Server Storage (100% Local-First Architecture)

- **Local Storage**: All text snippets, QnA cards, captured selection screenshots, custom folders, tags, and custom search providers are saved **exclusively in your browser's local storage** (`chrome.storage.local`).
- **No Cloud Synchronization**: Select & Save does **not** operate external databases, remote backends, or cloud storage servers to store your captured content.
- **Data Ownership**: You retain full ownership and complete control over your stored data. Your snippets never leave your personal computer.

---

## 2. On-Device AI Processing (Chrome Built-in AI / Gemini Nano)

- **Local Execution**: When you ask questions or format snippets using our AI assistant feature, processing is performed **on-device** using Chrome's native Built-in AI (Gemini Nano Prompt API).
- **No Cloud AI APIs**: Prompts sent to local AI stay within your browser runtime. They are **not** transmitted to OpenAI, Anthropic, Google Cloud servers, or any third-party AI endpoints.
- **Offline Capable**: Because AI execution occurs on your device hardware, library AI searches can run entirely offline without active internet connections.

---

## 3. Chrome Extension Permissions & Usage

Select & Save requests specific browser permissions necessary to provide its core features:

| Permission | Purpose & Scope |
| :--- | :--- |
| `storage` | To save your notes, visual screenshots, folders, and preferences locally on your hard drive. |
| `activeTab` | To detect highlighted text selections on your active webpage when you click the quick action bar. |
| `scripting` | To inject text highlight markers and scroll to target text fragments when opening original source pages. |
| `tabs` | To open source web pages and apply deep-link fragment highlighting upon user request. |
| `<all_urls>` | To allow text selection, screenshot cropping, and highlight overlays across web documents. |

> **Crucial Commitment**: Select & Save **never** logs your overall browsing history, tracks your keystrokes, or reads web page content outside of user-initiated text selections.

---

## 4. Analytics & Event Telemetry

Select & Save includes an **optional** telemetry integration using Google Analytics 4 (GA4) to help us measure operational performance and fix crashes.

- **What is collected (if enabled)**: Aggregate, non-identifiable usage statistics (e.g., total count of snippets saved, feature button clicks, UI view toggles).
- **What is NEVER collected**: Your saved notes, selection content, page titles, URLs, tags, search queries, or personal identifiers are **never** included in analytics payloads.
- **User Choice & Opt-Out**: You can turn off analytics tracking at any time by navigating to **Extension Settings → Toggle Off Enable Analytics**.

---

## 5. Third-Party Websites & External AI Links

When you click quick-action search buttons such as **"Search on Google"**, **"Ask Claude"**, or **"Ask ChatGPT"**:
- The selected text query is passed directly to the corresponding official web URL (e.g. `google.com/search`, `claude.ai`, `chatgpt.com`) in a new browser tab.
- Interactions on those external services are governed by their respective privacy policies. Select & Save does not control or store external search requests.

---

## 6. Data Retention, Backup, and Deletion

- **Instant Deletion**: You can delete individual QnA cards, custom folders, or clear your entire saved history at any time through the Select & Save dashboard.
- **Permanent Removal**: Deleting data removes it permanently from your `chrome.storage.local`.
- **Uninstalling**: Uninstalling the extension completely purges all associated local storage files created by Select & Save from your computer.

---

## 7. Compliance with Chrome Web Store User Data Policy

Select & Save strictly adheres to the **Chrome Web Store Single Purpose and Developer Privacy Policies**:
- We do **not** sell, trade, rent, or monetize user data to third parties, data brokers, or advertising networks.
- We do **not** use stored content for targeted advertising or user profiling.
- We do **not** transfer user data to credit reporting agencies or financial institutions.

---

## 8. Updates to This Privacy Policy

We may update this Privacy Policy periodically to reflect new extension features or legal guidelines. Any changes will be published on this page with an updated revision date.

---

## 9. Contact Us

If you have questions, feedback, or privacy inquiries regarding Select & Save:
- **Email**: privacy@selectandsave.app
- **GitHub Repository**: [https://github.com/Hypermona/Select-and-save](https://github.com/Hypermona/Select-and-save)
