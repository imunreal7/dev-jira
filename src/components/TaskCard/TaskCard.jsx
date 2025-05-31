import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
    const { deleteTask } = useContext(TaskContext);

    const onDragStart = (e) => {
        e.dataTransfer.setData("text/plain", task.id);
    };

    return (
        <div className="task_card" draggable onDragStart={onDragStart}>
            <div className="task_header">
                <span className="task_title">{task.title}</span>
                <button className="task_delete" onClick={() => deleteTask(task.id)}>
                    ×
                </button>
            </div>
            <div className="task_tags">
                {task.tags.map((tag) => (
                    <span key={tag} className="task_tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="task_meta">
                <small>Created: {new Date(task.createdAt).toLocaleString()}</small>
            </div>
        </div>
    );
};

export default TaskCard;
