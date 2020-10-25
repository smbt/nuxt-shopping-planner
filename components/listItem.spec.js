// node modules
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

// components
import listItem from '~/components/listItem'

// utils
import { getRandomListItem } from '~/utils'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('listItem', () => {
    let store
    let mutations

    beforeEach(() => {
        mutations = {
            delete: jest.fn(),
        }

        store = new Vuex.Store({
            mutations,
            props: {
                item: getRandomListItem(),
            },
        })
    })


    test('is a Vue instance', () => {
        const wrapper = shallowMount(listItem, {
            propsData: {
                item: getRandomListItem(),
            },
        })
        expect(wrapper.vm).toBeTruthy()
    })

    // test('can delete an item', () => {
    //     const wrapper =shallowMount(listItem, {
    //
    //     })
    // })
})
