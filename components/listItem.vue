<template>
    <v-list-item @click="updateListItem" :class="{done: item.done}">
        <v-list-item-content>
            <v-list-item-title v-html="item.product.name"></v-list-item-title>
            <v-list-item-subtitle
                v-text="'Fällig: ' + moment(item.dueDate).format( 'DD.MM.YYYY')"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
            <v-checkbox :value="item.done"></v-checkbox>
        </v-list-item-action>
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
        }
    },
}
</script>
<style>
.done {
    opacity: 0.3;
}
</style>