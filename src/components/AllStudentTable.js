import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export const AllStudentTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    showAllStudents()
  }, [])


  const showAllStudents = () => {
    axios.get("http://localhost:3001/show").then((res) => {
      console.log(res)
      setData(res.data)
    })
  }


  const deleteStudent = (id,name) => {
    const r = window.confirm("Do You want to delete "+name+" record")
    if (r === true) {
      axios.delete(`http://localhost:3001/delete/${id}`).then((res) => {
        console.log(res)
        console.log("deleted")
        showAllStudents();
      })
    }
  }




  return (
    <div className='mt-5 container text-center'>
      <h1>All Students Info</h1>
      <table className="table " >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val) => {
            return (
              <tr key={val.id}>
                <th scope="row">{val.name}</th>
                <td>{val.course}</td>
                <td>{val.email}</td>
                <td>{val.phoneNumber}</td>
                <td>
                  <Link to={`/update/${val.id}`} >
                  <button className='btn btn-primary mx-1'>Update</button>
                  </Link>
                  <button onClick={() => { deleteStudent(val.id,val.name) }} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>
  )
}
