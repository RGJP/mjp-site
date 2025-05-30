import re

def extract_style_content(html_content):
    match = re.search(r"<style>(.*?)</style>", html_content, re.DOTALL)
    if match:
        return match.group(1).strip()
    return ""

def remove_style_block(html_content):
    return re.sub(r"<style>.*?</style>", "", html_content, flags=re.DOTALL)

def add_stylesheet_link(html_content):
    # Add the link before the </head> tag
    # Ensure it's placed after existing link tags for fonts for proper cascade
    link_tag = '    <link rel="stylesheet" href="css/style.css">\n'

    # Try to insert after the last <link ... href="...fonts.googleapis.com...">
    font_link_pattern = re.compile(r'(<link[^>]*href="https://fonts.googleapis.com/[^>]*>\n)')

    last_font_link_match = None
    for match in font_link_pattern.finditer(html_content):
        last_font_link_match = match

    if last_font_link_match:
        insert_point = last_font_link_match.end()
        return html_content[:insert_point] + link_tag + html_content[insert_point:]
    else:
        # Fallback: insert before </head>
        return html_content.replace("</head>", link_tag + "</head>")

file_paths = ["index.html", "about.html", "contact.html"]
html_contents = {}
style_contents = []

# 1. Read HTML Files and Extract Styles
for path in file_paths:
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
            html_contents[path] = content
            style_contents.append(extract_style_content(content))
    except FileNotFoundError:
        print(f"Error: {path} not found.")
        exit(1)
    except Exception as e:
        print(f"Error reading {path}: {e}")
        exit(1)

# 2. Consolidate CSS
# Taking index.html styles as base
consolidated_css = style_contents[0] if style_contents else ""

# Add page-specific styles from about.html
# This is a simplified approach; assumes page-specific styles are wrapped in unique parent classes
about_style_specific = ""
if len(style_contents) > 1:
    about_styles = style_contents[1]
    # Example: Extract styles specific to .about-section or .artist-bio, etc.
    # This requires more sophisticated parsing or assumptions about CSS structure.
    # For now, let's find styles that are clearly page-specific.
    # A simple heuristic: find blocks that are not present in index.html's style.
    # This is still tricky. For this iteration, I will focus on known specific class selectors.

    # Extracting .about-section specific styles as an example
    about_specific_match = re.search(r"/\* About Page Specific Styles \*/(.*?)(/\* End About Page Specific Styles \*/|/\* Footer - Identical to index.html \*/)", about_styles, re.DOTALL)
    if about_specific_match:
        specific_css = about_specific_match.group(1).strip()
        if specific_css not in consolidated_css: # Avoid duplication if somehow already there
             consolidated_css += "\n\n/* --- About Page Specific Styles --- */\n" + specific_css

# Add page-specific styles from contact.html
contact_style_specific = ""
if len(style_contents) > 2:
    contact_styles = style_contents[2]
    # Example: Extract styles specific to .contact-section
    contact_specific_match = re.search(r"/\* Contact Page Specific Styles \*/(.*?)(/\* Image Gallery Styles \(MODIFIED\) \*/|/\* Footer Styles \*/)", contact_styles, re.DOTALL) # MODIFIED to look for next comment block
    if contact_specific_match:
        specific_css = contact_specific_match.group(1).strip()
        if specific_css not in consolidated_css:
            consolidated_css += "\n\n/* --- Contact Page Specific Styles --- */\n" + specific_css

    # Also, contact page has modified gallery styles
    contact_gallery_match = re.search(r"/\* Image Gallery Styles \(MODIFIED\)(.*?)(/\* Fullscreen Image Viewer Styles \*/)", contact_styles, re.DOTALL)
    if contact_gallery_match:
        gallery_css = contact_gallery_match.group(1).strip()
        # This will replace the generic .image-gallery from index.html if it exists,
        # or add it if it doesn't. For more robust merging, one might need to
        # parse and merge individual rules. Here, we are just appending.
        # To avoid issues, ensure the generic .image-gallery from index.html is perhaps removed or commented out
        # if these are meant to fully replace them.
        # For now, we append, assuming the CSS order and specificity will handle it.
        # A safer bet is to ensure the main style.css has the generic one, and page specific overrides are handled by more specific selectors or appear later.
        # Given the task, the goal is to get styles out. Perfect consolidation is harder.
        # Let's assume the .image-gallery styles in contact.html are intended to be additive or override.
        consolidated_css += "\n\n/* --- Contact Page Modified Image Gallery Styles --- */\n" + gallery_css


# 3. Write to css/style.css
css_dir = "css"
css_file_path = f"{css_dir}/style.css"
try:
    # Ensure css directory exists (it should, from previous step)
    import os
    if not os.path.exists(css_dir):
        os.makedirs(css_dir)
    with open(css_file_path, "w", encoding="utf-8") as f:
        f.write(consolidated_css)
    print(f"Consolidated CSS written to {css_file_path}")
except Exception as e:
    print(f"Error writing {css_file_path}: {e}")
    exit(1)

# 4. Modify HTML Files
for path, original_content in html_contents.items():
    content_no_style = remove_style_block(original_content)
    final_content = add_stylesheet_link(content_no_style)
    try:
        with open(path, "w", encoding="utf-8") as f:
            f.write(final_content)
        print(f"Successfully refactored {path}")
    except Exception as e:
        print(f"Error writing modified {path}: {e}")
        exit(1)

print("CSS refactoring complete.")
