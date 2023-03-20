import connect from '../../lib/connect'
import User from '../../Models/user'


connect()

export default async function handler(req, res) {
  try {
     const {email} = req.body;
     const user = await User.findOne({email});
     if(!user){
        res.status(400).json({"msg":"INVALID CREDENTIALS"})
     }
     res.json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}
