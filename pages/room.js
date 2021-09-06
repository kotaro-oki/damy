import Link from 'next/link'
import { useEffect, useState } from 'react'
import firebase from '../config/firebase'
import styles from '../styles/Room.module.css'
import Message from '../components/message'
import { nanoid } from 'nanoid'

export default function Room () {
    const [name,setName] = useState('')
    const [value,setValue] = useState('')

    const [messages,setMessages] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        firebase.firestore().collection('messages').add({
            name: name,
            content: value
        })
    }

    useEffect(() => {
        // snapshotイベントは、対象のコレクション(今回はmessages)に変更があるたびに発生するため、リアルタイムでアプリケーションにデータを反映できます。
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                console.log(snapshot)
                console.log(snapshot.docs)
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                console.log(messages)
                setMessages(messages)
                messages.map(message => {return(<Message/>)})
            })
    },[])

    return(
        <>
            <Link href='/'>
                <a className={styles.main}>トップページへ</a>
            </Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='name'
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='text'
                        onChange={e => setValue(e.target.value)}
                    />
                    <input type='submit'/>
                </form>
            </div>
            {
                messages.map(message => {return(<Message message={message} key={nanoid()} />)})
            }
        </>
    )
}