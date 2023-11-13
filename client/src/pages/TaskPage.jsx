import { UseTask } from "../context/TaskContext";
import { useEffect } from "react";

function TaskPage() {
    const { getTasks } = UseTask();

    useEffect(() => {
        getTasks('PRESTAMO');
    }, []);

    return (
        <div>
            <h1>task Page</h1>
        </div>
    );
}

export default TaskPage;