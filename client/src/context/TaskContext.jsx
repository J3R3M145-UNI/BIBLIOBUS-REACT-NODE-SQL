import { createContext, useState, useContext } from "react";
import { createTasksRequest, getTasksRequest } from '../api/task';

const TaskContext = createContext(); // This is the context that will be used in the components that need the context

export const UseTask = () => {
    const context = useContext(TaskContext) // This is the hook that will be used in the components that need the context
    if (!context) {
        throw new Error("useTask debe estar dentro del proveedor TaskContext");
    }
    return context;
}


// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const getTasks = async (tableName) => {
        try {
            const res = await getTasksRequest(tableName);
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const createTask = async (task) => {
        const res = await createTasksRequest(task);
        console.log(res);
    }

    return (
        <TaskContext.Provider value={{ // This is the component that will wrap the components that need the context
            tasks,
            createTask,
            setTasks,
            getTasks,
        }}>
            {children}
        </TaskContext.Provider>
    )
}