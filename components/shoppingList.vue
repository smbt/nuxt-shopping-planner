<template>
    <v-row justify="center" align="center" @keyup.enter="createItem">
        <v-col cols="12" sm="8" md="6">
            <v-list two-line>
                <v-subheader>Einkaufsliste</v-subheader>
                <v-list-item>
                    <v-expansion-panels accordion>
                        <v-expansion-panel>
                            <v-expansion-panel-header>Hinzufügen</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-row>
                                    <v-col cols="8" md="6">
                                        <v-text-field
                                            v-model="newItemProductName"
                                            :counter="20"
                                            label="Produkt"
                                            id="productNameInput"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="4" md="3">
                                        <v-text-field
                                            v-model="newItemAmount"
                                            label="Menge"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-btn @click="createItem" id="createItemInput">OK</v-btn>
                                    </v-col>
                                </v-row>
                                <v-row v-if="this.$store.state.debug">
                                    <v-btn @click="createRandom">Add 10 random</v-btn>
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-list-item>
                <div v-for="(item, index) in shoppingList"
                     :key="item.product.id">
                    <listItem :item="item" :key="index"></listItem>
                </div>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
// node modules
import { v4 as uuid } from 'uuid'
import moment from 'moment'

// components
import listItem from '~/components/listItem'
import { getRandomListItem } from '~/utils/listItemFactory'

export default {
    data() {
        return {
            newItemProductName: '',
            newItemAmount: 1,
            timeFrame: 'days',
        }
    },
    methods: {
        createItem() {
            if (!this.newItemProductName.trim()) return
            const newItem = {
                product: {
                    id: uuid(),
                    name: this.newItemProductName,
                },
                amount: this.newItemAmount,
                dueDate: moment().add(3, 'days').format(),
            }
            this.newItemProductName = ' '
            this.newItemAmount = 1
            this.$store.commit('create', newItem)
        }, createRandom() {
            for (let i = 0; i < 10; i++) {
                this.$store.commit('create', getRandomListItem())
            }
        },
    },
    computed: {
        shoppingList() {
            return this.$store.state.shoppingList
        },
    },
    components: { listItem },
}
</script>
