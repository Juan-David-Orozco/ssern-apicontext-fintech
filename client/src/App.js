import { BrowserRouter , Route, Routes } from "react-router-dom";
import { HomePage, Login, Register, Admin, Customer, Info, Historico, NotFoundPage } from './pages/IndexPage'
import './App.css';
import { AuthProvider } from './context/authContext'
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home-customer" element={<Customer />} />
            <Route path="/home-customer/user" element={ <Info /> } />
            <Route path="/home-customer/historico" element={ <Historico /> } />

            <Route path="/home-admin" element={<Admin />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
