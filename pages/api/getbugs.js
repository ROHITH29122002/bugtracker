import connect from '../../lib/connect'
import Bug from '../../Models/bug'


connect()

export default async function handler(req, res) {
  try {
     const bug = await Bug.find();
     if(!bug){
        res.status(404).json({"msg":"PAGE NOT FOUND"})
     }
     res.status(201).send(bug)
  } catch (error) {
    res.status(500).json(error)
  }
}
