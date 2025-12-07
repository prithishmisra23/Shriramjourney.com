# Contributing to Shriram Journey

Thank you for your interest in contributing to the Shriram Journey! This is a global, open-source "Dharma project" dedicated to preserving and sharing the sacred legacy of the Ramayana. Whether you're a developer, writer, translator, designer, or devotee, your contribution matters.

## 📖 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Coding Guidelines](#coding-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Content Guidelines](#content-guidelines)
- [Translation Guidelines](#translation-guidelines)
- [Design & UX Contributions](#design--ux-contributions)
- [Reporting Issues](#reporting-issues)
- [Questions & Support](#questions--support)

## Code of Conduct

Please read and follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

**TL;DR**: Be respectful, inclusive, and kind. Harassment, discrimination, or disrespect will not be tolerated.

## Ways to Contribute

### 🐛 **Report Bugs**
- Found a bug? [Open an issue](https://github.com/prithishmisra23/Shriramjourney.com/issues/new?template=bug_report.md)
- Include steps to reproduce, expected behavior, and actual behavior
- Add screenshots or videos if applicable

### ✨ **Suggest Features**
- Have an idea? [Suggest a feature](https://github.com/prithishmisra23/Shriramjourney.com/issues/new?template=feature_request.md)
- Check [existing discussions](https://github.com/prithishmisra23/Shriramjourney.com/discussions) first
- Describe the problem it solves and why it matters

### 💻 **Code Contributions**
- Fix bugs or implement features
- Improve performance or accessibility
- Write tests to increase coverage
- Refactor code for clarity and maintainability
- See [Coding Guidelines](#coding-guidelines)

### 📝 **Content Contributions**
- Expand Ramayana stories and narratives
- Write detailed temple descriptions and histories
- Create pilgrimage guides and itineraries
- Research and verify historical accuracy
- See [Content Guidelines](#content-guidelines)

### 🌐 **Translations**
- Translate content into new languages
- Translate UI labels and navigation
- Ensure cultural accuracy and localization
- See [Translation Guidelines](#translation-guidelines)

### 🎨 **Design & UX**
- Improve user interface and user experience
- Create spiritual artwork and illustrations
- Design temple maps, floor plans, or icons
- Contribute photography or visual assets
- See [Design & UX Contributions](#design--ux-contributions)

### 📚 **Documentation**
- Improve README, guides, or tutorials
- Add API documentation
- Write developer guides
- Create architecture diagrams

### 🧪 **Testing**
- Write unit tests for components
- Create integration tests
- Perform manual testing on different devices/browsers
- Report edge cases and bugs found

## Getting Started

### Prerequisites
- **Node.js** 16+ (18+ recommended)
- **pnpm** 8+ ([install pnpm](https://pnpm.io/installation))
- Git
- GitHub account

### Step 1: Fork & Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/Shriramjourney.com.git
cd Shriramjourney.com

# Add upstream remote to stay in sync
git remote add upstream https://github.com/prithishmisra23/Shriramjourney.com.git
```

### Step 2: Create a Branch

```bash
# Update main branch
git fetch upstream
git checkout main
git merge upstream/main

# Create a feature branch (use descriptive names)
git checkout -b feature/add-marathi-translation
# or
git checkout -b fix/chatbot-response-delay
# or
git checkout -b docs/improve-setup-guide
```

Branch naming conventions:
- `feature/description` — New features
- `fix/description` — Bug fixes
- `docs/description` — Documentation
- `refactor/description` — Code refactoring
- `test/description` — Tests
- `chore/description` — Maintenance tasks

### Step 3: Set Up Development Environment

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will open at `http://localhost:5173`

### Step 4: Make Your Changes

Follow the relevant guidelines:
- [Coding Guidelines](#coding-guidelines) for code
- [Content Guidelines](#content-guidelines) for content
- [Translation Guidelines](#translation-guidelines) for translations
- [Design & UX Contributions](#design--ux-contributions) for design

### Step 5: Test Your Changes

```bash
# Run tests
pnpm test

# Type check
pnpm typecheck

# Format code
pnpm format.fix

# Build production bundle
pnpm build
```

### Step 6: Commit & Push

Follow [Commit Message Guidelines](#commit-messages):

```bash
git add .
git commit -m "feat: Add Marathi translation support for navigation"
git push origin feature/add-marathi-translation
```

### Step 7: Create Pull Request

1. Go to [GitHub Pull Requests](https://github.com/prithishmisra23/Shriramjourney.com/pulls)
2. Click "New Pull Request"
3. Select your branch and fill out the PR template
4. Reference related issues with `Fixes #123` or `Related to #456`
5. Wait for code review and CI checks to pass

See [Pull Request Process](#pull-request-process) for details.

## Coding Guidelines

### Code Style

We use **Prettier** for formatting and **ESLint** for linting. Code must pass both checks:

```bash
# Format code
pnpm format.fix

# Check for lint errors
npx eslint . --fix
```

### TypeScript

All code should be **100% TypeScript**. No `any` types without good reason:

```typescript
// ✅ Good
interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

function Card({ title, description, icon }: CardProps) {
  return <div>{title}</div>;
}

// ❌ Avoid
function Card(props: any) {
  return <div>{props.title}</div>;
}
```

### React Best Practices

- **Functional components** only (no class components)
- **Hooks** for state management
- **Proper prop typing** with interfaces
- **Memoization** for expensive components
- **Accessibility** always in mind

```typescript
// ✅ Good
interface CounterProps {
  initialValue?: number;
}

function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default memo(Counter);
```

### Component Organization

```
components/
├── YourComponent.tsx       # Component
├── YourComponent.test.tsx  # Tests
├── YourComponent.types.ts  # Types (if complex)
└── index.ts                # Export
```

```typescript
// YourComponent.tsx
export interface YourComponentProps {
  // Props
}

export function YourComponent(props: YourComponentProps) {
  // Implementation
}

export default YourComponent;
```

### File & Folder Naming

- **Components**: PascalCase (`Navigation.tsx`, `RamMandir3DViewer.tsx`)
- **Pages**: PascalCase (`Index.tsx`, `About.tsx`)
- **Utilities**: camelCase (`translations.ts`, `utils.ts`)
- **Tests**: `FileName.test.ts` or `FileName.spec.ts`
- **Styles**: Keep in component files or `global.css`

### CSS & Tailwind

- Use **TailwindCSS** utility classes primarily
- Extract repeated patterns into components
- Use `@apply` for reusable CSS classes
- Maintain mobile-first responsive design
- Follow design system colors and spacing

```typescript
// ✅ Good
function Card({ title }: { title: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-amber-950">{title}</h3>
    </div>
  );
}

// If repeated often:
function Card({ title }: { title: string }) {
  return <div className="card">{title}</div>;
}

// In global.css:
// .card { @apply rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow; }
```

### Imports & Exports

- Use path aliases: `@/components`, `@/pages`, `@shared/*`
- Prefer named exports for components
- Use default export only for page components

```typescript
// ✅ Good
import { Button } from "@/components/ui/button";
import { DemoResponse } from "@shared/api";

// ❌ Avoid
import Button from "../../../components/ui/button";
import * as utils from "@/lib/utils";
```

### Testing

Write tests for:
- Components (unit tests)
- Utilities and helpers
- Complex logic and edge cases
- Accessibility features

```typescript
// YourComponent.test.ts
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { YourComponent } from './YourComponent';

describe('YourComponent', () => {
  it('renders title correctly', () => {
    render(<YourComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const onClick = vi.fn();
    render(<YourComponent onClick={onClick} />);
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalled();
  });
});
```

## Commit Messages

Follow **Conventional Commits** format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring without feature changes
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependencies

### Scope (optional)
Area affected: `components`, `pages`, `server`, `styles`, `translations`, etc.

### Subject
- Use imperative mood ("add" not "added")
- Don't capitalize first letter
- No period at end
- Max 50 characters

### Body (optional)
- Explain **what** and **why**, not **how**
- Wrap at 72 characters
- Separate from subject with blank line

### Examples

```bash
# Good
git commit -m "feat(i18n): Add Marathi translation support"

git commit -m "fix(chatbot): Resolve response delay on slow networks

The chatbot was waiting for full response before displaying.
Now it streams responses using Server-Sent Events."

git commit -m "docs: Improve setup instructions for Windows"

# Less ideal
git commit -m "fixed stuff"
git commit -m "Updated code"
git commit -m "WIP: trying something"
```

## Pull Request Process

### Before Opening a PR

1. **Check existing PRs** — Don't duplicate work
2. **Create an issue first** — Discuss major changes
3. **Update from main** — Ensure no conflicts

```bash
git fetch upstream
git rebase upstream/main
```

4. **Test locally** — Run `pnpm test`, `pnpm build`, `pnpm format.fix`

### PR Description Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Fixes #123
Related to #456

## Changes
- Change 1
- Change 2
- Change 3

## Testing
How was this tested?
- [ ] Manual testing on device X
- [ ] Unit tests added
- [ ] Existing tests pass

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Changes are well-commented
- [ ] Accessibility considered
```

### After Opening a PR

- Be responsive to feedback
- Make requested changes in new commits (don't amend)
- Re-request review after updates
- Keep discussions constructive and kind

### Merging

- Maintainers merge after approval
- Usually: squash & merge for cleaner history
- Requires passing CI checks
- At least one approval required

## Content Guidelines

### Writing Standards

- **Accuracy**: Verify all facts and dates
- **Respectfulness**: Maintain spiritual reverence for sacred subjects
- **Clarity**: Use clear, simple language
- **Sourcing**: Cite references for historical/religious claims
- **Neutrality**: Present multiple perspectives when relevant
- **Accessibility**: Use alt text for images, transcripts for audio

### Ramayana Content

- Follow established versions (Valmiki, Tulsi, regional variants)
- Include historical/cultural context
- Acknowledge different interpretations
- Provide proper attributions
- Use inclusive, respectful language

### Temple Descriptions

- Verify information with temple authorities when possible
- Include:
  - Basic information (location, deity, establishment date)
  - Architectural significance
  - Historical background
  - Ritual practices and timings
  - Visitor information (entry fees, photography rules)
  - Local significance and legends
  - Contact information

### Pilgrimage Guides

- Clear, step-by-step information
- Transportation options
- Accommodation recommendations
- Local customs and etiquette
- Safety tips
- Best times to visit
- Cost estimates
- Photos and maps

### Example Structure

```markdown
# [Temple/Location Name]

## Overview
[Introductory paragraph]

## History
[Historical background and significance]

## Location
[Address, how to reach, maps]

## Architecture
[Architectural style and features]

## Rituals & Practices
[Daily practices, festivals, special pujas]

## Visitor Information
- Entry: [Fees and timings]
- Photography: [Rules]
- Facilities: [Bathrooms, shops, etc.]
- Accessibility: [Wheelchair access, etc.]

## Contact & Resources
[Contact details, official website]

## Related Locations
[Links to nearby temples or sites]

## References
[Sources and citations]
```

## Translation Guidelines

### Languages Priority
1. **Hindi** (Next priority)
2. **Spanish** (Global reach)
3. **Tamil, Telugu, Marathi** (Regional)
4. **Other** (As resources allow)

### Translation Process

1. **Coordinate**: Comment on [Translation Discussion](https://github.com/prithishmisra23/Shriramjourney.com/discussions) first
2. **Create branch**: `feature/add-hindi-translation`
3. **Translate**: Use consistent terminology (glossary below)
4. **Test**: Verify rendering and character support
5. **Review**: Request review from native speakers
6. **Submit**: Create PR with translation

### Glossary (for consistent terminology)

| English | Hindi | Spanish | Notes |
|---------|-------|---------|-------|
| Ramayana | रामायण | Ramayana | Sacred epic text |
| Rama / Ram / Shri Ram | राम | Rama | Main protagonist |
| Sita / Mata Janaki | सीता | Sita | Rama's consort |
| Dharma | धर्म | Dharma | Righteous duty |
| Ashram | आश्रम | Ashram | Hermitage/stage of life |
| Darshan | दर्शन | Darshan | Viewing of deity |
| Temple/Mandir | मंदिर | Templo | Place of worship |

### Technical Implementation

- Store translations in `client/lib/translations.ts`
- Use LanguageContext for switching
- Test with RTL and complex scripts (Devanagari)
- Ensure font support (add to `global.css` if needed)

```typescript
// translations.ts example
export const translations = {
  en: {
    home: "Home",
    about: "About Ramayana",
  },
  hi: {
    home: "होम",
    about: "रामायण के बारे में",
  },
};
```

## Design & UX Contributions

### Design System

- Reference `client/global.css` and `tailwind.config.ts`
- Use existing color palette (amber/orange theme)
- Maintain brand consistency
- Ensure accessibility (color contrast, readability)

### Icons & Imagery

- Use Lucide React icons for UI
- Provide high-quality images (min 1200px width for content)
- Include proper attribution
- Ensure images are licensed (use royalty-free sources)
- Optimize for web (compress, use WebP format)

### UX Best Practices

- Mobile-first responsive design
- Keyboard navigation support
- WCAG 2.1 AA accessibility standard
- Fast load times (optimize images, code-split)
- Clear error messages and feedback
- Consistent spacing and typography

### Design Files

- Figma for UI mockups (share link in PR)
- SVG for icons and illustrations
- Include dark mode variants if applicable

### Accessibility Checklist

- [ ] Color contrast meets WCAG AA (4.5:1 text)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Alt text for images
- [ ] ARIA labels for custom components
- [ ] Focus indicators visible
- [ ] Form labels properly associated

## Reporting Issues

### Bug Reports

Use the [Bug Report Template](https://github.com/prithishmisra23/Shriramjourney.com/issues/new?template=bug_report.md):

- **Title**: Clear, specific description
- **Environment**: Browser, OS, device
- **Steps to reproduce**: Exact steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happened
- **Screenshots/video**: If applicable
- **Browser console errors**: Any error messages

### Feature Requests

Use the [Feature Request Template](https://github.com/prithishmisra23/Shriramjourney.com/issues/new?template=feature_request.md):

- **Title**: Clear, concise description
- **Problem**: What problem does it solve?
- **Solution**: Proposed approach
- **Alternatives**: Other solutions considered
- **Impact**: Who benefits? How?

## Questions & Support

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions, ideas, general discussion
- **Email**: [contributors@shriramjourney.com](mailto:contributors@shriramjourney.com)
- **Discord/Slack**: [Join community server](link-when-available)

---

## Recognition

Contributors are recognized in:
- [GitHub Contributors](https://github.com/prithishmisra23/Shriramjourney.com/graphs/contributors)
- Project README.md
- [Contributors page](https://shriramjourney.com/contributors) (coming soon)
- Annual Dharma Contributor Awards (planned)

---

## Legal

By contributing, you agree that:
- Your code contributions are licensed under the MIT License
- Your content contributions are licensed under CC-BY-SA 4.0
- You have the right to contribute the work
- You grant the project perpetual license to use your contributions

See [LICENSE](LICENSE) for full details.

---

## Inspiration

> "The code you write, the stories you share, and the translations you create are all acts of **Seva (service)** to a global community. Thank you for being part of the Dharma journey." 🙏

---

**Last Updated**: 2024  
**Questions?** Open an issue or discussion on GitHub!
