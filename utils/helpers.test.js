import { helpers } from '@/utils/helpers'


// beforeAll(() => console.log('beforeAll ############################'))
// beforeEach(() => console.log('beforeEach ######'))
// afterEach(() => console.log('afterEach ######'))
// afterAll(() => console.log('afterAll ############################'))

describe('fetchUsers:', () => {
    test('returns something', async () => {
        expect(await helpers.fetchUsers())
            .toBeTruthy()
    })

    test('fetched user has property id', async () => {
        expect((await helpers.fetchUsers())[0])
            .toHaveProperty('id')
    })
})
