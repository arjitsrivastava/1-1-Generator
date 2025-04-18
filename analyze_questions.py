import json
import datetime

# Load the questions
with open('public/questions.json', 'r') as f:
    data = json.load(f)

# Count total questions
total_questions = len(data)
print(f'Total questions: {total_questions}')

# Count questions by category
categories = {}
subcategories = {}

for q in data:
    cat = q.get('category', 'None')
    subcat = q.get('subcategory', 'None')
    
    # Count by category
    categories[cat] = categories.get(cat, 0) + 1
    
    # Count by subcategory
    key = f'{cat} - {subcat}'
    subcategories[key] = subcategories.get(key, 0) + 1

# Print category counts
print('\nCategories:')
for cat, count in sorted(categories.items()):
    print(f'{cat}: {count}')

# Print subcategory counts
print('\nSubcategories:')
for subcat, count in sorted(subcategories.items()):
    print(f'{subcat}: {count}')

# Get current date in dd-mm-yyyy format
current_date = datetime.datetime.now().strftime('%d%m%Y')
stats_filename = f'stats_{current_date}.txt'

# Create stats file with date in filename
with open(stats_filename, 'w') as f:
    f.write(f'Total questions: {total_questions}\n\n')
    
    f.write('Categories:\n')
    for cat, count in sorted(categories.items()):
        f.write(f'{cat}: {count}\n')
    
    f.write('\nSubcategories:\n')
    for subcat, count in sorted(subcategories.items()):
        f.write(f'{subcat}: {count}\n')

print(f"Statistics saved to {stats_filename}")
