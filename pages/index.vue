<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <div class="text-center">
            </div>
            <v-list two-line>
                <v-subheader>Einkaufsliste</v-subheader>
                <v-list-item
                    v-for="item in shoppingList"
                    :key="item.product.name"
                    avatar
                    @click=""
                >
                    <v-list-item-avatar>
                        <img :src="item.avatar" :alt="item.product.name">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.product.name"></v-list-item-title>
                        <v-list-item-subtitle
                            v-text="'Fällig: ' + moment(item.dueDate).format( 'DD.MM.YYYY')"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn>Check</v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
import moment from 'moment'

export default {
    methods: {
        moment
    },
    computed: {
        shoppingList() {
            return this.$store.state.shoppingList
        },
        shoppingListPhotos() {
            return this.$store.state.shoppingList.map(() => {
            })
        }
    }
    ,
    components: {}
    ,
    mounted() {
        console.log(this.$store.state.shoppingList[0].dueDate)
        console.log(moment(this.$store.state.shoppingList[0].dueDate, 'MM-DD-YYYY'))
    }
}
</script>
