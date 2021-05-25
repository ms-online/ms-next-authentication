import { connectToDatabase } from '../../../lib/db'
import { hashPassword } from '../../../lib/auth'
async function handler(req, res) {
  if (req.method !== 'POST') {
    return
  }
  const data = req.body

  const { email, password } = data
  console.log(email, password)

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: '无效输入-密码至少要7位数' })
    return
  }

  const client = await connectToDatabase()
  const db = client.db()

  //验证用户是否已经注册
  const existingUser = await db.collection('users').findOne({ email: email })
  if (existingUser) {
    res.status(422).json({ message: '用户已被注册！' })
    client.close()
    return
  }
  const hashedPassword = await hashPassword(password)
  //添加新用户到数据库
  const result = await db
    .collection('users')
    .insertOne({ email: email, password: hashedPassword })

  res.status(201).json({ message: '用户注册成功！' })
  client.close()
}

export default handler
