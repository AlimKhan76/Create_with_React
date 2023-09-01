import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'


export const UpdateForm = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({
         id: "",
         name : "",
         course :"",
         email : "",
         phoneNumber : ""
    })



    const findById = () => {
        axios.get(`http://localhost:3001/findby/${id}`)
            .then((res) => {
                console.log(res)
                setStudent(res.data[0])
            })

    }


    useEffect(() => {
        findById()
    },[])


    const updateStudent = () => {
        axios.put("http://localhost:3001/update", {
            "id": student.id,
            "name": student.name,
            "course": student.course,
            "email": student.email,
            "phoneNumber": student.phoneNumber
        })
            .then((res) => {
                console.log(res)
                alert("The details of "+student.name+" is updated")
            })

    }

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }


    return (
        <div className='container'>
            <div className="my-2">
                <h1 className='text-center'>Student Information Updation Form</h1>
            </div>

            <form>
                <div className="mb-3">

                    <label className="form-label">Name</label>
                    <input type="text" name='name' className="form-control"   value={student.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input type="text" name='course' className="form-control"   value={student.course} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control"   value={student.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" name='phoneNumber' className="form-control"   value={student.phoneNumber} onChange={handleChange} />
                </div>
                <Link to="/all">
                    <button onClick={updateStudent} className="btn btn-primary">Update</button>
                </Link>
            </form>
</div>

    )
}

