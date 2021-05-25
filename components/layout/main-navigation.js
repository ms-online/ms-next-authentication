import Link from 'next/link'

import classes from './main-navigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>Next 身份验证</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/auth'>登录</Link>
          </li>
          <li>
            <Link href='/profile'>个人资料</Link>
          </li>
          <li>
            <button>注销</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
