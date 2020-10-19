<template>
    <v-list-item @click="">
        <v-list-item-content @click="updateListItem" :class="{done: item.done}">
            <v-list-item-title v-html="item.product.name"></v-list-item-title>
            <v-list-item-subtitle
                v-text="'Fällig: ' + moment(item.dueDate).format( 'DD.MM.YYYY')"></v-list-item-subtitle>
        </v-list-item-content>
        <v-icon @click="deleteListItem">mdi-delete</v-icon>
    </v-list-item>
</template>

<script>
import moment from "moment";

export default {
    props: {
        item: Object
    },
    methods: {
        moment,
        updateListItem() {
            this.$store.commit("update", {...this.item, done: !this.item.done})
        },
        deleteListItem() {
            this.$store.commit("delete", this.item)
        }
    },
}
</script>
<style>
.done {
    opacity: 0.3;
    text-decoration: line-through;
}
</style>