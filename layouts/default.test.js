// node modules
import {  createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

// components
import layout from '@/layouts/default'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('layout', () => {
    let mutations
    let store

    beforeEach(() => {
        mutations = {
            toggleDebug: jest.fn(),
        }
        store = new Vuex.Store({
            mutations,
        })
    })

    test('is a Vue instance', () => {
        const wrapper = shallowMount(layout, { store, localVue })
        expect(wrapper.vm).toBeTruthy()
    })
    test('toggles debug when toggler is clicked', async () => {
        const wrapper = shallowMount(layout, { store, localVue })

        const toggler = wrapper.find('#debugToggler')
        toggler.trigger('click')
        expect(mutations.toggleDebug).toHaveBeenCalled()
    })
})
