import initDB from '../../helpers/initDB'
import User from '../../models/User'
import bcrypt from 'bcryptjs'
// import Cart from '../../models/Cart'
// import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
initDB()


export default async (req,res)=>{
     const {fname,email,phone} = req.body
     try{
        if(!fname || !email || !phone){
          return res.status(422).json({error:"please fill all the fields"})
        }
      const user = await User.findOne({email})
      if(user){
          return res.status(422).json({error:"user already exists with that email"})
      }
    //  const hashedPassword = await bcrypt.hash(password,12)
     const newUser =  await new User({
         fname,
         email,
         phone
        //  password:hashedPassword
     }).save()
    //  await new Cart({user:newUser._id}).save()
        res.status(201).json({message:"signup success"})
     }catch(err){
         console.log(err)
     }
}