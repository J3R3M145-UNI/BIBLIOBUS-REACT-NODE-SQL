import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path="/sign-in" element={<LoginPage />} />
              <Route path="/sign-up" element={<RegisterPage />} />
              <Route path='/tasks' element={<h1 className='display-4'>Task Page</h1>} />
              <Route path='/add-task' element={<h1 className='display-4'>New Task</h1>} />
              <Route path='/tasks/:id' element={<h1 className='display-4'>Update Task</h1>} />
              <Route path='/profile' element={<h1 className='display-4'>Profile</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;