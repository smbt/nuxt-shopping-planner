import {product} from './product'

export interface listItem {
  product: product
  amount: number
  dueDate: string
  done: boolean
}
