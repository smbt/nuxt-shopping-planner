import {product} from '~/types/product'

export interface listItem {
    product: product
    amount: number
    dueDate: string
    done: boolean
}
