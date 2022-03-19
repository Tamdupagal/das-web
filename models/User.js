import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
   fname:{
       type:String,
    //    required:true
   },
   phone:{
    type:Number,
 //    required:true
},
   email:{
       type:String,
    //    required:true,
       unique:true
   } ,
   role:{
       type:String,
    //    required:true,
       default:"user",
       enum:["user",'admin','root']
   }
},{
  timestamps:true  
})


export default  mongoose.models.User || mongoose.model('User',userSchema)