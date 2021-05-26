import { getSession } from 'next-auth/client'
import { connectToDatabase } from '../../../lib/db'
import { hashPassword, verifyPassword } from '../../../lib/auth'
async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return
  }
  const session = await getSession({ req: req })
  //权限验证（保护API路由）
  if (!session) {
    res.status(401).json({ message: '没有权限' })
    return
  }

  //密码更替逻辑
  const userEmail = session.user.email
  const oldPassword = req.body.oldPassword
  const newPassword = req.body.newPassword

  const client = await connectToDatabase()
  const usersCollection = client.db().collection('users')

  const user = await usersCollection.findOne({ email: userEmail })

  if (!user) {
    res.status(404).json({ message: '用户不存在' })
    client.close()
    return
  }

  const currentPassword = user.password
  const passwordAreEqual = await verifyPassword(oldPassword, currentPassword)
  if (!passwordAreEqual) {
    res.status(403).json({ message: '旧密码无效' })
    client.close()
    return
  }

  const hashedPassword = await hashPassword(newPassword)
  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  )
  client.close()
  res.status(200).json({ message: '密码修改成功！' })
}

export default handler
