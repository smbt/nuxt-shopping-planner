// node modules
import createPersistedState from 'vuex-persistedstate';

// types
import { state as _state } from '~/types/state'
import { listItem } from '~/types/listItem'

// utils
import { getRandomListItems } from '~/utils/listItemFactory'

export const state = (): _state => {
    return {
        debug: false,
        shoppingList: [],
    }
}

export const mutations = {
    toggleDebug(state: _state) {
        state.debug = !state.debug
    },
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

export const plugins = [createPersistedState()]
