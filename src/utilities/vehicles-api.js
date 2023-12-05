import sendRequest from './send-request'

const BASE_URL = '/api/vehicles'

export function getAll() {
    return sendRequest(BASE_URL)
}
export function getVehiclesByModel(modelId) {
    return sendRequest(`${BASE_URL}/model/${modelId}`)
}
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}