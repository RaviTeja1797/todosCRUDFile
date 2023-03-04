const express = require("express");
const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const expressAppInstance = express();
expressAppInstance.use(express.json());

const dataBaseAddressPath = path.join(__dirname, "todoApplication.db");
let databaseConnectionObject = null;

const initializeDBAndServerAtPort3000 = async()=>{
    try{
        databaseConnectionObject = await open({
            filename: dataBaseAddressPath,
            driver:sqlite3.Database
        })
        expressAppInstance.listen(3000, ()=>{
            console.log(`Database Connection object received in the Variable "databaseConnectionObject"
Server started listening at http://localhost:3000/`)
        })
    }catch(e){
        console.log(`Database Error ${e.message}`)
        process.exit(1);
    }
}

initializeDBAndServerAtPort3000();



//API - 3 addTodo - POST METHOD

expressAppInstance.post('/todos/', (request, response)=>{
    
    let todoObject = request.body
    let {todo, priority, status} = todoObject;
    console.log(todo, priority, status);

});

