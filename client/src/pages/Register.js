import { RegisterForm } from '../components/RegisterForm'

export function Register() {
  return (
    <section className="gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 mx-auto">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div id='formContainer' className="card bg-dark text-white">
              <div className="card-body px-5 py-4 text-center">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
