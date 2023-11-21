import { createContext, useState, useContext } from "react";
import { createTasksRequest, deleteTaskRequest, getTasksRequest } from '../api/task';

const TaskContext = createContext();

export const UseTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask debe estar dentro del proveedor TaskContext");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async (dataType) => {
        let tableName;

        if (dataType) {
            tableName = dataType;
        } else {
            console.error('No se ha especificado el tipo de datos a obtener en el contexto de tareas');
        }

        try {
            const res = await getTasksRequest(tableName);
            setTasks(res.data);
            return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
        }
    };

    const createTask = async (task) => {
        const res = await createTasksRequest(task);
        console.log(res);
    };

    const deleteTask = async (dataType) => {
        let tableName;

        if (dataType) {
            tableName = dataType;
        } else {
            console.error('No se ha especificado el tipo de datos a eliminar en el contexto de tareas');
        }

        try {
            const res = await deleteTaskRequest(tableName);
            setTasks(res.data);
            return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            setTasks,
            getTasks,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    );
};
