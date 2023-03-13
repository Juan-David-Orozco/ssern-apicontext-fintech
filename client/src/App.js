import { Route, Routes } from "react-router-dom";
import { Admin, Customer, NotFoundPage, Login, HomePage } from './pages/IndexPage'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import { AuthProvider } from './context/authContext'

function App() {
  return (
    <div className="container bg-dark border border-primary p-2 my-4 mx-auto rounded text-white">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home-customer" element={<Customer />} />
          <Route path="/home-dmin" element={<Admin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
