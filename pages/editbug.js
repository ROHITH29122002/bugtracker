import { useEffect, useState } from "react";
import styles from "../styles/editbug.module.css"

function editbug() {
  const [activebug,setactivebug]=useState({})
  useEffect(()=>{
    const getbug = async () => {
      const name = localStorage.getItem("bug")
      const res = await fetch("/api/getbug",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name}),
      });
      const data =await res.json();
      setactivebug(data)
    }
    getbug()
  },[])
  const handleinput = async () => {
    const res = await fetch("/api/editbug",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({activebug}),
    })
    const data = res.json();
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>EDIT BUG PAGE : </h1>
      <form className={styles.form_container} action="/api/editbug" method="POST">
        <input className={styles.input} name="name" value={activebug.name}/>
        <textarea className={styles.input} onChange={(e)=>{
          setactivebug({...activebug , desc : e.target.value})
        }} value={activebug.desc} name='newdesc' placeholder='Enter Description of Bug'></textarea>
        <select className={styles.select} onChange={(e) => setactivebug({...activebug,status:e.target.value})} value={activebug.status} name="newstatus">
          <option name="newstatus" value="open">open</option>
          <option name="newstatus" value="closed">closed</option>
        </select>
        <input className={styles.submit_btn} type="submit" value="Edit"/>
      </form>
    </div>
  )
}

export default editbug