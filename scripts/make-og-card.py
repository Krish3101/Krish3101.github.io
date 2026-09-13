#!/usr/bin/env python3
"""Draw assets/og-card.png, the 1200x630 image link previews use.

Georgia is what the stylesheet falls back to when Instrument Serif has not
loaded, so the card matches the page a visitor sees before the webfont arrives.

    python3 scripts/make-og-card.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
MARGIN = 88

PAPER = "#faf8f4"
INK = "#1f1c17"
INK_SOFT = "#40392f"
MUTED = "#6b6358"
ACCENT = "#a03e2a"
RULE = "#e3ddd2"

FONTS = Path("/System/Library/Fonts/Supplemental")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "og-card.png"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    path = FONTS / name
    if not path.exists():
        raise SystemExit(f"missing font: {path}")
    return ImageFont.truetype(str(path), size)


def main() -> None:
    card = Image.new("RGB", (WIDTH, HEIGHT), PAPER)
    draw = ImageDraw.Draw(card)

    # A single accent stripe down the left edge, the only colour on the card.
    draw.rectangle([0, 0, 7, HEIGHT], fill=ACCENT)

    draw.text((MARGIN, 92), "krish3101.github.io", font=font("Georgia.ttf", 24), fill=MUTED)

    draw.text((MARGIN, 152), "Krishkumar Kalya", font=font("Georgia.ttf", 82), fill=INK)

    statement = font("Georgia Italic.ttf", 36)
    draw.text((MARGIN, 274), "I build things and put them online.", font=statement, fill=INK_SOFT)
    draw.text((MARGIN, 326), "Across the stack, and I keep it simple.", font=statement, fill=INK_SOFT)

    draw.line([(MARGIN, 452), (WIDTH - MARGIN, 452)], fill=RULE, width=1)

    stack = "Java  ·  Spring Boot  ·  Python  ·  FastAPI  ·  TypeScript  ·  React  ·  PostGIS"
    draw.text((MARGIN, 486), stack, font=font("Georgia.ttf", 25), fill=MUTED)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    card.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
