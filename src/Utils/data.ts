import WebsiteSchema from '../Models/WebsiteSchema'

export const GetHits = async (domain: string): Promise<number> => {
    const data = await WebsiteSchema.findOne({
        where: {
            Domain: domain
        }
    })

    if (!data) {
        await WebsiteSchema.create({
            Domain: domain,
            Hits: 1
        })
        return 1
    } else {
        await data.update({ Hits: data.dataValues.Hits + 1 })
        return data.dataValues.Hits
    }
}
