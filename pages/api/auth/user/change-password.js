import { getSession } from 'next-auth/client'
function handler(req, res) {
  if (req.method !== 'patch') {
    return
  }
  const session = getSession({ req: req })
  //权限验证（保护API路由）
  if (!session) {
    res.status(401).json({ message: '没有权限' })
    return
  }
}

export default handler
