import { useForm } from "react-hook-form";
import { UseTask } from "../context/TaskContext";
import DatePickerComponent from "../components/DatePickerComp";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getPrestamoRequest, getTasksRequest } from "../api/task";
import SelectComponent from "../components/SelectComponent";

const PrestamoData = async () => {
    try {
        const res = await getPrestamoRequest();
        return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
    }

}

const LectoresData = async () => {
    try {
        const res = await getTasksRequest('LECTORES');
        return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
    }

}

function TaskFormPage() {
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit } = useForm();
    const { createTask, getTasks, tasks } = UseTask();

    const [libros, setLibros] = useState([]);
    const [selectedLibro, setSelectedLibro] = useState('');

    const [lectores, setLectores] = useState([]);
    const [selectedLector, setSelectedLector] = useState('');

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    });

    const [prestamos, setPrestamos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await LectoresData();
                setLectores(data);
            } catch (error) {
                console.error('Error en la obtención de datos:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await PrestamoData();
                setPrestamos(data);
            } catch (error) {
                console.error('Error en la obtención de datos:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getTasks('LIBROS');
                setLibros(tasks);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }), ([getTasks, tasks]);

    const handleLibroChange = (event) => {
        setSelectedLibro(event.target.value);
    };

    const handleLectorChange = (event) => {
        setSelectedLector(event.target.value);
    };


    return (
        <div className="container-sm bg-primary-subtle p-5 mx-auto m-5 rounded">
            <h1 className="text-center">Prestamo</h1>
            <form onSubmit={onSubmit}>
                <div className="vstack gap-2 col-md-5 mx-auto border p-2">

                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Vence</span>
                        <DatePickerComponent />
                    </div>

                    <SelectComponent
                        label="Libro"
                        options={libros.map((libro) => ({
                            value: libro.ID_LIBROS,
                            label: libro.TITULO,
                        }))}
                        onSelectChange={handleLibroChange}
                        selectedValue={selectedLibro}
                    />

                    <SelectComponent
                        label="Lector"
                        options={lectores.map((lector) => ({
                            value: lector.ID_LECTORES,
                            label: `${lector.ID_LECTORES} - ${lector.NOMBRE} ${lector.APELLIDO}`,
                        }))}
                        onSelectChange={handleLectorChange}
                        selectedValue={selectedLector}
                    />

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Devuelto</label>
                    </div>

                    <button type="submit" className="btn btn-primary">Create Task</button>
                </div>
            </form>
            <DataTable tableName="PRESTAMO" data={prestamos} />
        </div>
    );
}


export default TaskFormPage;