1. Background

Base background: soft gradient

Example:

#0f172a → #1e293b

Use subtle radial highlights

No pure black

2. Glass Containers

All cards, navbars, modals must follow:

Background: rgba(255,255,255,0.08)

Backdrop blur: 20px

Border: 1px solid rgba(255,255,255,0.18)

Border radius: 20px – 28px

Shadow:

0 8px 32px rgba(0,0,0,0.25)

Must use:

backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
3. Elevation Layers

Define layers:

Layer 0 → Background
Layer 1 → Glass cards
Layer 2 → Floating elements
Layer 3 → Modals

Each layer increases:

Blur

Shadow intensity

Opacity slightly

4. Typography

Font: Inter / SF Pro style

High contrast white text

Subtle opacity for secondary text (0.7)

No heavy bold everywhere.

5. Motion

All animations:

200–300ms

Ease-out curve

Slight scale on hover (1.02)

Smooth fade

No aggressive bounce.

6. Buttons

Primary:

Glass background

Slight glow

Soft inner highlight

Hover:

Increase brightness

Increase blur slightly

🧠 Step 3 — How You Prompt Cursor After This

Now instead of writing long prompts, you say:

Refactor this section using GlassSystem v1 rules.

Cursor will:

Read your file

Follow defined constraints

Apply consistent glass styling

🔥 Step 4 — Make It Stronger (Very Important)

Add visual reference description once:

In the same file, add:

Design Inspiration Reference:
Modern iOS 17 system UI
VisionOS panels
Apple Music macOS glass overlays
Not heavy neumorphism
Not frosted Windows 7 style

This prevents Cursor from giving you ugly fake glass.

🧩 Step 5 — Make It Sticky Memory

In Cursor:

Open Chat

Paste:

From now on, all UI must follow GlassSystem v1 defined in /design-system/glass-system.md.
If any component violates the system, suggest correction.

Now it becomes persistent instruction context.

🧊 If You Want Even More Control

Define tokens like this:

--glass-bg: rgba(255,255,255,0.08);
--glass-border: rgba(255,255,255,0.18);
--glass-blur: 20px;
--glass-radius: 24px;