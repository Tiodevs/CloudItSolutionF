'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './page.module.scss'
import { login } from '../actions/authActions'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!username || !password) {
      setError('Preencha todos os campos')
      return
    }
    
    try {
      setIsLoading(true)
      setError('')
      
      const result = await login({ username, password })
      
      if (result.success) {
        router.push('/adm/leads')
      } else {
        setError(result.error || 'Falha na autenticação')
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err)
      setError('Ocorreu um erro ao processar o login')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h1>Painel Administrativo</h1>
          <p>Entre com suas credenciais para acessar</p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          {error && <div className={styles.errorMessage}>{error}</div>}
          
          <div className={styles.formGroup}>
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              disabled={isLoading}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              disabled={isLoading}
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <div className={styles.loginFooter}>
          <p>
            <Link href="/">Voltar para o site</Link>
          </p>
        </div>
      </div>
    </div>
  )
} 