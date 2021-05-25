import { MongoClient } from 'mongodb'
export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://nextjs:nextjs123@msonline.menjs.mongodb.net/auth-demo?retryWrites=true&w=majority',
    { useUnifiedTopology: true }
  )
  return client
}
