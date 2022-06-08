import axios from "https://cdn.skypack.dev/axios"

const endpoint = "http://localhost:50000"

const endpointUnit = `${endpoint}/unit`
const endpointItem = `${endpoint}/item`
const endpointReceipt = `${endpoint}/receipt`
const endpointPos = `${endpoint}/pos`

export async function getUnitsList() {
    return await axios.get(`${endpointUnit}/findAll`).then(response => response.data)
}

export async function addUnit(addValue) {
    return await axios.post(`${endpointUnit}/create`, {name: addValue}).then(response => response.data)
}

export async function editUnit(id, editValue) {
    return await axios.put(`${endpointUnit}/update?id=${id}`, {name: editValue}).then(response => response.data)
}

export async function deleteUnit(id) {
    return await axios.delete(`${endpointUnit}/delete?id=${id}`).then(response => response.data)
}