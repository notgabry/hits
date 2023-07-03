import { Request, Response } from 'express'
import { CheckGitRepo, CheckGitUser, CheckIfObject, CheckRequiredQueries, CheckValidQueries } from '../Utils/f'
import { GithubQueries } from '../Utils/queries'
import { GetHits } from '../Utils/data'

export default async (req: Request, res: Response) => {
    if (!CheckIfObject(req.query)) return res.status(400).json({ ok: false, message: 'Invalid Query Options' })
    if (!CheckValidQueries(req.query, GithubQueries)) return res.status(400).json({ ok: false, message: 'Invalid Query Options' })
    if (!CheckRequiredQueries(req.query, GithubQueries)) return res.status(400).json({ ok: false, message: 'Required Queries Not Found.' })

    const { label, message, color, labelColor, logo, logoColor, style, user, repository } = req.query

    if (!(await CheckGitUser(user as string))) return res.status(400).json({ ok: false, message: 'Invalid GitHub User.' })
    if (!(await CheckGitRepo(user as string, repository as string))) return res.status(400).json({ ok: false, message: 'Invalid GitHub Repository.' })

    const hits = await GetHits(`github.com/${user}/${repository}`)
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
