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


GlassSystem v1.1 — Edge & Gloss Model
1️⃣ Outer Edge Highlight (The Shine Line)

This is the thin light border that makes it feel like real glass.

Define it as:

1px border

Semi-transparent white

Slight gradient fade

Example rule:

border: 1px solid rgba(255, 255, 255, 0.25);

But Apple doesn’t use flat borders.

So define this instead:

border: 1px solid rgba(255, 255, 255, 0.18);
box-shadow:
  0 0 0 1px rgba(255,255,255,0.05) inset;

Now you have:

Outer glass edge

Inner reflective rim

Tell Cursor:

All glass containers must use dual-edge highlight (outer + inner inset).

2️⃣ Glossy Top Reflection (Critical)

Apple glass always has a soft top highlight, like light hitting it from above.

Define this as:

A subtle white gradient overlay

Fades from top to transparent

Very low opacity

Implementation concept:

background: linear-gradient(
  to bottom,
  rgba(255,255,255,0.25),
  rgba(255,255,255,0.05) 40%,
  transparent 70%
);

But this must be layered over your glass background.

So tell Cursor:

Each glass container must include a top-directional gloss gradient overlay at 5–15% opacity.

That’s what makes it feel “wet” instead of flat.

3️⃣ Soft Edge Glow (Depth Layer)

To avoid looking like Windows Vista glass, Apple adds soft ambient glow.

Define:

box-shadow:
  0 8px 32px rgba(0,0,0,0.25),
  0 0 40px rgba(255,255,255,0.03);

This gives:

Depth shadow

Ambient atmospheric light

Tell Cursor:

Add subtle ambient edge glow, not harsh shadow.

🧠 Important: Define Light Direction

Apple glass always assumes:

☀️ Light source comes from TOP-LEFT

So define:

Global light direction: top-left.
All highlights must respect this.

That way hover states and shine animations follow the same physics.

🧊 If You Want Real “Premium iOS” Feel

Add this advanced rule:

Micro Noise Texture

Apple glass isn’t perfectly smooth.
It has micro noise.

Define:

1–2% noise texture

Very subtle overlay

Blend mode: overlay

Tell Cursor:

Apply ultra-subtle noise texture to avoid flat digital look.

