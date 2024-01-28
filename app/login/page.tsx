'use client';
import  Authorize  from '../components/Authorize';
import Homepage from '../homepage/page';
import { useState } from 'react';
import { auth } from '../db/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(false);

  async function handleLogin() {
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
  return (
    <>
      {status ? (
        <>
          <Homepage />
        </>
      ) : (
        <>
          <Authorize
            title={'Login to Musipie'}
            subTitle={'Login'}
            email={true}
            password={true}
            name={false}
            onchangeMail={setEmail}
            onchangePassword={setPassword}
            onchangeName={false}
            click={handleLogin}
          >
            <p className="mt-3">
              <Link href="/notfound">Forgot your password ?</Link>
            </p>
            <p className="note">Don't have an account?</p>
            <Link href="/signup">SignUp for Musipie</Link>
          </Authorize>
        </>
      )}
    </>
  );
}
