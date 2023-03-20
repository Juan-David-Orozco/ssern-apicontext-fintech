import { useAuth } from '../context/authContext'
//import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { SideBar } from '../components/SideBar'

export function Customer() {

  const { userLogin } = useAuth()

  const [send, setSend] = useState(false)

  const [showUserInfo, setShowUserInfo] = useState(false)
  const [showHome, setShowHome] = useState(true)
  const [showHistorico, setShowHistorico] = useState(false)


  const [valueAnticipo, setValueAnticipo] = useState(0)

  //if(!userLogin) return (<Navigate to={'/login'} />)

  const toggleInputAnticipo = () => {
    const toggleInputAnticipo = document.getElementById('anticipo')
    if(toggleInputAnticipo.disabled === true) {
      toggleInputAnticipo.disabled = false
    } else if(toggleInputAnticipo.disabled === false) {
      toggleInputAnticipo.disabled = true
    }
  }

  const handleChange = () => {
    const valueAnticipoInput = document.getElementById('anticipo').value
    console.log(valueAnticipoInput)
    setValueAnticipo(valueAnticipoInput)
  }

  const sendAnticipo = () => {
    console.log(valueAnticipo)
    setSend(true)
  }

  const handleUserInfo = (stateUserInfo) => {
    setShowUserInfo(stateUserInfo)
    // setShowHome(!stateUserInfo)
    // setShowHistorico(!stateUserInfo)
  }

  const handleHome = (stateHome) => {
    setShowHome(stateHome)
    // setShowUserInfo(!stateHome)
    // setShowHistorico(!stateHome)
  }

  const handleHistorico = (stateHistorico) => {
    setShowHistorico(stateHistorico)
    // setShowUserInfo(!stateHistorico)
    // setShowHome(!stateHistorico)
  }



  //const returnAnticipo = () => {setSend(false)}

  if(!send){
    return (
      <>
        <SideBar
          handleUserInfo={handleUserInfo}
          handleHome={handleHome}
          handleHistorico={handleHistorico}
        />
        <main>
          <div className="vh-100 container">
            <div className="row mx-auto align-items-center h-100 text-white mt-5 mt-lg-0">

              {showUserInfo && <div> Informacion de usuario</div>}
              {showHome && <div> Home</div>}
              {showHistorico && <div> Historico</div>}
            
            </div>
          </div>
        </main>
      </>
      
    )
  } else {
    return (
      <div className="row m-1 bg-light rounded text-dark py-4 justify-content-center">
        <div className="col-10 col-md-8 mx-auto py-4 my-4 mx-auto">
          <div className="row mx-auto my-1 text-justify">
            <div className="card">
              <div className="card-title text-center mt-1 bg-dark text-white rounded">Bienvenido señor: {userLogin.username}</div>
              <div className="card-body">Es un gusto contar con su visita, a continuacion aparecera el valor del 
              anticipo que puede realizar en esta ocasion. Sientase libre de modificarlo considerando que el valor 
              debe ser menor al cupo disponible</div>
            </div>
          </div>
          <div className="row mx-auto mt-2 text-center">
            <div className="col-10 mx-auto p-2">
              <h4 className="my-2">Valor Anticipo Disponible</h4>
              <form>
                <div className="input-group-prepend">
                  <input type="text" name="anticipo" id="anticipo" disabled={true} value={valueAnticipo} onChange={handleChange}/>
                  <span className='mx-1'><i className="fa fa-edit" onClick={toggleInputAnticipo}></i></span>
                </div>
              </form>
              <div type="button" className='btn btn-block btn-success mt-3' onClick={sendAnticipo}>Enviar</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
