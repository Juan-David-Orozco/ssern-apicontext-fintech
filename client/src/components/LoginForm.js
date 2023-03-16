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
        setValidCaptcha(true)
        if(user.email === "" || user.password === "") {
          setError('Campos obligatorios') 
        } else {
          setError('')
          const result = await login(user.email, user.password)
          console.log(result)
          const userValid = result.data.userLogin
          console.log(userValid)
          if(!userValid) navigate("/")
          if(userValid.UserType === "customer")
            navigate("/home-customer")
          if(userValid.UserType === "admin")
            navigate("/home-admin")
        }
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
    <form onSubmit={handleSubmit} className="pb-3">

      <h4 className="fw-bold mb-2 mt-1 text-uppercase">Login</h4>
      <p className="text-white-50 mb-3">Please enter your email and password!</p>
      {error && <Alert msg={error} />}

      <div className="form-floating text-dark mb-2">
        <input type="email" id="typeEmailX" className="form-control"
          name="email" placeholder='email' onChange={handleChange} />
        <label for="typeEmailX">Email</label>
      </div>

      <div className="form-floating text-dark mb-2">
        <input type="password" id="typePasswordX" className="form-control"
          name="password" placeholder='password' onChange={handleChange} />
        <label for="typePasswordX">Password</label>
      </div>

      <div className="row mx-auto mt-5">
        <div className="col-10 mx-auto px-0">
        <ReCAPTCHA
          ref={captcha}
          size='compact'
          sitekey="6LcFHfwkAAAAACArVySBO4pn4Tn8hvbpld4CFbwC"
          onChange={onChange}
        />,
        </div>
      </div>
      {validCaptcha === false && <div className='text-info text-center mb-4'>Debe aceptar el captcha</div>}

      <div className="mt-2">
        <button className="btn btn-outline-light btn-md px-5" type="submit">LOGIN</button>
      </div>

    </form>
  )
}
