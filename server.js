import  express  from "express";

import mongoose from "mongoose";

import Student from "./models/studentModel.js";
import * as dotenv from 'dotenv' 
dotenv.config()


const app = express();

app.use(express.json());
const PORT = 4000;

const MONGO_URL = process.env.MONGO_URL;

app.get('/', ( req, res) => {
    res.send('Hello guys');
});

//get all students

app.get('/students',async(req, res) =>{
    try{
        const students = await Student.find({});
        res.status(200).json(students);
    }
    catch(error){
        res.status(500).json({message:error.message});

    }
});

//get by its id students
app.get('/students/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});


// creat a student
app.post('/students', async(req, res) => {
    try{
        const student = await Student.create(req.body);
        res.status(200).json(`student name ${student.name} is created.`);
    }
    catch(error){
        res.status(500).json({message:message.error});
    }
});

//update student by its id
app.put('/students/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);

        if(!student){
            res.status(404).json({message:`student with ${id} doesn't exist`});
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json({message:`student  ${updatedStudent.name} is updated.`});
    }catch(error){
        res.status(500).json({message: message.error});
    }

    
});

//delete student by its id
app.delete('/students/:id',async(req, res) => {
    try{
        const {id} = req.params;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if(!deleteStudent){
            res.status(404).json({message:`student with ${id} doesn't exist.`});
        }
        res.status(200).json(deleteStudent);
    }
    catch(error){
        res.status(500).json({message:message.error});
    }
});

mongoose.set("strictQuery", false);
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to db');
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
}).catch((error) => {
    console.log(error)
})

