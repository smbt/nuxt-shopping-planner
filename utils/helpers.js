import axios from 'axios'

export const helpers = {
    add(num1, num2) {
        return num1 + num2
    },
    async fetchUsers() {
        let response = await axios
            .get('https://jsonplaceholder.typicode.com/users')
        return response.data
    },
}