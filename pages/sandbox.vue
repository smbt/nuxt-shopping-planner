<template>
    <div>
        <h1>Sandbox</h1>
    </div>
</template>
<script>
import { helpers } from '~/utils/helpers'

export default {
    mounted() {
        console.log('helpers.fetchUsers():', helpers.fetchUsers())

        const fn = async () => {

        }

        console.log('fn():',fn())
        console.log('2**3:',2**3)
    },
}
</script>