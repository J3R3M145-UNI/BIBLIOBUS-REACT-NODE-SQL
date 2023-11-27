import { useForm } from "react-hook-form";
import DatePickerComponent from "../components/DatePickerComponent";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { createTasksRequest, getPrestamoRequest, getTasksRequest } from "../api/task";
import SelectComponent from "../components/SelectComponent";
import { addDays, format } from "date-fns";

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
        const res = await getTasksRequest('LECTOR');
        return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
    }

}

const LibrosData = async () => {
    try {
        const res = await getTasksRequest('LIBRO');
        return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
    }

}

function TaskFormPage() {
    const { register, handleSubmit, control } = useForm();

    const [libros, setLibros] = useState([]);

    const [lectores, setLectores] = useState([]);

    const [prestamos, setPrestamos] = useState([]);

    // Obtener la fecha actual
    const currentDate = new Date();

    // Obtener la fecha 30 días después y formatearla
    const defaultDate = addDays(currentDate, 30);
    const formattedDefaultDate = format(defaultDate, 'yyyy-MM-dd');

    const onSubmit = handleSubmit((data) => {
        const transformedData = {
            ...data,
            DEVOLUCION: data.DEVOLUCION ? 1 : 0, // Convertir a 1 o 0
            VENCE: `'${data.VENCE}'`, // Agregar comillas simples alrededor del valor
            ID_LIBRO: `'${data.ID_LIBRO}'`,
            ID_LECTOR: `'${data.ID_LECTOR}'`,
        };
        //createTasksRequest('PRESTAMO', transformedData);
        console.log('transData: ', transformedData);
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await LectoresData();
                setLectores(data);
            } catch (error) {
                console.error('Error en la obtención de datos de lectores:', error);
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
                console.error('Error en la obtención de datos de préstamos:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await LibrosData();
                setLibros(data);
            } catch (error) {
                console.error('Error en la obtención de datos de libros:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="container-sm bg-primary-subtle p-5 mx-auto m-5 rounded">
            <h1 className="text-center">Prestamo</h1>
            <form onSubmit={onSubmit}>
                <div className="vstack gap-2 col-md-5 mx-auto border p-2">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Vence</span>
                        <DatePickerComponent control={control} defaultValue={formattedDefaultDate} />
                    </div>
                    <SelectComponent
                        label="Libro"
                        defValue={libros.length > 0 ? libros[0].ID_LIBRO : ''}
                        options={libros.map((libro) => ({
                            value: libro.ID_LIBRO,
                            label: `${libro.ID_LIBRO} - ${libro.TITULO}`,
                        }))}
                        name="ID_LIBRO"
                        control={control}
                    />


                    <SelectComponent
                        label="Lector"
                        defValue={lectores[0]?.ID_LECTOR} // Valor predeterminado para el primer elemento de la lista
                        options={lectores.map((lector) => ({
                            value: lector.ID_LECTOR,
                            label: `${lector.ID_LECTOR} - ${lector.NOMBRE} ${lector.APELLIDO}`,
                        }))
                        }
                        name="ID_LECTOR" // Asegúrate de que coincida con el nombre del campo en el objeto de datos del formulario
                        control={control} // Control de react-hook-form
                        />

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                            {...register("DEVOLUCION")} />
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