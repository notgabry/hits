import { Request, Response } from 'express'
import { GetHits } from '../Utils/data'
import { IsURL } from '../Utils/f'
import { CheckIfObject, CheckRequiredQueries, CheckValidQueries } from '../Utils/f'
import { BadgeQueries } from '../Utils/queries'

export default async (req: Request, res: Response): Promise<Response> => {
    if (!req.headers.origin) return res.status(400).json({ ok: false, message: 'Invalid Request' })
    if (!IsURL(req.headers.origin)) return
    const domain = `${new URL(req.headers.origin).hostname.replace('www.', '')}${new URL(req.headers.origin).pathname || ''}`

    if (!CheckIfObject(req.query)) return res.status(400).json({ ok: false, message: 'Invalid Query Options' })
    if (!CheckValidQueries(req.query, BadgeQueries)) return res.status(400).json({ ok: false, message: 'Invalid Query Options' })
    if (!CheckRequiredQueries(req.query, BadgeQueries)) return res.status(400).json({ ok: false, message: 'Required Queries Not Found.' })

    const hits = await GetHits(domain)

    const { label, message, color, labelColor, logo, logoColor, style } = req.query
    const url = `https://img.shields.io/badge/${String(label).replace('{{hits}}', String(hits))}${message ? `-${String(message).replace('{{hits}}', String(hits))}` : `-${color}`}${message ? `-${color}` : ''}?style=${style}&labelColor=${labelColor}&logo=${logo}&logoColor=${logoColor}`

    const f = await fetch(url)
    if (f.status != 200) return res.status(400).json({ ok: false, message: 'Invalid Params for shields.io' })

    res.setHeader('Content-type', 'image/svg+xml;charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.setHeader('Pragma', 'no-cache')
    res.setHeader('Expires', '0')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')

    res.send(await f.text())
}
