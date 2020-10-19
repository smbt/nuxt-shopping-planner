// node modules
import { v4 as uuid } from 'uuid'
import moment from 'moment'

// types
import { listItem } from '~/types/listItem'

const getRandomArrayElement = (array: any[]) => {
    return array[Math.floor(Math.random() * array.length)]
}

export const getRandomListItem = (): listItem => {
    const productNames = ['Toast', 'Milch', 'Käse', 'Eier']
    const amounts = [1, 5, 7, 8]
    const timeFrames = ['seconds', 'minutes', 'hours', 'days', 'years']

    return {
        product: { id: uuid(), name: getRandomArrayElement(productNames) },
        amount: getRandomArrayElement(amounts),
        done: Math.random() > 0.5,
        dueDate: moment().add(5, getRandomArrayElement(timeFrames)).format(),
    }
}

export const getRandomListItems = (n: number): listItem[] => {
    let list = []
    for (let i = 1; i < n + 1; i++) {
        list.push(getRandomListItem())
    }
    return list
}