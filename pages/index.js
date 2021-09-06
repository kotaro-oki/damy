import Link from 'next/link'

import styles from  '../styles/Home.module.css'

export default function Home() {
  return(
    <>
      <Link href='/signin'>
        <a className={styles.text}>サインインページへ→</a>
      </Link>
      <br/>
      <Link href='/login'>
        <a className={styles.text}>ログインページへ→</a>
      </Link>
    </>
  )
}
