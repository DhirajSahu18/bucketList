import os
import re

src_dir = r"d:\web\bucketList\src"
pattern = re.compile(r"['\"]/images/[^'\"]+['\"]")
found = []

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith((".ts", ".tsx", ".js", ".jsx")):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8", errors="ignore") as fp:
                for idx, line in enumerate(fp, 1):
                    for m in pattern.finditer(line):
                        found.append((os.path.relpath(p, src_dir), idx, m.group(0)))

print(f"Found {len(found)} image references in src:\n")
for rel, idx, img in sorted(found):
    print(f"{rel:40s} L{idx:3d} : {img}")
