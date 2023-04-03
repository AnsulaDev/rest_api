import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please enter your name']
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    percentage:{
        type:Number,
        requred:true
    }
}
,{
    timestamps:true
});

const Student = mongoose.model('student', studentSchema);

export default Student;
