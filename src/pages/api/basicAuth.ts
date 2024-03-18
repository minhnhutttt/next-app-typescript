import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"')
  res.statusCode = 401
  res.end(`Auth Required.`)
}

export default handler
