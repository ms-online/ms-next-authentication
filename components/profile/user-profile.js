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

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <section className={classes.profile}>
      <h1>用户详情页面</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  )
}

export default UserProfile
