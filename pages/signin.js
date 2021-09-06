import { useState } from "react"
import firebase from "../config/firebase"
import Link from 'next/link'

export default function Singin () {
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(mail,password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user
                console.log(user)
            }).catch((error) => {
                alert(error)
            })
    }

    return(
        <>
            <h1>サインインページ</h1>
            <Link href='/login'>
                <a>既にサインイン済みの方はこちらからログインページへ</a>
            </Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor='mail'>mail</label>
                <input
                    type='text'
                    placeholder='mail'
                    id='mail'
                    onChange={e => setMail(e.target.value)}
                />
                <label htmlFor='password'>password</label>
                <input
                    type='text'
                    placeholder='password'
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                />
                <input type='submit' value='登録' />
            </form>
        </>
    )
}