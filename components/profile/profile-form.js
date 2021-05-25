import classes from './profile-form.module.css'

function ProfileForm() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>新密码</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>旧密码</label>
        <input type='password' id='old-password' />
      </div>
      <div className={classes.action}>
        <button>修改密码</button>
      </div>
    </form>
  )
}

export default ProfileForm
