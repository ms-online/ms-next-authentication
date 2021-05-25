import Link from 'next/link'

import classes from './main-navigation.module.css'
import { signOut, useSession } from 'next-auth/client'
function MainNavigation() {
  const [session, loading] = useSession()

  console.log(loading)
  console.log(session)

  function logoutHandler() {
    signOut()
  }
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>Next 身份验证</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && (
            <li>
              <Link href='/auth'>登录</Link>
            </li>
          )}

          {session && (
            <li>
              <Link href='/profile'>个人资料</Link>
            </li>
          )}

          <li>
            <button onClick={logoutHandler}>注销</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
