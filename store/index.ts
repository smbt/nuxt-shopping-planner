// node modules
import {v4 as uuid} from 'uuid'
import moment from 'moment'

// types
import {state as _state} from '~/types/state'
import {listItem} from '~/types/listItem'

export const state = (): _state => {
    return {
        shoppingList: [
            {
                product: {id: uuid(), name: "Toast"},
                amount: 3,
                done: false,
                dueDate: moment().add(7, 'days').format()
            },
            {
                product: {id: uuid(), name: "Milch"},
                amount: 3,
                done: false,
                dueDate: moment().format()
            }
        ]
    }
}

export const mutations = {
    create(state: _state, listItem: listItem) {
        state.shoppingList.unshift(listItem)
    },
    update(state: _state, updatedListItem: listItem) {
        const index = state.shoppingList.findIndex(
            (oldListItem: listItem) => oldListItem.product.id === updatedListItem.product.id,
        )
        state.shoppingList.splice(index, 1, updatedListItem)
    },
    delete(state: _state, listItem: listItem) {
        state.shoppingList.splice(state.shoppingList.indexOf(listItem), 1)
    },
}
