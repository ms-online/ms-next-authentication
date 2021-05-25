import ProfileForm from './profile-form'
import classes from './user-profile.module.css'

function UserProfile() {
  // 如果不进行身份验证，实现重定向

  return (
    <section className={classes.profile}>
      <h1>用户详情页面</h1>
      <ProfileForm />
    </section>
  )
}

export default UserProfile
