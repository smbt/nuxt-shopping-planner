import {state as _state} from '~/types/state'
import {listItem} from '~/types/listItem'

export const state = () => {
  return {shoppingList: []}
}

export const mutations = {
  crate(state: _state, listItem: listItem) {
    state.shoppingList.push(listItem)
  },
  update(state: _state, updatedListItem: listItem) {
    const index = state.shoppingList.findIndex(
      (oldListItem: listItem) => oldListItem.id === updatedListItem.id,
    )
    state.shoppingList.splice(index, 1, updatedListItem)
  },
  delete(state: _state, listItem: listItem) {
    state.shoppingList.splice(state.shoppingList.indexOf(listItem), 1)
  },
}
