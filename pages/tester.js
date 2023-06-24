import { useEffect, useState } from 'react'
import Image from "next/image"
import TesterMain from '../Components/TesterMain';
import styles from "../public/styles/tester.module.css"
import Link from 'next/link';


function Tester() {
  const [user,setuser]=useState([]);
  useEffect(()=>{
    const getuser = async () => {
      const email = localStorage.getItem("email")
      const res = await fetch("/api/getuser",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
      const data =await res.json();
      setuser(data)
    }
    getuser();
  },[])
  return (
    <div>
      <div className={styles.left_container}>
      <h1 className={styles.profile_heading}>PROFILE</h1>
        <div className={styles.top_container}>
          <div>
            <Image className={styles.user_img} src={user.img} alt="user" width={250} height={250}/>
            <div className={styles.bottom_container}>
              <h3>USERNAME : </h3>
              <p>ROHITH</p>
              <h3>EMAIL : </h3>
              <p>{user.email}</p>
              <h3>ROLE : </h3>
              <p>{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    <div className={styles.wrapper}>
      <div className={styles.main_container}>
        <TesterMain user={user} />
        <Link className={styles.add_bug_btn} href='/addbug'>ADD BUG</Link>
      </div>
    </div>
    </div>
  )
}

export default Tester