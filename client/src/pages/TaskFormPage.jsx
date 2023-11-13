import { useForm } from "react-hook-form";
import { UseTask } from "../context/TaskContext";
import DatePickerComponent from "../components/DatePickerComp";
import { useEffect } from "react";



function TaskFormPage() {

    const { register, handleSubmit } = useForm();
    const { createTask, getTasks: getLibros, tasks } = UseTask();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    });

    useEffect(() => {
        getLibros('LIBROS');
        console.log(tasks);
    }, []);

    return (
        <div className="container-sm bg-primary-subtle p-5 mx-auto m-5 rounded">
            <form onSubmit={onSubmit}>
                <div className="vstack gap-2 col-md-5 mx-auto border p-2">

                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Vence</span>
                        <DatePickerComponent />
                    </div>
                    <select className="form-select" aria-label="Default select example">
                        {

                            tasks.map((tasks) => (
                                <option key={tasks.ID_LIBROS} value={tasks.ID_LIBROS}>
                                    {tasks.TITULO} - {tasks.ID_AUTOR}
                                </option>
                            ))
                        }
                    </select>
                    <textarea className="form-control" placeholder="Description" rows={3}
                        {...register("description")}>
                    </textarea>
                    <button type="submit" className="btn btn-primary">Create Task</button>
                </div>
            </form>
        </div>
    );
}

export default TaskFormPage;