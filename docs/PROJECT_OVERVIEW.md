# 1-1 Generator Project Overview

This document provides an overview of the 1-1 Generator project, including its architecture, key components, and design decisions.

## Project Purpose

The 1-1 Generator is a tool designed for Engineering Leaders to improve the effectiveness of their 1:1 meetings. It provides a selection of questions that can be used to guide conversations, with the goal of facilitating more meaningful and productive discussions.

## Technology Stack

- **Frontend Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **State Management**: React Hooks
- **Data Storage**: JSON files

## Architecture

The 1-1 Generator follows a simple, component-based architecture typical of Next.js applications:

1. **Pages**: The application's routes and views
2. **Components**: Reusable UI elements
3. **Public**: Static assets like images and data files
4. **Styles**: Global CSS and Tailwind configuration
5. **Utils**: Helper functions and data processing scripts

### Key Components

- **Question Generator**: Core functionality that randomly selects questions based on category and subcategory filters
- **Resource Library**: Curated collection of external resources for 1:1 meetings
- **Navigation**: Simple navigation between the main pages

## Data Flow

1. Questions are stored in a JSON file (`public/questions.json`)
2. When a user selects a category/subcategory or clicks the dice button:
   - The application filters questions based on the selected criteria
   - A random question is selected from the filtered list
   - The UI updates to display the new question

## Design Decisions

### Why Next.js?

Next.js was chosen for its:
- Server-side rendering capabilities
- Built-in routing
- Easy deployment options
- React-based component model

### Why Tailwind CSS?

Tailwind CSS provides:
- Rapid UI development
- Consistent styling
- Responsive design utilities
- Small bundle size when properly configured

### Client-Side Rendering Approach

The application uses client-side rendering for dynamic content (like random questions) to ensure:
- Smooth transitions between questions
- Consistent user experience
- Proper hydration between server and client

## Performance Considerations

- Images are optimized using Next.js Image component
- CSS is minimized in production builds
- Component splitting for better code organization
- Client-side state management for responsive UI updates

## Accessibility

The application aims to be accessible by:
- Using semantic HTML elements
- Providing proper ARIA labels
- Ensuring sufficient color contrast
- Supporting keyboard navigation

## Future Enhancements

Potential areas for future development include:
- User accounts for saving favorite questions
- Custom question creation
- Integration with calendar tools
- Expanded categories and question sets
- Mobile app version

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for information on how to contribute to the project.
