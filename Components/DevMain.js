import { useEffect, useState } from "react"
import DevBug from "./DevBug"
import styles from "../styles/devmain.module.css"

function DevMain({user}) {
  const [bugs,setbugs]=useState([])
  useEffect(()=>{
    const getbugs = async () => {
      const param = localStorage.getItem("email")
      const res = await fetch("/api/getdevbugs",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({param}),
      });
      const data = await res.json()
      setbugs(data);
    }
    getbugs();
  },[])
  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_heading}>BUGS LIST</h1>
      <div className={styles.bugs_container}>{bugs.map(bug => <DevBug key={bug.id} bug={bug}/>)}</div>
    </div>
  )
}

export default DevMain