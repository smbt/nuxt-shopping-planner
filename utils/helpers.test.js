import { helpers } from '@/utils/helpers'


// beforeAll(() => console.log('beforeAll ############################'))
// beforeEach(() => console.log('beforeEach ######'))
// afterEach(() => console.log('afterEach ######'))
// afterAll(() => console.log('afterAll ############################'))

describe('fetchUsers:', () => {
    test('Returns something', async () => {
        const response = await helpers.fetchUsers()
        expect(response)
            .toBeTruthy()
    })

    test('Returns an array', async () => {
        const response = await helpers.fetchUsers()
        expect(Array.isArray(response))
            .toBeTruthy()
    })

    test('Fetched user has property \'id\'', async () => {
        const response = await helpers.fetchUsers()
        expect(response[0])
            .toHaveProperty('id')
    })
})
