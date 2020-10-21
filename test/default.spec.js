// node modules
import { mount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import { cloneDeep } from 'lodash'

// components
import layout from '~/layouts/default'

// store
// import { state, mutations } from '@/store'

const wrapper = mount(layout)
// const localVue = createLocalVue()
// const store = new Vuex.Store(cloneDeep({ state, mutations }))
// localVue.use(Vuex)

describe('layout', () => {
    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
    test('toggles debug when toggler is clicked', async () => {
        // const toggler = wrapper.find('input#debug-toggler')
        // await expect(toggler.trigger('click'))
    })
})
