import type { NextApiRequest, NextApiResponse } from 'next'
import { main } from '@/util/groq/queries'
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    
  res.status(200).json({ message: 'Hello from Next.js!' })
}