const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Jithin:passwordformongodb@cluster0.qvmlwst.mongodb.net/LogInSignUpTutorial2?retryWrites=true&w=majority")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log(e);
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('collection1',logInSchema)

module.exports=LogInCollection