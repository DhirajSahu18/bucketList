import re

with open(r"d:\web\bucketList\src\data\trips.ts", "r", encoding="utf-8") as f:
    text = f.read()

matches = re.findall(r'id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"', text)
print("=== TRIPS IN TRIPS.TS ===")
for id_, name, slug in matches:
    print(f"ID: {id_:10s} | SLUG: {slug:35s} | NAME: {name}")

gallery_blocks = re.findall(r'slug:\s*"([^"]+)"[\s\S]*?gallery:\s*\[([\s\S]*?)\]', text)
print("\n=== GALLERIES IN TRIPS.TS ===")
for slug, gal in gallery_blocks:
    print(f"\nTrip: {slug}")
    imgs = re.findall(r'"([^"]+)"', gal)
    for img in imgs:
        print(f"  - {img}")
