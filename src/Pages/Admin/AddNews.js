import React, { useState } from 'react'

export default function AddNews() {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
  return (
    <main className="pt-3">
        <div className="container-fluid px-4">
            <h1 className="my-4">Add News</h1>
            <div className="my-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control"  name="title" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea name="description" id="" onChange={handleChange}  cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-check">
                        <input type="file" className="form-control" id="exampleCheck1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </main>
  )
}
