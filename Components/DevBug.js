import styles from "../styles/devbug.module.css"

function DevBug({bug}) {

  return (
    <>
      <div className={styles.bug_container}>
      <div className={styles.ques_container}>
          <h4>Name</h4>
          <h4>Desc</h4>
          <h4>Severity</h4>
          <h4>Assigned To</h4>
          <h4>Status</h4>
        </div>
        <div className={styles.ques_container}>
          <h4> :</h4>
          <h4> :</h4>
          <h4> :</h4>
          <h4> :</h4>
          <h4> :</h4>
        </div>
        <div className={styles.ans_container}>
          <h4>{bug.name}</h4>
          <h4>{bug.desc}</h4>
          <h4>{bug.severity}</h4>
          <h4>{bug.assignedto}</h4>
          <h4>{bug.status}</h4>
        </div>
    </div>
    {bug.status==="closed" ? " " : <a className={styles.edit_btn} onClick={()=> localStorage.setItem("bug",bug.name)} href="/editbug">Edit</a> }
    
    </>
  )
}

export default DevBug