import type { NextApiRequest, NextApiResponse } from 'next'
import { browse } from '@/util/multiOn/queries' 
type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>

) {
    let multion = await browse()
    res.status(200).json({ message: multion })
}