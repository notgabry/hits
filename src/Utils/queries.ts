import { AllowedQuery } from '../Types/type'

export const BadgeQueries: AllowedQuery[] = [
    {
        query: 'label',
        required: true
    },
    {
        query: 'message'
    },
    {
        query: 'color',
        required: true
    },
    {
        query: 'labelColor'
    },
    {
        query: 'logo'
    },
    {
        query: 'logoColor'
    },
    {
        query: 'style'
    }
]

export const GithubQueries: AllowedQuery[] = [
    {
        query: 'label',
        required: true
    },
    {
        query: 'message'
    },
    {
        query: 'color',
        required: true
    },
    {
        query: 'labelColor'
    },
    {
        query: 'logo'
    },
    {
        query: 'logoColor'
    },
    {
        query: 'style'
    },
    {
        query: 'user',
        required: true
    },
    {
        query: 'repository',
        required: true
    }
]
