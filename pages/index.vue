<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <div class="text-center">
            </div>
            <v-list two-line>
                <v-subheader>Einkaufsliste</v-subheader>
                <div v-for="(item, index) in shoppingList"
                     :key="item.product.name">
                    <listItem :item="item" :key="index"></listItem>
                </div>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
import listItem from "~/components/listItem";

export default {
    computed: {
        shoppingList() {
            return this.$store.state.shoppingList
        }
    },
    components: {listItem},
}
</script>
