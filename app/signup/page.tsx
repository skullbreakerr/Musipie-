import  Authorize  from "../components/Authorize";
import {useState} from 'react';
import Link from 'next/link';
import { auth } from '../db/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Homepage from "../homepage/page";

export default function SignUp(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [status,setStatus]=useState(false); 

  async function handleSignup(){
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if(userCredentials.user){
        setStatus(true);        
      }
    } catch (err) {
      alert(err);
    }
  }
  return(
    <>
    {status?<><Homepage /></>:
    <>
    <Authorize
     title={"Signup to start listening"}
     subTitle={"Signup"}
     name={true}
     onchangeName={setName}
     email={true}
     onchangeMail={setEmail}
     password={true}
     onchangePassword={setPassword}
     click={handleSignup}
    >
      <p className="note">Already have an account?<Link href="/login">Login</Link></p>
    </Authorize>
    </>}
    </>
  )
}