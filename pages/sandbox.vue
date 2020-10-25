<template>
    <div>
        <h1>Sandbox</h1>
        <div v-if="users">
            <div v-for="user in users" :key="user.id">
                test
            </div>
        </div>
        <v-skeleton-loader height="10" width="40" />
        <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
        ></v-skeleton-loader>
    </div>
</template>
<script>
import { helpers } from '~/utils/helpers'
import user from '~/components/sandbox/user'

export default {
    data() {
        return {
            users: [],
        }
    },
    async created() {
        this.users = await helpers.fetchUsers()
    },
    components: [user],
}
</script>