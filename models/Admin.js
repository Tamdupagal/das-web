import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   email:{
       type:String,
    //    required:true,
       unique:true
   },
   password:{
       type:String,
       required:true
   },
   role:{
       type:String,
    //    required:true,
       default:"user",
       enum:["user",'admin','root']
   }
},{
  timestamps:true  
})


export default  mongoose.models.Admin || mongoose.model('Admin',userSchema)