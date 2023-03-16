import { LoginForm } from '../components/LoginForm'

export function Login() {

  return (
    <section className="gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card bg-dark text-white">
              <div className="card-body p-4 text-center">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
