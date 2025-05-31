import React, { useEffect, useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
    // Keep track of theme: "light" or "dark"
    const [theme, setTheme] = useState("light");

    // On mount, read localStorage (optional) to restore last theme
    useEffect(() => {
        const saved = localStorage.getItem("devjira-theme");
        if (saved === "dark") {
            setTheme("dark");
            document.body.classList.add("dark");
        }
    }, []);

    // Toggle function
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.classList.add("dark");
            localStorage.setItem("devjira-theme", "dark");
        } else {
            setTheme("light");
            document.body.classList.remove("dark");
            localStorage.setItem("devjira-theme", "light");
        }
    };

    return (
        <TaskProvider>
            <div className="app">
                {/* Pass toggleTheme down so TaskForm can show the button */}
                <TaskForm onToggleTheme={toggleTheme} currentTheme={theme} />
                <main className="app_main">
                    <TaskBoard />
                </main>
                <Footer />
            </div>
        </TaskProvider>
    );
};

export default App;

