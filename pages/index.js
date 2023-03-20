import Image from 'next/image'
import user from "../public/user.png"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.login_container}>
      <h1 className={styles.heading}>LOGIN PAGE</h1>
      <div className={styles.form_wrapper}>
      <Image className={styles.user_img} src={user} alt="user"/>
        <form className={styles.form_container} action='/api/login' method='POST'>
          <input onChange={(e)=>{localStorage.setItem("email",e.target.value)}} autoComplete='no' className={styles.input} type='email' name='email' placeholder='Enter Your Email'/>
          <input className={styles.input} type='password' name='password' placeholder='Enter Your Password'/>
          <select className={styles.select} name="role">
            <option>Select Your Role</option>
            <option name="role" value="tester">TESTER</option>
            <option name="role" value="developer">DEVELOPER</option>
          </select>
          <input 
          className={styles.login_btn} 
          type='submit' value='LOGIN'/>
        </form>
      </div>
    </div>
  )
}
