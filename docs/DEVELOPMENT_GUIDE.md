# Development Guide

This guide provides detailed information for developers who want to contribute to the 1-1 Generator project.

## Development Environment Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arjitsrivastava/1-1-Generator.git
   cd 1-1-Generator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
1-1-Generator/
├── components/       # Reusable React components
│   ├── DesktopDivider.js
│   ├── DiceIcon.js
│   ├── MobileDivider.js
│   └── ResourceCard.js
├── docs/             # Documentation files
├── pages/            # Next.js pages
│   ├── _app.js       # Custom App component
│   ├── _document.js  # Custom Document component
│   ├── about.js      # About page
│   ├── index.js      # Home page
│   ├── resources.js  # Resources page
│   └── api/          # API routes
├── public/           # Static assets
│   ├── favicon.ico
│   ├── questions.json # Question data
│   └── *.svg         # SVG icons
├── styles/           # Global styles
│   └── globals.css   # Global CSS
└── util/             # Utility functions
    ├── parse_raw_questions.py # Script to parse raw questions
    └── raw_questions.txt      # Raw question data
```

## Key Components

### Question Generator (index.js)

The main component that:
- Filters questions based on selected category/subcategory
- Randomly selects a question to display
- Provides UI for selecting categories and generating new questions

### Resource Cards (components/ResourceCard.js)

Displays information about external resources in a card format.

### Dividers (components/DesktopDivider.js, components/MobileDivider.js)

Responsive dividers that display differently based on screen size.

## Working with Data

### Question Data Structure

Questions are stored in `public/questions.json` with the following structure:

```json
[
  {
    "id": 1,
    "category": "Career Development",
    "subcategory": "Goals",
    "text": "What skills would you like to develop?",
    "source": "https://example.com/source"
  },
  ...
]
```

### Adding New Questions

To add new questions:

1. Add your questions to `util/raw_questions.txt` following the existing format
2. Run the parsing script:
   ```bash
   python util/parse_raw_questions.py
   ```
3. The script will update `public/questions.json`

## Styling Guidelines

The project uses Tailwind CSS for styling. Key principles:

- Use Tailwind utility classes instead of custom CSS when possible
- Follow mobile-first responsive design
- Use the color variables defined in `tailwind.config.js`
- Maintain consistent spacing and typography

### Color Palette

- `darkBlue`: Primary background color
- `darkGrayishBlue`: Secondary background color
- `neonGreen`: Primary accent color
- `lightCyan`: Secondary accent color

## Testing

Currently, the project doesn't have automated tests. When contributing, please manually test your changes across different browsers and screen sizes.

## Build and Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Production Build Locally

```bash
npm run start
# or
yarn start
```

### Deployment

The project is deployed on Vercel. Pushing to the main branch will trigger an automatic deployment.

## Common Tasks

### Adding a New Page

1. Create a new file in the `pages` directory
2. Export a React component as the default export
3. The file name will determine the route (e.g., `about.js` becomes `/about`)

### Adding a New Component

1. Create a new file in the `components` directory
2. Export your component as the default export
3. Import and use the component in your pages

### Modifying Styles

1. For global styles, edit `styles/globals.css`
2. For component-specific styles, use Tailwind classes directly in the component
3. For custom Tailwind configuration, edit `tailwind.config.js`

## Troubleshooting

### Common Issues

- **"Module not found" errors**: Ensure all imports use the correct path
- **Styling issues**: Check for conflicting Tailwind classes
- **Hydration errors**: Ensure server and client rendering match (avoid using `Math.random()` directly during rendering)

### Getting Help

If you encounter issues not covered here, please:
1. Check existing GitHub issues
2. Create a new issue with detailed information about the problem
3. Reach out to the maintainers

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)
