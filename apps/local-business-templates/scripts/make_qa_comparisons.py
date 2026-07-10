from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
REFERENCE_ROOT = Path.home() / ".codex/generated_images/019f4c86-cd53-7ba0-aadf-cf694c182e0e"
PAIRS = {
    "mesa": (
        REFERENCE_ROOT / "exec-5c590cf0-51d1-4245-a447-13c83823f9ea.png",
        ROOT / "qa/mesa-desktop.png",
    ),
    "turno": (
        REFERENCE_ROOT / "exec-39b32bd4-74b4-4ba9-b68c-8e1743e51832.png",
        ROOT / "qa/turno-desktop.png",
    ),
    "oficio": (
        REFERENCE_ROOT / "exec-927b2044-71c3-4b90-a89b-9da90278e4af.png",
        ROOT / "qa/oficio-desktop.png",
    ),
}

SECTIONS = {
    "mesa": ["mesa-proof-1.png", "mesa-proof-2.png", "mesa-proof-3.png", "mesa-proof-4.png"],
    "turno": ["turno-proof-1.png", "turno-proof-2.png", "turno-proof-3.png", "turno-proof-4.png"],
    "oficio": ["oficio-proof-1.png", "oficio-proof-2.png", "oficio-proof-3.png", "oficio-proof-4.png"],
}

LIBRARY_IDS = [
    "mesa-viva", "turno", "oficio-claro", "mercado",
    "taller", "clinica-serena", "patio", "estudio",
    "raiz", "aula", "nido", "casa-abierta",
    "obrador", "nocturno", "botanica", "ruta",
    "liga", "sastreria", "orbita", "barrio",
]


def fit_width(image: Image.Image, width: int) -> Image.Image:
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.Resampling.LANCZOS)


for name, section_files in SECTIONS.items():
    sections = [Image.open(ROOT / "qa" / filename).convert("RGB") for filename in section_files]
    stitched = Image.new("RGB", (1440, sum(section.height for section in sections)), "white")
    y = 0
    for section in sections:
        stitched.paste(section, (0, y))
        y += section.height
    stitched.save(ROOT / f"qa/{name}-stitched.jpg", quality=88, optimize=True)

for name, (reference_path, _) in PAIRS.items():
    implementation_path = ROOT / f"qa/{name}-stitched.jpg"
    reference = fit_width(Image.open(reference_path).convert("RGB"), 720)
    implementation = fit_width(Image.open(implementation_path).convert("RGB"), 720)
    label_height = 48
    canvas_height = max(reference.height, implementation.height) + label_height
    canvas = Image.new("RGB", (1440, canvas_height), "white")
    canvas.paste(reference, (0, label_height))
    canvas.paste(implementation, (720, label_height))
    draw = ImageDraw.Draw(canvas)
    draw.text((18, 16), "SOURCE VISUAL", fill="black")
    draw.text((738, 16), "IMPLEMENTATION", fill="black")
    canvas.save(ROOT / f"qa/{name}-comparison.jpg", quality=88, optimize=True)

thumb_width = 360
thumb_height = 225
label_height = 34
sheet = Image.new("RGB", (thumb_width * 4, (thumb_height + label_height) * 5), "white")
sheet_draw = ImageDraw.Draw(sheet)
for index, template_id in enumerate(LIBRARY_IDS):
    source = Image.open(ROOT / f"qa/library/{template_id}.png").convert("RGB")
    source.thumbnail((thumb_width, thumb_height), Image.Resampling.LANCZOS)
    x = (index % 4) * thumb_width
    y = (index // 4) * (thumb_height + label_height)
    sheet.paste(source, (x, y))
    sheet_draw.text((x + 10, y + thumb_height + 10), f"{index + 1:02d}  {template_id}", fill="black")
sheet.save(ROOT / "qa/library-contact-sheet.jpg", quality=88, optimize=True)
