// node modules
import { mount } from '@vue/test-utils'

// components
import listItem from '@/components/listItem'

// utils
import { getRandomListItem } from '@/utils/listItemFactory'

describe('listItem', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(listItem, {
            propsData: {
                item: getRandomListItem(),
            },
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
