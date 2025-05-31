# DevJira

DevJira is a modern, customizable Kanban-style task management web application built with React. It allows developers and teams to create, categorize, and track tasks through different stages in a visually appealing board. Features include:

-   Create tasks with titles, tags (MongoDB, Express, React, Node.js by default), and status (To Do, Next Focus, Current Focus, Testing, Done).
-   Drag & drop tasks between columns to update their status.
-   Delete tasks when they are no longer needed.
-   Toggle between Light and Dark themes for better usability.
-   Responsive design that works across desktop and mobile devices.
-   Uses React Context for state management.
-   Fully customizable styling via CSS variables.

## Table of Contents

1. [Demo Screenshot](#demo-screenshot)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Available Scripts](#available-scripts)
6. [Features](#features)
7. [Customization](#customization)
8. [Contributing](#contributing)
9. [License](#license)

## Demo Screenshot

![DevJira Screenshot](./screenshot.png)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/devjira.git
    cd devjira
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

    Your browser should automatically open `http://localhost:3000`, where you can see DevJira in action.

## Usage

-   **Add a Task:** Use the input field at the top to enter a task title, select desired tags, choose a status, and click “+ Add Task”.
-   **Move a Task:** Drag and drop a task card between columns to change its status.
-   **Delete a Task:** Click the “×” (delete) button on a task card to remove it.
-   **Toggle Theme:** Click the Sun/Moon icon in the header to switch between Light and Dark modes.
-   **Responsive Behavior:** On narrow screens, the board scrolls horizontally and form fields stack vertically.

## Project Structure

```
devjira/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskForm/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskForm.css
│   │   ├── TaskBoard/
│   │   │   ├── TaskBoard.jsx
│   │   │   └── TaskBoard.css
│   │   ├── TaskColumn/
│   │   │   ├── TaskColumn.jsx
│   │   │   └── TaskColumn.css
│   │   ├── TaskCard/
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskCard.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   └── App.css
├── README.md
└── package.json
```

-   **components/**: Contains all React component code and related CSS.
-   **context/**: React Context for task state management.
-   **App.jsx**: Main application component wrapping everything in `TaskProvider`.
-   **index.js**: Entry point for React application.
-   **index.css** & **App.css**: Global and app-level styles.

## Available Scripts

In the project directory, you can run:

-   `npm start` or `yarn start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
-   `npm run build` or `yarn build`: Builds the app for production to the `build` folder.
-   `npm test` or `yarn test`: Launches the test runner in interactive watch mode.
-   `npm run eject` or `yarn eject`: Ejects the project from Create React App configuration.

## Features

-   **Task Management**: Create, move, and delete tasks with ease.
-   **Drag & Drop**: Intuitive drag-and-drop interface powered by HTML5 APIs.
-   **Tags**: Predefined tags (MongoDB, Express, React, Node.js) to categorize tasks.
-   **Status Columns**: To Do, Next Focus, Current Focus, Testing, Done.
-   **Theming**: Light and Dark themes with CSS variable-driven colors.
-   **Responsive Design**: Adapts to smaller screens with horizontal scrolling and stacked forms.
-   **Context API**: Centralized state management via React’s Context.

## Customization

-   **Tags**: Modify `predefinedTags` array in `TaskForm.jsx` to use your own tags.
-   **Statuses**: Adjust `statuses` in `TaskForm.jsx` and `columns` array in `TaskBoard.jsx` to change workflow stages.
-   **Colors**: Edit CSS variables in `index.css` to change the color palette, including primary, accent, background, text, and error colors.
-   **Fonts**: Update the `@import` in `index.css` to use a different Google Font or local font.
-   **Animations**: Enhance transitions and add your own CSS animations in component CSS files.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a Pull Request describing your changes.

Please ensure code quality, adhere to the existing style, and add relevant tests if needed.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Developed by Aman Dubey.

