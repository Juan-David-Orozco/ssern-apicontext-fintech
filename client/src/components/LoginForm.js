import { useState, useRef } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from './Alert'

export function LoginForm() {

  const [user, setUser] = useState({
    email: '', password: ''
  })

  const [error, setError] = useState('')

  const [validCaptcha, setValidCaptcha] = useState(null)

  const captcha = useRef(null)

  const { login } = useAuth()

  const navigate = useNavigate()

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const onChange = () => {
    if(captcha.current.getValue())
      setValidCaptcha(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user.email, user.password)
    try {
      if(captcha.current.getValue()) {
        const result = await login(user.email, user.password)
        console.log(result)
        setValidCaptcha(true)
        navigate("/home-customer")
      } else {
        console.log("Debe aceptar el captcha")
        setValidCaptcha(false)
      }
    } catch (error) {
      console.log(error)
      setError('Credenciales invalidas intente nuevamente')
    }
  }

  return (
    <div className="row m-1">
      <div className="col-12 col-md-8 mx-auto px-4">
        <h2 className="text-center">Login</h2>
        <div className="row my-3 mx-auto">
          <div className="col-8 col-sm-6 col-md-4 mx-auto">
            <span className="input-group-text p-2">
              <i className="fa fa-user fa-3x p-4 mx-auto"></i>
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-light rounded my-2">
          {error && <Alert msg={error}/> }
          <div className='mx-4 py-2'>
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
          <div className='mx-4 py-2'>
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
          <div className='row mx-auto mt-2 p-1 align-items-center justify-content-center text-align-center'>
            <div className="col-12 col-sm-11 col-md-9 col-lg-7 col-xl-5 mx-auto">
              <ReCAPTCHA
                className=''
                ref={captcha}
                sitekey="6LcFHfwkAAAAACArVySBO4pn4Tn8hvbpld4CFbwC"
                onChange={onChange}
              />,
            </div>
          </div>
          {validCaptcha === false && <div className='text-danger text-center mb-4'>Debe aceptar el captcha</div>}
          <div className='row mx-auto px-1 text-center'>
            <div className="col-6 col-md-8 mx-auto mb-3">
              <button type='submit' className='btn btn-block bg-primary text-center py-2'>Iniciar Sesión</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
