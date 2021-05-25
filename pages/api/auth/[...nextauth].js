import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { connectToDatabase } from '../../../lib/db'
import { verifyPassword } from '../../../lib/auth'

export default NextAuth({
  session: { jwt: true },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase()
        const usersCollection = client.db().collection('users')

        //验证用户是否存在
        const user = await usersCollection.findOne({ email: credentials.email })
        if (!user) {
          client.close()
          throw new Error('查找不到这个用户！')
        }
        //比较密码
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        )
        if (!isValid) {
          client.close()
          throw new Error('无法登录！')
        }

        client.close()
        return { email: user.email }
      },
    }),
  ],
})
