// node modules
import createPersistedState from 'vuex-persistedstate'

export default ({ store }: any) => {
    createPersistedState({
        key: 'yourkey',
        paths: [],
    })(store)
}