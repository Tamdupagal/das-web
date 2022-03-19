import initDB from '../../helpers/initDB'
import Admin from '../../models/Admin'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

initDB()

export default async (req,res)=>{
     const {email,password} = req.body
     try{
        if(!email || !password){
          return res.status(422).json({error:"please fill all the fields"})
        }
      const admin = await Admin.findOne({email})
      if(!admin){
          return res.status(404).json({error:"user dont exists with that email"})
      }
        const doMatch =  await bcrypt.compare(password,admin.password)
        if(doMatch){
           const token =  jwt.sign({adminId:admin._id},`${process.env.JWT_SECRET}`,{
                expiresIn:"7d"
            })
            const {email,password} = admin
            res.status(201).json({token,admin:{email,password}})
        }else{
           return res.status(401).json({error:"email or password dont match"})
        }
     }catch(err){
         console.log(err)
     }
}