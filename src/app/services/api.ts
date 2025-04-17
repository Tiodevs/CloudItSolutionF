import axios from "axios";

// Use a variável de ambiente ou o fallback para produção
const apiUrl = process.env.NEXT_PUBLIC_API || 'https://teste-nine-sandy.vercel.app/';

export const api = axios.create({
    baseURL: apiUrl
})

// Log para debugging (remover após resolver o problema)
console.log('API URL:', apiUrl);