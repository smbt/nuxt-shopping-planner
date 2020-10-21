<template>
    <v-list-item @click="">
        <v-list-item-content @click="updateListItem" :class="{done: item.done}">
            <v-list-item-title v-html="item.amount + ' x ' + item.product.name"></v-list-item-title>
            <v-list-item-subtitle
                v-text="'Fällig: ' + moment(item.dueDate).format( 'DD.MM.YYYY, HH:mm:ss') + ' Uhr'">
            </v-list-item-subtitle>
        </v-list-item-content>
        <v-icon @click="deleteListItem">mdi-delete</v-icon>
    </v-list-item>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        item: Object,
    },
    methods: {
        moment,
        updateListItem() {
            this.$store.commit('update', { ...this.item, done: !this.item.done })
        },
        deleteListItem() {
            this.$store.commit('delete', this.item)
        },
    },
    computed: {
        dateDiff() {
            const now = moment()
            const dueDate = moment(this.item.dueDate)
            // const daysLeft = dueDate.diff(now, 'days')
            // const hoursLeft = dueDate.diff(now, 'hours')
            // const minutesLeft = dueDate.diff(now, 'minutes')
            const secondsLeft = dueDate.diff(now, 'seconds')
            return secondsLeft
        },
    },
}
</script>
<style>
.done {
    opacity: 0.3;
    text-decoration: line-through;
}
</style>