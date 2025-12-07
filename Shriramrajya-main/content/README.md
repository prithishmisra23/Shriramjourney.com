# Content Organization Guide

This directory structure organizes Ramayana content for easy contribution and maintenance.

## Structure

```
content/
├── episodes/              # Ramayana story episodes
│   ├── ayodhya/
│   │   ├── birth.md
│   │   ├── childhood.md
│   │   └── marriage.md
│   ├── chitrakoot/
│   ├── panchavati/
│   └── ...
├── temples/               # Temple information
│   ├── ram-mandir.md
│   ├── janaki-mandir.md
│   ├── rameswaram.md
│   └── ...
├── locations/             # Pilgrimage locations
│   ├── ayodhya.md
│   ├── mithila.md
│   └── ...
├── characters/            # Character profiles
│   ├── rama.md
│   ├── sita.md
│   ├── hanuman.md
│   └── ...
├── teachings/             # Dharma teachings & lessons
│   ├── bhagavad-gita.md
│   ├── dharma-principles.md
│   └── ...
└── translations/          # Translations by language
    ├── hindi/
    ├── spanish/
    └── ...
```

## Content Format

### Markdown Files

All content should be written in Markdown format with the following frontmatter:

```markdown
---
title: "Episode Title"
description: "Brief description for SEO"
keywords: "keyword1, keyword2, keyword3"
author: "Contributor Name"
date: "2024-01-15"
language: "en"
---

# Episode Title

Content here...
```

### Content Guidelines

1. **Accuracy**: Verify all historical and scriptural information
2. **Attribution**: Cite sources for stories and facts
3. **Respect**: Maintain spiritual reverence for sacred content
4. **Length**: 500-2000 words per piece
5. **Clarity**: Use simple, clear language
6. **Structure**: Use headings to organize content
7. **Links**: Link to related content using relative paths

### Example: Temple File

```markdown
---
title: "Ram Mandir - Ayodhya"
description: "Comprehensive guide to Ram Mandir temple in Ayodhya"
keywords: "Ram Mandir, Ayodhya, temple, pilgrimage"
author: "Your Name"
date: "2024-01-15"
location: "Ayodhya, Uttar Pradesh"
---

# Ram Mandir - Ayodhya

## Overview
[Description]

## Location & Access
- **Address**: [Full address]
- **Nearest Station**: [Railway/Airport]
- **Distance from City**: [Details]

## History
[Historical background]

## Architecture
[Architectural details]

## Visiting Information
- **Darshan Hours**: 6:00 AM - 9:00 PM
- **Entry Fee**: Free
- **Photography**: Allowed in outer areas

## Related Locations
- [Link to other temples]
- [Link to nearby locations]

## References
- [Source 1](link)
- [Source 2](link)
```

### Example: Episode File

```markdown
---
title: "The Birth of Ram"
description: "Story of Ram's birth in Ayodhya"
keywords: "Rama birth, Ayodhya, Dasharatha"
author: "Your Name"
date: "2024-01-15"
kanda: "Balakanda"
---

# The Birth of Ram

## Context
[Setting and background]

## The Story
[Detailed narration]

## Spiritual Significance
[Lessons and teachings]

## References
- Valmiki Ramayana, Balakanda
- Ramcharitmanas by Tulsidas
```

## How to Contribute Content

### Step 1: Choose Your Topic
- Check [existing content](.) to avoid duplication
- Pick from [ROADMAP.md](../docs/ROADMAP.md) for priority areas
- Open an issue to discuss before writing

### Step 2: Research & Write
- Use reliable sources (Valmiki Ramayana, scholarly works)
- Write 500-2000 words
- Include proper citations
- Use the template above

### Step 3: Organize & Format
- Save file in appropriate folder with filename: `topic-name.md`
- Use proper Markdown formatting
- Add frontmatter metadata
- Include related links

### Step 4: Submit
- Create a new branch: `content/topic-name`
- Add your file(s)
- Create a Pull Request
- Wait for review (1-2 weeks)

## Content Categories

### Episodes (Kandas)
- **Balakanda** - Birth and childhood
- **Ayodhyakanda** - Ayodhya and exile
- **Aranyakanda** - Forest exile
- **Kishkindakanda** - Monkeys and Hanuman
- **Sundarakanda** - Sita's rescue
- **Lankakandaseeking** - The final war
- **Uttarakanda** - Return and reign

### Locations (50+ Major Pilgrimage Sites)
- Ayodhya
- Chitrakoot
- Panchavati
- Rameswaram
- Hampi
- Mithila
- And more...

### Temples (20+ Major Temples)
- Ram Mandir, Ayodhya
- Janaki Mandir, Janakpur
- Rameswaram Temple
- Nashik Temples
- And more...

### Characters (15+ Key Characters)
- Ram (The Hero)
- Sita (The Heroine)
- Hanuman (The Devotee)
- Lakshman, Bharata, Shatrughna
- Ravana, Kumbhakarna
- Kaikeyi, Dasharatha
- And more...

## Translation Workflow

### For Translations:
1. Create folder: `translations/[language-code]/`
2. Mirror structure from `en/` folder
3. Translate all content maintaining HTML structure
4. Include glossary of translated terms
5. Test rendering of special characters

### Supported Languages (Priority Order)
1. **Hindi** (हिंदी)
2. **Spanish** (Español)
3. **Tamil** (தமிழ்)
4. **Telugu** (తెలుగు)
5. **Marathi** (मराठी)

Language codes: `en`, `hi`, `es`, `ta`, `te`, `mr`, etc.

## Quality Checklist

Before submitting content, ensure:

- [ ] Title is clear and descriptive
- [ ] Frontmatter is complete
- [ ] Content is 500+ words (unless brief item)
- [ ] Facts are cited and accurate
- [ ] Links work and are relevant
- [ ] No spelling or grammar errors
- [ ] Markdown formatting is correct
- [ ] Images have alt text
- [ ] Translation is accurate (if applicable)

## Getting Help

- **Questions about structure**: Open an issue or GitHub Discussion
- **Need a template**: Check this file's examples
- **Want feedback before PR**: Post in Discussions
- **Found an error**: Submit an issue or PR fix

## Credit & Recognition

All contributors are recognized in:
- GitHub commit history
- [Contributors page](https://shriramjourney.com/contributors)
- Annual contributor list
- Project README

Thank you for helping preserve and share the Ramayana! 🙏

---

**Last Updated**: January 2024  
**Maintainer**: Shriram Journey Content Team
