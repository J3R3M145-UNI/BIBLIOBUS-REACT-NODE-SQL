import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/tasks' element={<h1 className='display-4'>Task Page</h1>} />
          <Route path='/add-task' element={<h1 className='display-4'>New Task</h1>} />
          <Route path='/tasks/:id' element={<h1 className='display-4'>Update Task</h1>} />
          <Route path='/profile' element={<h1 className='display-4'>Profile</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;