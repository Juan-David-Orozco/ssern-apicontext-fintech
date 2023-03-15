export function Alert({msg}) {
  return (
    <div className="row mx-auto py-3 text-center text-danger">
      <div className="col-8-col-md-6 mx-auto">
        {msg}
      </div>
    </div>
  )
}
