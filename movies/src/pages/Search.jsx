
export const Search = () => {
  return (
    <>
      <main className="container">
        <h1 className="text-dark text-center fw-bold">ADD YOUR MOVIES</h1>
        <form className="card py-3 px-3 ">
          <div className="mb-3 " style={{ marginLeft: "200px" }}>
            <label for="title" className="form-lable fw-bold fs-5 mt-3">TITLE</label>
            <input type="text" className="form-control w-75"></input>
            <label for="title" className="form-lable fw-bold fs-5 mt-3">GENRE</label>
            <input type="text" className="form-control w-75"></input>
            <label for="title" className="form-lable fw-bold fs-5 mt-3">RATING</label>
            <select className="form-select w-75">
              <option selected>Select rating</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <label for="title" className="form-lable fw-bold fs-5 mt-3">REVIEW</label>
            <textarea type="text" className="form-control w-75 " rows={5}></textarea>
            <label className="form-label fw-bold fs-5 mt-3">UPLOAD POSTER</label>
            <input type="file" className="form-control mt-1 w-75"></input>
            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </main>
    </>
  )
}
