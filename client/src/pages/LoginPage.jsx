import { useForm } from 'react-hook-form';

function LoginPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="container-sm bg-primary-subtle p-5 mx-auto m-5 rounded">
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values)
        })
        }
      >
        <div className="col-md-5 mx-auto">
          <h1>Log-In</h1>
        </div>
        <div className="vstack gap-2 col-md-5 mx-auto border p-2">
          <input type="text" {...register("username", { required: true })}
            className="form-control" placeholder='Username' />

          <input type="password" {...register("password", { required: true })}
            className="form-control" placeholder='Password' />

          <button type='submit'
            className='btn btn-primary'>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage