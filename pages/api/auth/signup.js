import { connectToDatabase } from '../../../lib/db'
import { hashPassword } from '../../../lib/auth'
async function handler(req, res) {
  const data = req.body

  const { email, password } = data

  if (!email || !email.includes('@') || !password || password.trim() === '') {
    res.status(422).json({ message: '无效输入-密码至少要7位数' })
    return
  }
  const hashedPassword = await hashPassword(password)
  const client = await connectToDatabase()
  const db = client.db()
  const result = await db
    .collection('users')
    .insertOne({ email: email, password: hashedPassword })
  client.close()

  res.status(201).json({ message: '用户注册成功！' })
}

export default handler
