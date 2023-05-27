import connect from '../../lib/connect'
import Bug from '../../Models/bug'

connect()

export default async function handler(req, res) {
  try {
    const {name,newdesc,newstatus}=req.body
    const newdata = await Bug.findOneAndUpdate({name:name},{desc:newdesc,status:newstatus},{new:true})
    if(!newdata){
        res.status(400).json({"msg":"error"})
    }
    res.redirect("https://bugtracker-kappa.vercel.app/developer")
  } catch (error) {
    res.status(500).json(error)
  }
}
