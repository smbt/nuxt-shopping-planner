import axios from 'axios'

export const fetchUsers = async () => {
    let response = await axios
        .get('https://jsonplaceholder.typicode.com/users')
    return response.data
}
