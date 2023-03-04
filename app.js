const express = require('express');
const expressAppInstance = express();
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');
const bodyParser = require('body-parser');

const databasePath = path.join(__dirname, "todoApplication.db");
let databaseConnectionObject = null;

expressAppInstance.use(bodyParser.json());

const initializeDBAndServer = ()=>{
    try{
        databaseConnectionObject = open({
            filename:databasePath,
            driver:sqlite3.Database
        })
        expressAppInstance.listen(3001, ()=>{
            console.log(`Database object received and server initialized`)
        })
    }catch(e){
        console.log(`Database error ${e.message}`)
    }
}

initializeDBAndServer();

expressAppInstance.post("/todo/", (request, response)=>{
    const todoObjectFromRequest = request.body;
    
    const {todo, priority, status} = todoObjectFromRequest;

    console.log(todoObjectFromRequest)
    console.log(todo, priority, status)
    
});