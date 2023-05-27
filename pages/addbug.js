import styles from "../styles/addbug.module.css"

function addbug() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>ADD BUG PAGE : </h1>
      <form className={styles.form_container} action="https://bugtracker-kappa.vercel.app/api/addbug" method="POST">
        <input className={styles.input} type="text" name="name" placeholder='Enter The Bug Name'/>
        <textarea type="text" className={styles.input} name='desc' placeholder='Enter Bug Description'></textarea>
        <select className={styles.select} name="severity">
          <option>Severity</option>
          <option className={styles.option} value="low" name="severity">Low</option>
          <option className={styles.option} value="medium" name="severity">Medium</option>
          <option className={styles.option} value="high" name="severity">High</option>
        </select>
        <select className={styles.select} name="assignedto">
          <option>Assign To</option>
          <option className={styles.option} name="assignedto" value="rohithvampires123@gmail.com">ROHITH</option>
        </select>
        <input className={styles.submit_btn} type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default addbug