import {product} from '~/types/product'

export interface listItem {
  id: string
  product: product
  amount: number
  dueDate: string
  done: boolean
}
