import connect from '../../lib/connect'
import Bug from '../../Models/bug'


connect()

export default async function handler(req, res) {
  try {
    const {param} = req.body
    const bug = await Bug.find({assignedto : param});
    if(!bug){
    res.status(404).json({"msg":"BUGS NOT FOUND"})
    }
    res.status(201).send(bug)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}
