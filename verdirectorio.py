import os

def read_file_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        return f"Unable to read file: {str(e)}"

def scan_project_directories():
    project_root = os.path.dirname(os.path.abspath(__file__))
    
    # Important configuration files to look for (excluding .py files)
    important_files = [
        'requirements.txt',
        'setup.py',
        'config.json',
        'package.json',
        '.env',
        '.gitignore',
        'README.md',
        'docker-compose.yml',
        'Dockerfile',
        'astro.config.mjs'
    ]
    
    result = {
        'directories': [],
        'config_files': []
    }
    
    # Scan directories and files
    for item in os.listdir(project_root):
        full_path = os.path.join(project_root, item)
        if os.path.isdir(full_path):
            result['directories'].append(item)
        elif os.path.isfile(full_path):
            # Only add non-py files that are in the important_files list
            if item in important_files and not item.endswith('.py'):
                result['config_files'].append(item)
    
    return result

def save_to_txt():
    scan_result = scan_project_directories()
    
    output = "Project Structure Report\n"
    output += "=====================\n\n"
    
    output += "Directories:\n"
    output += "------------\n"
    for directory in sorted(scan_result['directories']):
        output += f"- {directory}\n"
    
    output += "\nImportant Configuration Files:\n"
    output += "----------------------------\n"
    for config_file in sorted(scan_result['config_files']):
        output += f"- {config_file}\n"
    
    # Save to file
    output_file = "project_structure.txt"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"Project structure has been saved to {output_file}")

if __name__ == "__main__":
    save_to_txt()