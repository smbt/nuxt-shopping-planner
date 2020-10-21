// node modules
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'

// components
import shoppingList from '~/components/shoppingList'

describe('shoppingList', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(shoppingList, {})
        expect(wrapper.vm).toBeTruthy()
    })
})