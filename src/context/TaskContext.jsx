import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    // Sync to localStorage on change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title, tags, status) => {
        const newTask = {
            id: uuidv4(),
            title,
            tags,
            status,
            createdAt: new Date().toISOString(),
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const moveTask = (taskId, newStatus) => {
        setTasks((prev) =>
            prev.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)),
        );
    };

    const deleteTask = (taskId) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, moveTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
