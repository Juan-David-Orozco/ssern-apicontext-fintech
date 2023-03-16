import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Admin, Customer, NotFoundPage, Login, HomePage, Historico } from './pages/IndexPage'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import { AuthProvider } from './context/authContext'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <div className="container-fluid bg-dark p-2 mx-auto text-white">
      <BrowserRouter>
        <AuthProvider>
          <Navigation/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home-customer" element={<Customer />} />
            <Route path="/historico-customer" element={<Historico />} />
            <Route path="/home-admin" element={<Admin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
