import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Admin, Customer, NotFoundPage, Login, HomePage } from './pages/IndexPage'
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import { AuthProvider } from './context/authContext'
import { CustomerInfo } from './components/Customer/CustomerInfo'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home-customer" element={<Customer />} />
            <Route path="/home-customer/user/:id" element={<CustomerInfo />} />
            <Route path="/home-admin" element={<Admin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
