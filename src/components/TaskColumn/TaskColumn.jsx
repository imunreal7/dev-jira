// src/components/TaskColumn/TaskColumn.jsx
import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ columnId, title, tasks }) => {
    const { moveTask } = useContext(TaskContext);

    const allowDrop = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add("drag-over");
    };

    const onDrop = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove("drag-over");
        const taskId = e.dataTransfer.getData("text/plain");
        moveTask(taskId, columnId);
    };

    return (
        <div
            className="task_column"
            data-column={columnId}
            onDragOver={allowDrop}
            onDragLeave={(e) => e.currentTarget.classList.remove("drag-over")}
            onDrop={onDrop}
        >
            <h3 className="column_title">{title}</h3>
            <div className="task_list">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
