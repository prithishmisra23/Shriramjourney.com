# Accessibility Guidelines

This guide outlines accessibility standards for Shriram Journey to ensure the platform is usable by all people, including those with disabilities.

## WCAG 2.1 Compliance Target

We aim for **WCAG 2.1 Level AA** compliance, which balances accessibility improvements with technical feasibility.

## Key Accessibility Principles

### 1. Images & Visual Content

**Alt Text Requirements:**
- All images must have meaningful, descriptive alt text
- Alt text should describe the image content and its purpose
- Decorative images can use empty alt: `alt=""`
- Max length: 125 characters (screen readers typically read this)

**Examples:**

```jsx
// ✅ Good
<img 
  src="/temple.jpg" 
  alt="Ram Mandir in Ayodhya with marble dome and intricate carvings at sunset"
/>

// ❌ Poor
<img src="/temple.jpg" alt="temple" />

// ❌ Very poor  
<img src="/temple.jpg" alt="" /> {/* Missing alt for meaningful image */}

// ✅ Decorative image
<img src="/decorative-border.jpg" alt="" role="presentation" />
```

### 2. Headings & Structure

**Proper Hierarchy:**
- Use only ONE `<h1>` per page (page title)
- Follow logical order: `<h1>` → `<h2>` → `<h3>` (don't skip levels)
- Never use headings purely for styling

**Semantic HTML:**

```jsx
// ✅ Good
<article>
  <h1>The Sacred Journey of Rama</h1>
  <p>Introduction paragraph...</p>
  
  <section>
    <h2>Early Life in Ayodhya</h2>
    <p>Content about Ayodhya...</p>
    
    <h3>Birth & Naming</h3>
    <p>Birth details...</p>
  </section>
</article>

// ❌ Poor
<div>
  <div className="large-text" style="font-size: 32px">The Sacred Journey</div>
  <p>Content...</p>
</div>
```

### 3. Color & Contrast

**Minimum Requirements:**
- Text: 4.5:1 contrast ratio (WCAG AA)
- Large text (18pt+): 3:1 contrast ratio
- Use tools like [Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Examples:**

```css
/* ✅ Good - Strong contrast */
.text-dark { color: #1a1a1a; background: #ffffff; } /* 21:1 */

/* ✅ Acceptable */
.text-gray { color: #424242; background: #ffffff; } /* 7.3:1 */

/* ❌ Poor - Too similar */
.text-light { color: #e8e8e8; background: #ffffff; } /* 1.1:1 */
```

### 4. Keyboard Navigation

All interactive elements must be keyboard accessible:

**Requirements:**
- All buttons, links, and form inputs accessible via Tab key
- Visible focus indicators (never remove outline)
- Logical tab order (left to right, top to bottom)
- Escape key closes modals/menus
- Enter/Space activates buttons

**Example - Focus Styles:**

```css
/* ✅ Good - Visible focus */
button:focus-visible {
  outline: 2px solid #d97706;
  outline-offset: 2px;
}

/* ❌ Poor - No focus indicator */
button:focus {
  outline: none;
}
```

**Testing:**
```
1. Open page
2. Press Tab repeatedly
3. Verify focus moves logically
4. Check that all interactive elements are reachable
5. Verify focus indicators are visible
```

### 5. Form Accessibility

**Label Association:**
```jsx
// ✅ Good
<label htmlFor="temple-name">Temple Name:</label>
<input id="temple-name" type="text" />

// ❌ Poor
<label>Temple Name:</label>
<input type="text" />
```

**Error Messages:**
```jsx
// ✅ Good
<input 
  id="email" 
  type="email"
  aria-required="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">Please enter valid email</span>

// ❌ Poor
<input type="email" />
Email must be valid {/* Not associated with input */}
```

### 6. ARIA (Accessible Rich Internet Applications)

Use ARIA to enhance semantic meaning for screen readers:

**Common ARIA Attributes:**

```jsx
// Navigation
<nav aria-label="Main navigation">
  <a href="/">Home</a>
  <a href="/map">Map</a>
</nav>

// Custom buttons
<button aria-pressed="false" onClick={() => togglePray()}>
  🙏 Start Prayer
</button>

// Descriptions
<button aria-describedby="tooltip">
  Help
</button>
<span id="tooltip">Click for frequently asked questions</span>

// Live regions (content updates)
<div aria-live="polite" aria-atomic="true">
  {livenessCount} people are watching live darshan
</div>

// Modal dialogs
<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <h2 id="modal-title">Confirm Booking</h2>
</div>

// Status messages
<span role="status" aria-live="polite">
  {uploadProgress}% uploaded
</span>

// Required fields
<label htmlFor="name">
  Name <span aria-label="required">*</span>
</label>
<input id="name" aria-required="true" />
```

**Common ARIA Roles:**
- `button` - For custom button elements
- `navigation` - For navigation landmarks
- `main` - For main content area
- `complementary` - For sidebars
- `contentinfo` - For footer
- `alert` - For error messages
- `status` - For status updates
- `tablist`, `tab`, `tabpanel` - For tab groups
- `dialog` - For modal dialogs
- `searchbox` - For search inputs

### 7. Skip Links

Provide a "Skip to Main Content" link at the top:

```jsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only"
>
  Skip to main content
</a>

{/* Navigation */}
<nav>...</nav>

{/* Main content */}
<main id="main-content">
  ...
</main>
```

**CSS for screen-reader-only content:**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### 8. Text Content

**Readability:**
- Use clear, simple language
- Short sentences (under 20 words)
- Avoid jargon without explanation
- Use bullet points for lists
- Define uncommon Sanskrit terms

**Examples:**

```jsx
// ✅ Good
<p>The Ramayana tells the story of Lord Rama's 14-year exile (vanvas) from his kingdom of Ayodhya.</p>

// ❌ Complex
<p>The Ramayana narrates the legendary chronicle of Shri Ram's prolonged banishment from his sovereign dominion.</p>
```

### 9. Links & Navigation

**Link Text:**
```jsx
// ✅ Good
<a href="/ram-mandir">Learn more about Ram Mandir</a>

// ❌ Poor (context-dependent)
<a href="/ram-mandir">Click here</a>

// ✅ Good - When link context is clear
<Card title="Ram Mandir">
  <p>The newly inaugurated temple...</p>
  <a href="/ram-mandir">Learn more →</a>
</Card>
```

### 10. Videos & Multimedia

**Requirements:**
- Captions/transcripts for audio and video
- Audio descriptions for visual content
- Transcripts for podcasts
- Controls keyboard accessible

```jsx
// ✅ Good
<figure>
  <video controls aria-label="Temple Aarti Ceremony">
    <source src="aarti.mp4" type="video/mp4" />
    <track kind="captions" src="captions.vtt" />
  </video>
  <figcaption>
    Ram Mandir evening aarti with bells and chanting
  </figcaption>
</figure>

// Transcript
<details>
  <summary>Video Transcript</summary>
  <p>The aarti ceremony begins with the sound of the bell...</p>
</details>
```

## Testing Checklist

### Automated Testing
- [ ] Run accessibility audit in Chrome DevTools
- [ ] Check with WAVE browser extension
- [ ] Use axe DevTools for comprehensive checks
- [ ] Validate with Lighthouse

### Manual Testing
- [ ] Tab through entire page (keyboard only)
- [ ] Check focus indicators are visible
- [ ] Verify color contrast (use Contrast Checker)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Zoom to 200% and check layout
- [ ] Disable images and check page still makes sense
- [ ] Use browser's text only mode

### Screen Reader Testing (Free Options)
- **Windows**: NVDA (free)
- **macOS**: VoiceOver (built-in)
- **iOS**: VoiceOver (built-in)
- **Android**: TalkBack (built-in)

## Tools & Resources

### Testing Tools
- [WAVE](https://wave.webaim.org/) - Visual accessibility feedback
- [axe DevTools](https://www.deque.com/axe/devtools/) - Comprehensive auditing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Built into Chrome
- [NVDA](https://www.nvaccess.org/) - Free screen reader
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WebAIM Color Contrast](https://webaim.org/articles/contrast/)

### Learning Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Web Accessibility by Google](https://www.udacity.com/course/web-accessibility--ud891)
- [A11y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## Common Mistakes to Avoid

| Mistake | Why It's Bad | Fix |
|---------|-------------|-----|
| Images with no alt text | Screen readers can't describe images | Add descriptive alt text |
| Only color to indicate status | Color-blind users miss information | Use color + icon/text |
| Clickable divs without role | Screen readers don't know it's clickable | Use `<button>` or add `role="button"` |
| Removed focus outlines | Keyboard users can't see where they are | Keep outlines, style them |
| Auto-playing videos | Surprises users and breaks concentration | Don't auto-play or provide mute option |
| Pop-ups that trap focus | Keyboard users can't escape | Implement proper modal focus management |
| Tiny clickable areas | Mobile & motor disability users can't click | Make targets at least 44x44px |
| Text as images | Text can't be resized or parsed by readers | Use actual text |
| Tables without headers | Screen readers can't understand structure | Use proper `<th>` tags |
| PDFs without tagging | Screen readers can't navigate PDFs | Tag PDFs or provide HTML alternative |

## Accessibility Checklist for New Features

Before shipping any feature, ensure:

- [ ] All images have descriptive alt text
- [ ] Headings follow proper hierarchy (one H1, logical nesting)
- [ ] Color contrast is 4.5:1 for text (3:1 for large text)
- [ ] Interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Forms have associated labels
- [ ] Error messages are clearly marked
- [ ] Custom components have proper ARIA roles
- [ ] Videos have captions and transcripts
- [ ] Links have descriptive text
- [ ] No auto-playing audio or video
- [ ] Layout works at 200% zoom
- [ ] Page makes sense with images disabled
- [ ] Tested with screen reader
- [ ] Tab order is logical

## Reporting Accessibility Issues

Found an accessibility problem? Help us improve!

1. **Document the issue:**
   - What's the problem?
   - What tool/browser/device were you using?
   - Can you reproduce it?

2. **File a GitHub issue** with label `accessibility`

3. **Include:**
   - Page URL
   - Description of barrier
   - Steps to reproduce
   - Affected users
   - Suggested fix (if known)

## Questions?

- Check [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- Ask in GitHub Discussions
- Email: [accessibility@shriramjourney.com](mailto:accessibility@shriramjourney.com)

---

**Remember**: Accessibility isn't a feature—it's a fundamental right. By making Shriram Journey accessible, we ensure that millions of devotees, regardless of ability, can benefit from this sacred platform. 🙏

