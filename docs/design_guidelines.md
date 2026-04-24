# Design Guidelines: Industrial Robotics Automation Website

## Design Approach
**Reference-Based Approach** drawing from industrial B2B leaders: Linear (clean layouts), Stripe (trust/clarity), Siemens (technical authority), and Boston Dynamics (robotics innovation). Focus on technical credibility, clear information hierarchy, and conversion-oriented design.

## Typography System

**Font Families**
- Primary: Inter (headings, UI elements) - technical clarity
- Secondary: System-ui (body text) - optimal readability
- Monospace: JetBrains Mono (technical specs, code snippets)

**Hierarchy**
- Hero Headlines: text-5xl lg:text-6xl font-bold tracking-tight
- Section Headers: text-3xl lg:text-4xl font-bold
- Subsection Headers: text-2xl font-semibold
- Feature Titles: text-xl font-semibold
- Body Text: text-base lg:text-lg leading-relaxed
- Technical Details: text-sm font-mono
- Captions/Meta: text-sm text-opacity-70

## Layout System

**Spacing Primitives**
Use Tailwind units: 4, 6, 8, 12, 16, 20, 24 for consistency
- Component padding: p-6 to p-8
- Section padding: py-16 lg:py-24
- Gap between elements: gap-6 to gap-12
- Container max-width: max-w-7xl

**Grid Patterns**
- Solution Cards: grid-cols-1 md:grid-cols-2 gap-8
- Feature Grid: grid-cols-1 md:grid-cols-3 gap-6
- Product Catalog: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Specs/Details: Two-column split on desktop (grid-cols-2 gap-12)

## Component Library

### Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo + horizontal menu (Solutions, Products, Cases, Resources, Contact)
- Dropdown mega-menu for Solutions (4 items with icons and brief descriptions)
- CTA button: "Request Demo" (prominent, right-aligned)
- Mobile: Hamburger with full-screen overlay menu

### Hero Section (Homepage)
- Full-width hero with industrial facility background image (blurred/darkened overlay)
- Centered content: Headline + subheadline + dual CTAs
- Trust indicators below: "Trusted by HD Hyundai Heavy Industries, Hanwha Ocean" with logos
- Animated scroll indicator
- Height: min-h-[85vh]

### Solution Pages Hero
- Split layout: 60/40 (content left, visual/diagram right)
- Headline + subheadline + key benefits (3-4 bullet points)
- Primary CTA + secondary link
- Height: min-h-[70vh]
- Right side: Product visualization or facility photo

### Core Components

**Solution Cards** (Homepage Grid)
- Card with subtle border, hover lift effect
- Icon/illustration top (96x96px area)
- Title (text-2xl font-semibold)
- 2-3 sentence description
- "Learn More" link with arrow
- Padding: p-8

**Feature Bullets**
- Icon (24x24) + bold title + description layout
- Use checkmark or technical icons from Heroicons
- Horizontal on desktop (flex), stacked on mobile
- Gap: gap-4 between icon and text

**Statistics/Metrics Bar**
- Grid of 3-4 stat cards
- Large number (text-4xl font-bold) + label below
- Centered alignment
- Background: subtle panel treatment

**Case Study Cards**
- Thumbnail image (16:9 aspect ratio)
- Client logo overlay
- Challenge → Solution → Results structure
- "View Case Study" CTA
- Grid: 2 columns desktop, 1 mobile

**Product Catalog Items**
- Image placeholder (square or 4:3)
- Product name (text-xl font-semibold)
- Brief spec list (3-4 items, text-sm)
- "View Details" + "Download Spec" buttons
- Border card with hover state

**CTA Sections**
- Full-width container with centered content
- Headline + supporting text
- Form inline or button to modal
- Background: contrasting panel
- Padding: py-20

**Contact Form**
- Two-column layout (form left, contact info right)
- Fields: Company, Name, Email, Phone, Solution Interest (dropdown), Message
- Checkbox: "I agree to be contacted"
- Submit button: "Request Consultation"
- Success/error states clearly indicated

**Footer**
- Four-column grid: Solutions, Products, Company, Contact
- Newsletter signup inline
- Social links + certifications/partner logos
- Copyright + legal links bottom row
- Padding: py-16

### Technical Spec Tables
- Clean table design with alternating row treatment
- Headers: font-semibold, border-bottom
- Cells: py-3 px-4
- Responsive: Stack on mobile with label-value pairs

### Resource Downloads
- List or card layout
- Document icon + title + file size/type
- Download button
- Optional: Preview thumbnail for videos

## Images Strategy

**Required Images**
1. **Homepage Hero**: Industrial facility/robotics automation in action (1920x1080 minimum) - dramatic, professional
2. **Solution Page Heroes**: Each of 4 solutions needs representative image (1200x800) - cutting systems, AMR in facility, AI robot arm, pipeline overview
3. **Product Photos**: Clean product shots on neutral background (800x800 square format)
4. **Case Study Thumbnails**: Facility/application photos (16:9 format, 800x450)
5. **About/Team**: Optional facility tour or team photos
6. **Icons**: Use Heroicons library for UI icons, custom technical icons for solution-specific features

**Image Treatment**
- Hero images: Darkened overlay (opacity-60) for text readability
- Product images: Clean white/neutral background
- Case study images: Authentic facility photos showing equipment in use
- All images: Lazy loading, responsive srcset

## Animation Guidelines
Use sparingly for professional B2B context:
- Scroll-triggered fade-in for sections (subtle, single use)
- Card hover: Slight lift (translate-y-1) + shadow increase
- Navigation: Smooth transitions for dropdowns
- CTA buttons: Subtle scale on hover
- **No** parallax, **no** excessive animations
- Focus on smooth, purposeful micro-interactions

## Page-Specific Layouts

**Solutions Detail Pages**
1. Hero (70vh)
2. Overview Section (prose format, max-w-4xl)
3. Key Benefits Grid (3-column)
4. System Configuration (diagram/visual + specs list)
5. Industry Applications (card grid)
6. Case Studies (2-3 related)
7. Resources Downloads
8. CTA Section (demo request)

**Product Catalog**
- Filter sidebar (desktop) or dropdown (mobile)
- Grid of product cards (3 columns desktop)
- Quick view modal on card click
- Detailed specs in accordion format

**Case Studies Page**
- Filter by Industry/Solution/Product (horizontal tabs)
- Masonry or standard grid layout
- Individual case: Large hero → Challenge → Solution → Results → Media gallery

**Resources Page**
- Categorized sections (Brochures, Videos, Whitepapers)
- Search/filter functionality
- Card grid with download/view actions

## Accessibility & Quality
- Semantic HTML5 structure
- ARIA labels for all interactive elements
- Keyboard navigation for all menus/modals
- Form validation with clear error states
- Focus indicators visible on all interactive elements
- Alt text for all images (descriptive for technical content)

## Trust & Credibility Elements
- Client logos prominently displayed (homepage, case studies)
- Certifications/standards badges (footer, about)
- Quantitative results in case studies (percentages, metrics)
- Technical specifications clearly documented
- Professional photography showing real installations
- Clear contact information and response time expectations