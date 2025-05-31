// src/components/TaskForm/TaskForm.jsx
import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskForm.css";

const predefinedTags = ["MongoDB", "Express", "React", "Node.js"];
const statuses = [
    { value: "todo", label: "To Do" },
    { value: "next-focus", label: "Next Focus" },
    { value: "current-focus", label: "Current Focus" },
    { value: "testing", label: "Testing" },
    { value: "done", label: "Done" },
];

const TaskForm = ({ onToggleTheme, currentTheme }) => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [status, setStatus] = useState("todo");

    const handleTagToggle = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask(title.trim(), selectedTags, status);
        setTitle("");
        setSelectedTags([]);
        setStatus("todo");
    };

    return (
        <header className="app_header">
            {/* NEW: App title / heading */}
            <h1 className="app_title">DevJira</h1>

            <form className="task_form" onSubmit={handleSubmit}>
                {/* Task Input */}
                <input
                    className="task_input"
                    type="text"
                    placeholder="Enter your task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* Tag Buttons */}
                <div className="tags_container">
                    {predefinedTags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            className={`tag ${selectedTags.includes(tag) ? "selected" : ""}`}
                            onClick={() => handleTagToggle(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Status Dropdown */}
                <select
                    className="task_status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    {statuses.map((s) => (
                        <option key={s.value} value={s.value}>
                            {s.label}
                        </option>
                    ))}
                </select>

                {/* Add Task Button */}
                <button className="task_submit" type="submit">
                    + Add Task
                </button>

                {/* Theme Toggle — a simple Sun/Moon */}
                <button
                    type="button"
                    className="theme_toggle"
                    onClick={onToggleTheme}
                    title="Toggle light/dark"
                >
                    {currentTheme === "light" ? "🌙" : "☀️"}
                </button>
            </form>
        </header>
    );
};

export default TaskForm;
