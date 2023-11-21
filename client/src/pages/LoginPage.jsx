import { useForm } from 'react-hook-form';
import { UseAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: SigninErrors, isAuthenticated } = UseAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/add-task')
  }, [navigate, isAuthenticated])

  return (
    <>
      <div className="container-sm bg-primary-subtle p-5 mx-auto m-5 rounded">
        {SigninErrors.map((error, index) => ((

          <div key={index} className='alert alert-danger'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle mx-2 align-text-top" viewBox="0 0 16 16">
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
            </svg>
            {error}
          </div>
        ))
        )}

        <form
          onSubmit={handleSubmit((values) => {
            signin(values);
          })}
        >
          <div className="col-md-5 mx-auto">
            <h1>Login</h1>
          </div>
          <div className="vstack gap-2 col-md-5 mx-auto border p-2">
            <input type="text" {...register("username", { required: true })}
              className="form-control" placeholder='Username' />
            {errors.username && <span className='badge text-bg-warning text-wrap'>This field is required</span>}

            <input type="password" {...register("password", { required: true })}
              className="form-control" placeholder='Password' />
            {errors.password && <span className='badge text-bg-warning text-wrap'>This field is required</span>}

            <button type='submit'
              className='btn btn-primary'>
              Entrar
            </button>
          </div>
        </form>
        <p className='text-center'>Aun no estas registrado?
          <Link to='/register'>Sign up</Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage