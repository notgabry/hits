import 'dotenv/config'
import './Database/db'
import Express from 'express'
import slash from './Routes/slash'
import chalk from 'chalk'
import badge from './Routes/badge'
import github from './Routes/github'

const app = Express()

app.get('/', slash)
app.get('/badge', badge)
app.get('/github', github)
app.use(slash)

app.listen(process.env['PORT'], () => {
    console.log(`${chalk.gray`[`}${chalk.green`Service`}${chalk.gray`]`} Server OK`)
})
