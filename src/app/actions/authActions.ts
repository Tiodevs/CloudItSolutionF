"use server";

import { cookies } from "next/headers";

// Credenciais fixas para simplificar o exemplo
// Em um ambiente real, isso viria de um banco de dados
const ADMIN_USERNAME = "comercial@cloudconsulting.com.br";
const ADMIN_PASSWORD = "Cloud@2024";
const AUTH_COOKIE_NAME = "auth_token";

export async function login(formData: { username: string; password: string }) {
  try {
    const { username, password } = formData;
    
    // Verificar credenciais
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Em um ambiente real, você geraria um token JWT
      // Por simplicidade, usaremos um token simulado
      const authToken = `${username}_${Date.now()}`;
      
      // Salvar o token nos cookies
      cookies().set({
        name: AUTH_COOKIE_NAME,
        value: authToken,
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 24 horas
      });
      
      return { success: true };
    }
    
    return { success: false, error: "Credenciais inválidas" };
  } catch (err: any) {
    console.error("Erro na autenticação:", err);
    return { success: false, error: "Erro ao processar login" };
  }
}

export async function logout() {
  try {
    cookies().delete(AUTH_COOKIE_NAME);
    return { success: true };
  } catch (err: any) {
    console.error("Erro ao fazer logout:", err);
    return { success: false, error: "Erro ao processar logout" };
  }
}

export async function isAuthenticated() {
  try {
    const authToken = cookies().get(AUTH_COOKIE_NAME)?.value;
    return !!authToken;
  } catch (err) {
    return false;
  }
} 