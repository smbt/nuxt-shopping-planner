import { getRandomListItem, getRandomListItems } from './listItemFactory'


describe('getRandomListItems:', () => {
    test('Returns correct number of items', () => {
        expect(getRandomListItems(2)).toHaveLength(2)
    })
})

describe('getRandomListeItem:', () => {
    test('Returns random object', () => {
        expect(getRandomListItem()).not.toBe(getRandomListItem())
    })

    test('Has product id', () => {
        expect(getRandomListItem().product).toHaveProperty('id')
    })
})