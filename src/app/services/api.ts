import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API

export const api = axios.create({
    baseURL: apiUrl
})

// Log para debugging (remover após resolver o problema)
console.log('API URL:', apiUrl);