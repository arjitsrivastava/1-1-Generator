import json
import logging

# Constants
FILE_PATH = "raw_questions.txt"
SOURCE_URL = "https://github.com/VGraupera/1on1-questions"
ALTERNATIVE_SOURCE = "https://github.com/arjitsrivastava/1-1-Generator"
OUTPUT_JSON_FILE = "temp_questions.json"

# Logging configuration
logging.basicConfig(level=logging.INFO)


def parse_questions(file_path):
    questions = []
    category = None
    subcategory = None

    try:
        with open(file_path, 'r') as file:
            for line in file:
                line = line.strip()
                if line.startswith('# '):  # Category line
                    category = line[2:]
                    subcategory = None
                elif line.startswith('## '):  # Sub-category line
                    subcategory = line[3:]
                elif line:  # Question line
                    source = ALTERNATIVE_SOURCE if line.startswith("* ") else SOURCE_URL
                    text = line[2:] if line.startswith("* ") else line
                    questions.append({
                        "text": text,
                        "category": category,
                        "subcategory": subcategory,
                        "source": source,
                    })
    except FileNotFoundError:
        logging.error(f"File {file_path} not found.")
        return []

    return questions


def write_questions_to_json(questions, output_file):
    json_data = [{"id": i + 1, **question} for i, question in enumerate(questions)]
    try:
        with open(output_file, 'w') as json_file:
            json.dump(json_data, json_file, indent=2)
    except Exception as e:
        logging.error(f"Failed to write JSON file: {e}")
        return False

    return True


def main():
    questions = parse_questions(FILE_PATH)
    if not questions:
        logging.error("No questions parsed. Exiting.")
        return

    if write_questions_to_json(questions, OUTPUT_JSON_FILE):
        logging.info("JSON file created successfully!")
    else:
        logging.error("Failed to create JSON file.")


if __name__ == "__main__":
    main()
