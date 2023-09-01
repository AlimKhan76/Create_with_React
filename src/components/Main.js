import React, { useState } from 'react'
import { Link } from "react-router-dom";

// Importing axios, it is a external library, 
// it makes it easier to handle HTTP requests,
//  you can also use the in-built javascript fetch if you want
import axios from "axios";

export const Main = () => {
    // States for all the input fields in the form 
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // A function to add the form data to the database,
    //  this function is run after clicking on the submit button of the form 
    const addStudent = (event) => {
        // We use this to prevent reloading of page after form submission


        // Here we send a post request to server using the endpoint we created
        axios.post("http://localhost:3001/create/", {
            "name": name,
            "course": course,
            "email": email,
            "phoneNumber": phoneNumber
        })
            .then((response) => {
                // To view the data of the form go to the console after submisson and open the json, in the json there will be a array named config, it will be the first array, open config in it there  will be a array named data in it you will see the form data 
                console.log(response);

                // Or use this line to view the form data in console 
                // console.log(response.config.data);
                console.log("success");
                alert(name+ "has been successfully admitted")
            })
    }

    return (
        // Just a basic form taken from bootstrap
        <div className='container'>
            <div className="my-2">

                <h1 className='text-center'>Admission Form</h1>
            </div>
            <form className=' my-3'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(event) => {
                        setName(event.target.value)
                    }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input type="text" className="form-control" value={course} onChange={(event) => {
                        setCourse(event.target.value)
                    }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" value={phoneNumber} onChange={(event) => {
                        setPhoneNumber(event.target.value)
                    }} />
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={addStudent} className="btn btn-lg btn-success ">Submit</button>
                </div>
            </form>
            <Link to="/all">
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='align-items-center btn btn-lg btn-info'> Show All Students</button>
                </div>
            </Link>
        </div>
    )
}
