import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskColumn from "../TaskColumn/TaskColumn";
import "./TaskBoard.css";

const columns = [
    { id: "todo", title: "To Do" },
    { id: "next-focus", title: "Next Focus" },
    { id: "current-focus", title: "Current Focus" },
    { id: "testing", title: "Testing" },
    { id: "done", title: "Done" },
];

const TaskBoard = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task_board">
            {columns.map((col) => (
                <TaskColumn
                    key={col.id}
                    columnId={col.id}
                    title={col.title}
                    tasks={tasks.filter((task) => task.status === col.id)}
                />
            ))}
        </div>
    );
};

export default TaskBoard;
