import classes from './profile-form.module.css'
import { useRef } from 'react'

function ProfileForm(props) {
  const oldPasswordRef = useRef()
  const newPasswordRef = useRef()

  function submitHandler(event) {
    event.preventDefault()
    const enteredOldPassword = oldPasswordRef.current.value
    const enteredNewPassword = newPasswordRef.current.value

    //可选项：密码验证

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>新密码</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>旧密码</label>
        <input type='password' id='old-password' ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>修改密码</button>
      </div>
    </form>
  )
}

export default ProfileForm
