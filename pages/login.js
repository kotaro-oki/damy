import firebase from '../config/firebase'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Login () {
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')

    //本当はユーザ情報をグローバル関数として扱いたいが、一旦、ローカルで設定してみる
    const [user,setUser] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(mail,password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                setUser(user)
            }).catch((error) => {
                if(error.message === 'The password is invalid or the user does not have a password.'){
                    alert('パスワードが違います')
                }else{
                    alert(error)
                }
            })
        }
    
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            // console.log(user)
            return(
                <h1>aaaa</h1>
            )
        }else{
            console.log('aaa')
        }
    })
    
    const router = useRouter()

    const checkUser = (e) => {
        e.preventDefault()
        if(user){
            router.push('/room')
        }else{
            alert("ログインを完了させないと入れません")
        }
    }

    return(
        <>
            <h1>ログインページ</h1>
            <Link href='/signin'>
            <a>まだサインインしてない方はこちらからサインインページへ</a>
            </Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor='mail'>mail</label>
                <input
                    type='text'
                    placeholder='mail'
                    id='mail'
                    onChange={(e) => {setMail(e.target.value)}}
                />
                <label htmlFor='password'>password</label>
                <input
                    type='text'
                    placeholder='password'
                    id='password'
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <input type='submit'/>
            </form>
            <div>
                <h3>ルームに移動</h3>
                <button onClick={checkUser}>ルームに移動</button>
            </div>
        </>
    )
}