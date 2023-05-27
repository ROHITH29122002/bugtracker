import connect from '../../lib/connect'
import User from '../../Models/user'

connect()

export default async function handler(req, res) {
  try {
     const user = await User.create(req.body);
     if(!user){
      return res.staus(500).json({"msg":"ERROR"});
     }
     res.redirect('https://bugtracker-kappa.vercel.app/')
  } catch (error) {
    res.status(500).json(err)
  }
}
