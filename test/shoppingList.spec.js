// node modules
import { mount } from '@vue/test-utils'

// components
import shoppingList from '~/components/shoppingList'

// utils
import { getRandomListItem } from '~/utils/listItemFactory'

describe('shoppingList', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(shoppingList, {})
        expect(wrapper.vm).toBeTruthy()
    })
})
