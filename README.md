# Text Translator

## Overview

Text Translator is a modern, single-page web application built with React that provides instant translation services. Leveraging the power of a third-party translation API, it allows users to input text and translate it into a variety of South African languages and other global languages with a simple, clean interface. The project is an excellent example of a responsive front-end application with a focus on a great user experience.

## Features

- **Instant Translation:** Translate text quickly between English and a wide selection of languages.
- **Dynamic Language Selection:** A dropdown menu populated with a curated list of languages (including South African languages like Zulu, Xhosa, and Afrikaans).
- **Responsive Design:** A sleek and modern user interface that works seamlessly on both desktop and mobile devices, built with **Tailwind CSS**.
- **Secure API Integration:** Handles API credentials securely using environment variables to prevent exposing sensitive information.
- **Robust Error Handling:** Provides clear feedback to the user for translation errors or empty input.
- **Loading State:** An intuitive loading indicator to let users know when a translation is in progress.

## Technology Stack

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid and custom UI development.
- **Vite:** A fast build tool that provides an excellent developer experience.
- **Axios:** A promise-based HTTP client for making API requests.
- **RapidAPI:** Used to access the Google Translator API endpoint.

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd text-translator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env` in the root of your project.
    Add your API key and host from RapidAPI. Make sure the variable names are prefixed with `VITE_`.
    
    ```env
    VITE_RAPIDAPI_KEY=your_rapidapi_key_here
    VITE_RAPIDAPI_HOST=google-translator9.p.rapidapi.com
    ```
    
    **Note:** It's a best practice to add `.env` to your `.gitignore` file to prevent it from being committed to version control.

4.  **Run the application:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    
    The application will now be running on `http://localhost:5173`.

## File Structure
Of course! Here is a professional and comprehensive README file for your text translator project. It's designed to be clear, engaging, and easy for other developers to understand and get started with.

Markdown

# Text Translator

## Overview

Text Translator is a modern, single-page web application built with React that provides instant translation services. Leveraging the power of a third-party translation API, it allows users to input text and translate it into a variety of South African languages and other global languages with a simple, clean interface. The project is an excellent example of a responsive front-end application with a focus on a great user experience.

## Features

- **Instant Translation:** Translate text quickly between English and a wide selection of languages.
- **Dynamic Language Selection:** A dropdown menu populated with a curated list of languages (including South African languages like Zulu, Xhosa, and Afrikaans).
- **Responsive Design:** A sleek and modern user interface that works seamlessly on both desktop and mobile devices, built with **Tailwind CSS**.
- **Secure API Integration:** Handles API credentials securely using environment variables to prevent exposing sensitive information.
- **Robust Error Handling:** Provides clear feedback to the user for translation errors or empty input.
- **Loading State:** An intuitive loading indicator to let users know when a translation is in progress.

## Technology Stack

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid and custom UI development.
- **Vite:** A fast build tool that provides an excellent developer experience.
- **Axios:** A promise-based HTTP client for making API requests.
- **RapidAPI:** Used to access the Google Translator API endpoint.

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd text-translator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a new file named `.env` in the root of your project.
    Add your API key and host from RapidAPI. Make sure the variable names are prefixed with `VITE_`.
    
    ```env
    VITE_RAPIDAPI_KEY=your_rapidapi_key_here
    VITE_RAPIDAPI_HOST=google-translator9.p.rapidapi.com
    ```
    
    **Note:** It's a best practice to add `.env` to your `.gitignore` file to prevent it from being committed to version control.

4.  **Run the application:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    
    The application will now be running on `http://localhost:5173`.

## File Structure

text-translator/
├── public/                 # Public assets (e.g., index.html)
├── src/
│   ├── assets/             # Image or other assets
│   ├── components/
│   │   ├── Display.jsx     # Component for displaying the translated text
│   │   └── Hero.jsx        # Main component containing the translation logic and UI
│   │   └── Footer.jsx      # Footer component 
│   │   └── Navbar.jsx      # Navbar component 
│   ├── languages.js        # Data file with the list of languages
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .env                    # Environment variables (private)
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md