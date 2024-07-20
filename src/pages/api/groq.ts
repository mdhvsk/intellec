import type { NextApiRequest, NextApiResponse } from 'next'
import { main } from '@/util/groq/queries'
type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>

) {
    let groq = await main()
    res.status(200).json({ message: groq })
}