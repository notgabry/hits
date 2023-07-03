import { AllowedQuery } from '../Types/type'

export const CheckIfObject = (obj: Object | Record<string, string>) => {
    return !(Object.keys(obj).length == 0 && obj.constructor)
}

export const CheckValidQueries = (obj: Record<string, unknown>, dict: AllowedQuery[]): boolean => {
    for (const v of Object.keys(obj)) {
        if (!dict.find((x) => x.query == v)) return false
    }
    return true
}

export const CheckRequiredQueries = (obj: Record<string, unknown>, dict: AllowedQuery[]): boolean => {
    const required = dict.filter((x) => x.required)
    return required.every((x) => Object.keys(obj).includes(x.query))
}

export const CheckGitUser = async (user: string): Promise<boolean> => {
    const req = await fetch(`https://api.github.com/users/${user}`)
    if (req.status != 200) return false
    else return true
}

export const CheckGitRepo = async (user: string, repository: string): Promise<boolean> => {
    const req = await fetch(`https://api.github.com/users/${user}/repos`).then((r) => r.json())
    for (const r of req) {
        if (r.name == repository) return true
    }
    return false
}

export const IsURL = (str: string) => {
    return /^(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/\S*)?(\?\S*)?$/.test(str)
}
