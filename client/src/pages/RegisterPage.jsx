import { useForm } from 'react-hook-form';
import { registerRequest } from '../../api/auth';

function RegisterPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res)
    })

    return (
        <div className="container-sm bg-primary-subtle p-5 mx-auto m-5 rounded">
            <form
                onSubmit={onSubmit}
            >
                <div className="col-md-5 mx-auto">
                    <h1>Register</h1>
                </div>
                <div className="vstack gap-2 col-md-5 mx-auto border p-2">
                    <input type="text" {...register("username", { required: true })}
                        className="form-control" placeholder='Username' />

                    <input type="email" {...register("email", { required: true })}
                        className="form-control" placeholder="name@example.com" />

                    <input type="password" {...register("password", { required: true })}
                        className="form-control" placeholder='Password' />

                    <input type="text" {...register("nombre", { required: true })}
                        className="form-control" placeholder='Nombre' />

                    <input type="text" {...register("apellido", { required: true })}
                        className="form-control" placeholder='Apellido' />

                    <input type="" {...register("tipo_usuario", { required: true })}
                        className="form-control" />

                    <button type='submit'
                        className='btn btn-primary'>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
export default RegisterPage;