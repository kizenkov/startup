import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export const Api = {
    getUserApi(name) {
        return instance.get(`${name}`)
    },
    getReposApi(name, page = 1, per_page = 4) {
        return instance.get(`${name}/repos?page=${page}&per_page=${per_page}`)
    }
}