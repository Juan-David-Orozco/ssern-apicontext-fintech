import { useState } from 'react'

export function Home() {

  const [send, setSend] = useState(false)
  
  const [valueAnticipo, setValueAnticipo] = useState(0)

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

  const returnAnticipo = () => {setSend(false)}

  return (
    <>
      <div className="row m-1 bg-light rounded text-dark py-4 justify-content-center">
        <div className="col-10 col-md-8 mx-auto py-4 my-4 mx-auto">
          <div className="row mx-auto my-1 text-justify">
            <div className="card">
              <div className="card-title text-center mt-1 bg-dark text-white rounded">Bienvenido señor</div>
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
    </>
  )
}
