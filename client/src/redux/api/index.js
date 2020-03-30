import axios from "axios"

const baseURL = "https://www.omdbapi.com/?apiKey=e8ca6290"

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers
})