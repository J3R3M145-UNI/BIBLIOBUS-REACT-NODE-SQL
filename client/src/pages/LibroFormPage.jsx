import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { createTasksRequest, getTasksRequest, updateTaskRequest } from "../api/task";
import SelectComponent from "../components/SelectComponent";

const LibrosData = async () => {
    try {
        const res = await getTasksRequest('LIBRO');
        return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
    }

}

const GenerosData = async () => {
    try {
        const res = await getTasksRequest('GENERO');
        return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
    }

}

const AutoresData = async () => {
    try {
        const res = await getTasksRequest('AUTOR');
        return res.data;  // Devuelve los datos para que puedan ser utilizados fuera de la función si es necesario
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // Lanza el error para que pueda ser manejado por el componente que llama a getTasks
    }

}

function TaskFormPage() {
    const { register, handleSubmit, control, getValues, setValue, reset } = useForm();
    const [selectedItem, setSelectedItem] = useState(null);
    const [autores, setAutores] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [libros, setLibros] = useState([]);

    const transformData = (data) => ({
        ...data,
        ESTADO: `'${data.ESTADO}'`, // Agregar comillas simples alrededor del valor	
        ID_AUTOR: `'${data.ID_AUTOR}'`,
        ID_GENERO: `'${data.ID_GENERO}'`,
        ID_LIBRO: `'${data.ID_LIBRO}'`,
        TITULO: `'${data.TITULO}'`,
    });

    const onSubmit = handleSubmit((data) => {
        //createTasksRequest('PRESTAMO', transformedData);
        console.log('transData: ', transformData(data));
    });

    const handleEdit = (item) => {
        setSelectedItem(item);

        // Setear los valores del formulario con los datos del ítem seleccionado
        setValue('ID_LIBRO', item.ID_LIBRO);
        setValue('TITULO', item.TITULO);
        setValue('ID_AUTOR', item.ID_AUTOR);
        setValue('GENERO', item.ID_GENERO);
        setValue('ESTADO', item.ESTADO);

        // Puedes agregar lógica adicional según tus campos
    };

    const handleUpdate = async () => {
        const formData = getValues();
        transformData(formData);

        // Puedes realizar la lógica de actualización aquí, por ejemplo:
        try {
            await updateTaskRequest('LIBRO', selectedItem.ID_LIBRO, transformData);

            // Actualizar la lista de prestamos después de la actualización
            const updatedLibros = await LibrosData();
            setLibros(updatedLibros);

            // Limpiar el formulario después de la actualización
            reset();



        } catch (error) {
            console.error('Error al actualizar el préstamo:', error);
        }

    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GenerosData();
                setGeneros(data);
                const data2 = await LibrosData();
                setLibros(data2);
                const data3 = await AutoresData();
                setAutores(data3);
            } catch (error) {
                console.error('Error en la obtención de datos de lectores:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="container-sm bg-primary-subtle p-5 mx-auto m-5 rounded">
            <h1 className="text-center">Libros</h1>
            <form onSubmit={onSubmit}>
                <div className="vstack gap-2 col-md-5 mx-auto border p-2">

                    <label htmlFor="ID_LIBRO" className="form-label">ISBN</label>
                    <input type="text" className="form-control" id="ID_LIBRO" {...register("ID_LIBRO")} />

                    <label htmlFor="TITULO" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="TITULO" {...register("TITULO")} />

                    <SelectComponent
                        label="Autor"
                        defValue={autores.length > 0 ? autores[0].ID_LIBRO : ''}
                        options={autores.map((autor) => ({
                            value: autor.ID_AUTOR,
                            label: `${autor.ID_AUTOR} - ${autor.NOMBRE}`,
                        }))}
                        name="ID_AUTOR"
                        control={control}
                    />

                    <SelectComponent
                        label="Genero"
                        defValue={generos[0]?.ID_GENERO} // Valor predeterminado para el primer elemento de la lista
                        options={generos.map((genero) => ({
                            value: genero.ID_GENERO,
                            label: `${genero.ID_GENERO} - ${genero.NOMBRE_GENERO}`,
                        }))
                        }
                        name="ID_GENERO" // Asegúrate de que coincida con el nombre del campo en el objeto de datos del formulario
                        control={control} // Control de react-hook-form
                    />

                    <label htmlFor="ESTADO" className="form-label">Estado</label>
                    <select className="form-select" aria-label="Default select example" {...register("ESTADO")}>
                        <option value="Disponible">Disponible</option>
                        <option value="En Prestamo">En Prestamo</option>
                        <option value="En Biblioteca">En Biblioteca</option>
                    </select>

                    <label htmlFor="EDICION" className="form-label">Edicion</label>
                    <input type="text" className="form-control" id="EDICION" {...register("EDICION")} />

                    <button type="submit" className="btn btn-primary">Registrar Libro</button>

                    <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                        Actualizar Libro
                    </button>
                </div>
            </form>
            <DataTable tableName="LIBRO" data={libros} onEdit={handleEdit} />
        </div>
    );
}

export default TaskFormPage;