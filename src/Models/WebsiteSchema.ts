import sequelize from '../Database/db'
import { DataTypes, Model } from 'sequelize'
import { Website } from '../Types/type'
import chalk from 'chalk'

const WebsiteSchema = sequelize.define<Model<Website>>(
    'website',
    {
        Hits: DataTypes.INTEGER,
        Domain: DataTypes.STRING
    },
    {
        timestamps: false
    }
)

sequelize.sync().then(() => {
    console.log(`${chalk.gray`[`}${chalk.green`Service`}${chalk.gray`]`} Table Sync`)
})

export default WebsiteSchema
