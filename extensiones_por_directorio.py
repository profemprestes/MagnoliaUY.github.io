import os
from collections import defaultdict

# Ruta del proyecto
root_dir = r"G:\01-Magnolia\project-bolt-sb1-hgvak27q (1)\project"

# Diccionario para guardar extensiones por directorio
ext_by_folder = defaultdict(set)

# Recorrer el directorio
for dirpath, _, filenames in os.walk(root_dir):
    for filename in filenames:
        _, ext = os.path.splitext(filename)
        if ext:
            ext_by_folder[dirpath].add(ext)

# Guardar resultados en un archivo
output_file = "extensiones_por_directorio.txt"
with open(output_file, "w", encoding="utf-8") as f:
    for folder, extensions in ext_by_folder.items():
        f.write(f"Directorio: {folder}\n")
        for ext in sorted(extensions):
            f.write(f"  - {ext}\n")
        f.write("\n")

print(f"Extensiones guardadas en '{output_file}'")
