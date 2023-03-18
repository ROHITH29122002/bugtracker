import connect from '../../lib/connect'
import User from '../../Models/user'

connect()

export default async function handler(req, res) {
  try {
     const {email,password,role} = req.body;
     const user = await User.findOne({email,password,role});
     if(!user){
        res.status(400).json({"msg":"INVALID CREDENTIALS"})
     }
     if(role==="tester"){
        res.redirect("/tester")
     }
     else{
        res.redirect("/developer")
     }
  } catch (error) {
    res.status(500).json(error)
  }
}
