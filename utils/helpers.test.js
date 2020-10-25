import { fetchUsers } from '@/utils'

describe('fetchUsers:', () => {
    test('Returns something', async () => {
        const response = await fetchUsers()
        expect(response)
            .toBeTruthy()
    })

    test('Returns an array', async () => {
        const response = await fetchUsers()
        expect(Array.isArray(response))
            .toBeTruthy()
    })

    test('Fetched user has property \'id\'', async () => {
        const response = await fetchUsers()
        expect(response[0])
            .toHaveProperty('id')
    })
})
