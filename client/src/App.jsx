import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskPage from './pages/TaskPage';
import PrestamoFormPage from './pages/PrestamoFormPage';
import LibroFormPage from './pages/LibroFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from './context/TaskContext';
import Navbar_rb from './components/Navbar';


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Navbar_rb />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />} >
              <Route path='/tasks' element={<TaskPage />} />
              <Route path='/prestamos' element={<PrestamoFormPage />} />
              <Route path='/libros' element={<LibroFormPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>

          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;