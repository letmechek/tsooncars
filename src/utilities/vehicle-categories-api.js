import sendRequest from './send-request'

const BASE_URL = '/api/category/model'

export function getAll() {
    return sendRequest(BASE_URL)
}
