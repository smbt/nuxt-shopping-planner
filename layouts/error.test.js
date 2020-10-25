// node modules
import { mount } from '@vue/test-utils'

// components
import error from '@/layouts/error'

describe('error', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(error, {
            propsData: {
                error: {
                    statusCode: 404
                }
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })
})
