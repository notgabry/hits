import { Sequelize } from 'sequelize'
import chalk from 'chalk'

const sequelize = new Sequelize(process.env.Postgres, {
    logging: (...msg) => console.log(`${chalk.gray`[Postgres] ${msg[0].substring(0, 100).trim()}${msg[0].length > 100 ? '...' : ''}`}`)
})

;(async () => {
    try {
        await sequelize.authenticate()
        console.log(`${chalk.gray`[`}${chalk.green`Service`}${chalk.gray`]`} Database OK`)
    } catch {
        console.log(`${chalk.gray`[`}${chalk.red`Service`}${chalk.gray`]`} Database KO`)
    }
})()

export default sequelize
