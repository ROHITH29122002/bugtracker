import { useEffect, useState } from "react"
import Bug from "./Bug"
import styles from "../public/styles/testermain.module.css"

function TesterMain({user}) {
  const [bugs,setbugs]=useState([])
  useEffect(()=>{
    const getbugs = async () => {
      const res = await fetch("/api/getbugs")
      const data = await res.json()
      setbugs(data)
    }
    getbugs();
  },[])
  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_heading}>BUGS LIST</h1>
      <div className={styles.bugs_container}>{bugs.map(bug => <Bug key={bug.id} bug={bug}/>)}</div>
    </div>
  )
}

export default TesterMain