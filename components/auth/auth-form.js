import { useState } from 'react'
import classes from './auth-form.module.css'

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? '登录' : '注册'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>邮箱</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>密码</label>
          <input type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? '登录' : '创建新账户'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? '创建新账户' : '使用现有帐户登录'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default AuthForm
