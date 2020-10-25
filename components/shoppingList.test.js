// node modules
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

// components
import shoppingList from '@/components/shoppingList'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('shoppingList', () => {
    let mutations
    let store

    beforeEach(() => {
        mutations = {
            toggleDebug: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        }
        store = new Vuex.Store({
            mutations,
        })
    })

    test('is a Vue instance', () => {
        const wrapper = shallowMount(shoppingList, { store, localVue })
        expect(wrapper.vm).toBeTruthy()
    })

    test('create works', async () => {
        const wrapper = shallowMount(shoppingList, { store, localVue })

        await wrapper.setData({ newItemProductName: 'Testproduct' })
        wrapper.find('#createItemInput').trigger('click')

        expect(mutations.create).toHaveBeenCalled()
    })
})