import os

def read_file_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        return f"Unable to read file: {str(e)}"

def scan_project_structure():
    project_root = os.path.dirname(os.path.abspath(__file__))
    
    # Important files to show
    important_files = ['astro.config.mjs', 'package.json', 'tsconfig.json']
    
    output = "Project Structure Report\n"
    output += "=====================\n\n"
    
    # Show content of specific root files
    output += "Important Configuration Files:\n"
    output += "----------------------------\n"
    for filename in important_files:
        file_path = os.path.join(project_root, filename)
        if os.path.exists(file_path):
            output += f"\n=== {filename} ===\n"
            output += read_file_content(file_path)
            output += "\n\n"
    
    # Project structure (focusing on src directory)
    output += "\nProject Structure:\n"
    output += "----------------\n"
    src_path = os.path.join(project_root, 'src')
    if os.path.exists(src_path):
        output += "\n📁 src\n"
        for root, dirs, files in os.walk(src_path):
            level = root.replace(src_path, '').count(os.sep)
            indent = '  ' * (level + 1)
            if root != src_path:
                folder = os.path.basename(root)
                output += f"{indent}📁 {folder}\n"
            sub_indent = '  ' * (level + 2)
            for file in sorted(files):
                output += f"{sub_indent}📄 {file}\n"
    
    # Save to file
    output_file = "project_structure.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"Project structure has been saved to {output_file}")

if __name__ == "__main__":
    scan_project_structure()