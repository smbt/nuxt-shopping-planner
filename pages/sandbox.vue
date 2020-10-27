<template>
    <div>
        <h1>Sandbox</h1>
        <v-btn @click="askForNotificationPermission">Enable notifications</v-btn>
        <div v-if="users">
            <div v-for="user in users" :key="user.id">
                updated
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
import { fetchUsers } from '@/utils'
import user from '~/components/sandbox/user'

export default {
    data() {
        return {
            users: [],
        }
    },
    async created() {
        this.users = await fetchUsers()
    },
    methods: {
        askForNotificationPermission() {
            if (window.Notification) {
                Notification.requestPermission(result => {
                    if (result === 'granted') {
                        if (navigator.serviceWorker) {
                            console.log('navigator.serviceWorker.ready:', navigator.serviceWorker.ready)
                            navigator.serviceWorker.ready
                                .then(serviceWorkerRegistration => {
                                    console.log(serviceWorkerRegistration)
                                    serviceWorkerRegistration.showNotification('Notification from SW')
                                })
                        }
                        // new Notification('You are subscribed to notifications from this site.', {
                        //     body: 'Thanks.',
                        // })
                    } else {
                        console.log('Notification permission denied')
                    }
                })
            } else {
                console.log('Notifications not supported')
            }
        },
    },
    components: [user],
}
</script>