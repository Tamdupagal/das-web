import initDB from '../../helpers/initDB'
import Admin from '../../models/Admin'
import bcrypt from 'bcryptjs'
// import Cart from '../../models/Cart'
// import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
initDB()


export default async (req,res)=>{
     const {email,password} = req.body
     try{
        if(!email || !password){
          return res.status(422).json({error:"please fill all the fields"})
        }
      const admin = await Admin.findOne({email})
      if(admin){
          return res.status(422).json({error:"admin already exists with that email"})
      }
     const hashedPassword = await bcrypt.hash(password,12)
     const newAdmin =  await new Admin({
        //  fname,
         email,
        //  phone
         password:hashedPassword
     }).save()
    //  await new Cart({admin:newUser._id}).save()
        res.status(201).json({message:"signup success"})
     }catch(err){
         console.log(err)
     }
}