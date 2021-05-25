import { getSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import ProfileForm from './profile-form'
import classes from './user-profile.module.css'

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(
  //   () =>
  //     getSession().then((session) => {
  //       if (!session) {
  //         window.location.href = '/auth'
  //       } else {
  //         setIsLoading(false)
  //       }
  //     }),
  //   []
  // )

  // if (isLoading) {
  //   return <p>loading...</p>
  // }
  return (
    <section className={classes.profile}>
      <h1>用户详情页面</h1>
      <ProfileForm />
    </section>
  )
}

export default UserProfile
