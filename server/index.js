
// The backend and frontend part of the project should be kept separate as it will be easier for maintaince and easier to read 

//To run the server use node index.js
// To keep the server running and provide hot reloading you can use nodemon
// Here we import the express library 
const express = require('express');

//Here we initalize an express server
const app = express();

// Here we import mysql required for database operations, it is used for Mysql however it should also work with Sql Developer 
const mysql = require('mysql2')

// Here we import cors so that cors error is not shown 
const cors = require("cors")

// We use Cors to allow requests from other address other than the server 
app.use(cors());
app.use(express.json())

// When our server starts it will start at the port listed below
app.listen(3001, () => {
    console.log("running")

})

// Here we put the database config
const db = mysql.createConnection({
    user: "root",
    password: "tiger",
    host: "localhost",
    database: "test",
});


// Here we create a post request to the server "/create" is the endpoint it can be anything
app.post("/create", (req, res) => {
    const name = req.body.name;
    const course = req.body.course;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;

    // Sql query 
    // We can put the values directly instead of ? but for security we pass the data by the array after the query 
    // It is Important to know the data will be inserted in the order written in the array after the query, so if the first column is name, the first element in the array should also be name 
    db.query("INSERT INTO React_test (name, course, email, phoneNumber) VALUES (?,?,?,?)", [name, course, email, phoneNumber],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result)
                res.send(result);
            }
        }
    )
})


app.get("/show", (req, res) => {
    db.query("Select * from React_test", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})



app.put("/update", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const course = req.body.course;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber



    db.query("Update React_test set name=? ,course=? , email= ?, phoneNumber=? where id= ?", [name, course, email, phoneNumber, id], (err, result) => {
        if (err) {
            console.log(err);

        }
        else {
            console.log("Update")
            res.send(result);
        }
    })
})


app.delete("/delete/:id", (req, res) => {
    const id = req.params.id

    db.query("delete from React_test where id= ?", id, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
})

app.put("/find", (req, res) => {
    const id = req.body.id;
    console.log(id);

    db.query("Select * from React_test where id= ? ", [id], (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result);
        }
    })
})



app.get("/findby/:id", (req,res)=>{
    const id= req.params.id
    console.log(id);

    db.query("SELECT * FROM react_test where id=?",id,(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

