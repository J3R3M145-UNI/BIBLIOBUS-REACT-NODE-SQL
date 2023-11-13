import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskPage from './pages/TaskPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute'
import { TaskProvider } from './context/TaskContext';


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />} >
              <Route path='/tasks' element={<TaskPage />} />
              <Route path='/add-task' element={<TaskFormPage />} />
              <Route path='/tasks/:id' element={<TaskFormPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>

          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;