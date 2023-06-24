import connect from '../../lib/connect'
import Bug from '../../Models/bug'

connect()

export default async function handler(req, res) {
  try {
     const user = await Bug.create(req.body);
     console.log(req.body);
     if(!user){
      return res.staus(500).json({"msg":"ERROR"});
     }
     res.redirect('/tester')
  } catch (error) {
    res.status(500).json(error)
  }
}
