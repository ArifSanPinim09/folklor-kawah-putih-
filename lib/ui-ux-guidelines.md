# UI/UX Guidelines for Folklor Kawah Putih

Based on `ui-ux-pro-max-skill` analysis. Apply these principles to all components.

---

## Critical Rules (Must Follow)

### 1. Accessibility
- **Color contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Alt text**: Descriptive alt for all meaningful images
- **Keyboard navigation**: Tab order matches visual order
- **Aria labels**: For icon-only buttons (e.g., menu hamburger, close button)
- **Heading hierarchy**: Sequential h1→h6, no level skip
- **Skip links**: "Skip to main content" for keyboard users

### 2. Touch & Interaction
- **Touch targets**: Minimum 44×44px for all interactive elements
- **Touch spacing**: Minimum 8px gap between touch targets
- **Loading feedback**: Disable buttons during async operations, show spinner
- **Tap feedback**: Visual feedback within 100ms (scale, opacity, or elevation)
- **Cursor pointer**: Add to all clickable elements

### 3. Icons (Not Emojis)
- **Use Lucide React** for all icons (navigation, callouts, categories)
- **Consistent style**: Same stroke width within visual layer
- **Icon sizing**: Define as tokens (icon-sm: 16px, icon-md: 24px, icon-lg: 32px)
- **Icon alignment**: Align to text baseline, consistent padding

---

## High Priority Rules

### 4. Performance
- **Image optimization**: Use `next/image` with proper sizes
- **Lazy loading**: Non-hero images load lazily
- **CLS prevention**: Reserve space for images/async content
- **Font loading**: Use `font-display: swap` (already configured in next/font)

### 5. Layout & Responsive
- **Mobile-first**: Design for 360px, scale up
- **Breakpoints**: 375px (small), 768px (tablet), 1024px (desktop), 1440px (large)
- **No horizontal scroll**: Content fits viewport width
- **Spacing system**: 4pt/8dp increments (4, 8, 12, 16, 24, 32, 48, 64, 96)
- **Container width**: max-w-6xl or max-w-7xl on desktop
- **Safe areas**: Respect notch, status bar, gesture area on mobile

### 6. Typography
- **Base size**: 16px minimum for body text on mobile
- **Line height**: 1.6–1.8 for body text (comfortable reading on mobile)
- **Line length**: 35–60 chars on mobile, 60–75 on desktop
- **Font pairing**: Fraunces (serif, headings) + Plus Jakarta Sans (sans, body)
- **Type scale**: Display (4.5rem), H1 (3rem), H2 (2.25rem), H3 (1.75rem), Body-lg (1.125rem), Body (1rem), Caption (0.875rem)

### 7. Color System
- **Semantic tokens**: Use custom palette, not default Tailwind colors
- **Primary**: `danau-500` (#3F6B66) — brand color
- **Accent**: `belerang-400` (#D9B26C) — highlights
- **Background**: `kabut-50` (#F7F5F1) — warm white
- **Text**: `arang-900` (#211F1C) — body text
- **Muted**: `kabut-abu` (#A8A296) — secondary text

### 8. Navigation
- **Predictable back**: Preserve scroll/state on back navigation
- **Active state**: Current location visually highlighted
- **Mobile menu**: Hamburger with slide-in panel (not dropdown)
- **Deep linking**: All pages reachable via URL

---

## Medium Priority Rules

### 9. Animation
- **Duration**: 150–300ms for micro-interactions, ≤400ms for complex transitions
- **Easing**: ease-out for entering, ease-in for exiting
- **Scroll reveal**: `whileInView` with `viewport={{ once: true }}`
- **Parallax**: Use `useScroll` + `useTransform` for depth effect
- **Reduced motion**: Respect `prefers-reduced-motion` media query
- **Spring physics**: Prefer spring curves for natural feel

### 10. Layout Patterns
- **Asymmetric layout**: Alternate image position (left/right) for variety
- **White space**: Generous, intentional spacing
- **Editorial feel**: Large typography, full-bleed photos
- **Scroll storytelling**: Each section reveals new content

---

## Component-Specific Guidelines

### StoryHero
- Full-bleed photo with overlay gradient (subtle, not distracting)
- Large serif title with fade-up animation
- Eyebrow text with wider letter-spacing
- Scroll indicator with bounce animation
- **Touch**: Scroll indicator must be ≥44px tap area

### StorySection
- Asymmetric layout (photo left/right alternating)
- 2-3 paragraphs with scroll-reveal per paragraph
- **Line height**: 1.7 for comfortable reading
- **Max width**: 65–75 chars per line on desktop

### CalloutBox
- Left border (not full box shadow)
- Icon per variant (Lightbulb, Leaf/HandHeart, Quote)
- **Contrast**: Border and icon must meet 4.5:1 against background
- **Spacing**: 16px padding, 8px gap between icon and text

### Timeline
- Vertical on mobile, horizontal on desktop
- Progressive animation on scroll
- **Touch targets**: Each timeline point ≥44px
- **Spacing**: Consistent gaps between points

### GalleryGrid
- 2 columns on mobile, varied sizes on desktop
- **Touch**: Each image ≥44px tap area
- **Loading**: Lazy load non-visible images
- **Alt text**: Descriptive for each image

### FactCarousel
- Horizontal drag with snap
- **Touch**: Drag gesture with momentum
- **Progress indicator**: Thin line, not dots
- **Animation**: Smooth snap transition

### MapSection
- Custom info card (not default Google Maps popup)
- **Touch**: Markers ≥44px tap area
- **Responsive**: Map fits viewport on mobile

---

## Pre-Delivery Checklist

Before delivering any UI component:

### Visual Quality
- [ ] No emojis used as icons
- [ ] All icons from Lucide React, consistent style
- [ ] Pressed states don't shift layout
- [ ] Semantic color tokens used (no hardcoded hex)

### Interaction
- [ ] All tappable elements have pressed feedback
- [ ] Touch targets ≥44px
- [ ] Micro-interactions 150-300ms
- [ ] Disabled states visually clear
- [ ] Screen reader focus order correct

### Accessibility
- [ ] Text contrast ≥4.5:1
- [ ] Alt text on all images
- [ ] Keyboard navigation works
- [ ] `prefers-reduced-motion` respected

### Layout
- [ ] Safe areas respected
- [ ] No horizontal scroll on mobile
- [ ] Consistent spacing rhythm
- [ ] Readable text measure (35-75 chars/line)

---

## Quick Reference Commands

```bash
# Generate design system
python3 ~/.claude/plugins/marketplaces/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/scripts/search.py "tourism destination natural cultural" --design-system -p "Folklor Kawah Putih"

# Search for UX guidelines
python3 ~/.claude/plugins/marketplaces/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux

# Search for style recommendations
python3 ~/.claude/plugins/marketplaces/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/scripts/search.py "editorial destination showcase" --domain style
```
