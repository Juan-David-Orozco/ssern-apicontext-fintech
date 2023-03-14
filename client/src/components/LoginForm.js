import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export function LoginForm() {

  const [user, setUser] = useState({
    email: '', password: ''
  })

  const { login } = useAuth()

  const navigate = useNavigate()

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user.email, user.password)
    const result = await login(user.email, user.password)
    console.log(result)
    navigate("/home-customer")
  }

  return (
    <div className="row m-1">
      <div className="col-8 col-md-6 mx-auto px-4">
        <h2 className="text-center">Login</h2>
        <div className="row my-3">
          <div className="col-6 mx-auto">
            <span className="input-group-text p-8 rounded-9">
            <i className="fa fa-user fa-3x fa-xl p-4 mx-auto"></i></span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-light shadow-md rounded px-8 py-6 mb-4">
          <div className='mx-3 py-2'>
            <label htmlFor="email" className='text-sm text-dark'>Email</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend my-auto">
                <span className="input-group-text">
                <i className="fa fa-envelope-o fa-fw py-1"></i></span>
              </div>
              <input 
                type="email" name="email" 
                id="email" placeholder="email@example.com" 
                className="form-control px-2 m-auto"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='mx-3 py-2'>
            <label htmlFor="password" className='text-sm text-dark'>Password</label>
            <div className="input-group mb-2 my-auto">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fa fa-key fa-fw py-1"></i></span>
              </div>
              <input
                type="password" name="password" 
                id="password" placeholder="******" 
                className="form-control px-2 m-auto"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <button type='submit' className='col-6 mx-auto mt-2 mb-3 btn btn-block bg-primary text-center py-2'>Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}
