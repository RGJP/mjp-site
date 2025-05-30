import xml.etree.ElementTree as ET
from datetime import date

# Read the sitemap.xml file
try:
    tree = ET.parse('sitemap.xml')
    root = tree.getroot()
except ET.ParseError as e:
    print(f"Error parsing XML: {e}")
    exit(1)
except FileNotFoundError:
    print("Error: sitemap.xml not found.")
    exit(1)


today_str = date.today().isoformat()

# Namespace is important for sitemaps
ns = {'sitemap': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
ET.register_namespace('', ns['sitemap'])

for url_element in root.findall('sitemap:url', ns):
    lastmod_element = url_element.find('sitemap:lastmod', ns)
    if lastmod_element is not None:
        lastmod_element.text = today_str

    changefreq_element = url_element.find('sitemap:changefreq', ns)
    if changefreq_element is not None:
        changefreq_element.text = 'monthly'

# Serialize the modified XML structure back to a string
updated_xml_content = ET.tostring(root, encoding='unicode')

# Prepend the XML declaration
updated_xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n' + updated_xml_content

# Write the updated content back to sitemap.xml
with open('sitemap.xml', 'w') as f:
    f.write(updated_xml_content)

print("sitemap.xml updated successfully.")
