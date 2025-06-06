# Skip Hire Application

This project is a React application for skip hire services, showcasing a frontend-focused approach to displaying and selecting skip sizes.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly styling components.
*   **Shadcn UI**: A collection of reusable components built with Radix UI and Tailwind CSS.
*   **Vite**: A fast development build tool.

## Project Structure

The project follows a standard React application structure with a focus on component organization:

*   `public/`: Contains static assets.
*   `src/`: Contains the source code.
    *   `api/`: Houses API service functions.
    *   `components/`: Contains reusable UI components, further organized by category (e.g., `skips`, `ui`).
    *   `hooks/`: Custom React hooks.
    *   `lib/`: Utility functions.
    *   `pages/`: Top-level components representing different application pages.
    *   `types/`: TypeScript type definitions.
    *   `App.tsx`: The main application component.
    *   `main.tsx`: Entry point of the application.
*   `package.json`: Project dependencies and scripts.
*   `tailwind.config.js`: Tailwind CSS configuration.
*   `vite.config.ts`: Vite build configuration.

## Setup and Running the Project

1.  **Clone the repository:**
```
bash
    git clone <repository_url>
    
```
2.  **Navigate to the project directory:**
```
bash
    cd skip-hire-app
    
```
3.  **Install dependencies:**
```
bash
    npm install
    
```
4.  **Run the development server:**
```
bash
    npm run dev
    
```
The application will be available at `http://localhost:5173/`.

## Key Features

*   Displays a selection of skip sizes.
*   Allows users to select a skip size.

## Notable Design Decisions

*   **Component-Based Architecture:** The application is built using reusable React components for maintainability and scalability.
*   **Utility-First Styling with Tailwind CSS:** Styling is primarily handled using Tailwind CSS classes, promoting rapid development and consistency.
*   **Shadcn UI for Components:** Leverages Shadcn UI for pre-built, accessible, and customizable UI components.
*   **TypeScript for Type Safety:** Utilizes TypeScript to enhance code quality and catch errors early in the development process.
*   **Mock API Service:** For demonstration purposes, a mock API service (`skipService.ts`) is used to simulate fetching skip data. In a real-world scenario, this would be replaced with actual API calls.
