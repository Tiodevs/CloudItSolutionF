'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './admin.scss'
import { isAuthenticated, logout } from '../actions/authActions'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      try {
        const auth = await isAuthenticated()
        if (!auth) {
          router.push('/login')
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        router.push('/login')
      }
    }
    
    checkAuth()
  }, [router])

  async function handleLogout() {
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-loader"></div>
      </div>
    )
  }

  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <div className="admin-logo">
          <h2>Painel Admin</h2>
        </div>
        <ul className="admin-menu">
          <li className={pathname.includes('/adm/blogs') ? 'active' : ''}>
            <Link href="/adm/blogs">Blogs</Link>
          </li>
          <li className={pathname.includes('/adm/leads') ? 'active' : ''}>
            <Link href="/adm/leads">Leads</Link>
          </li>
          <li className="admin-logout">
            <button onClick={handleLogout}>Sair</button>
          </li>
        </ul>
      </nav>
      <div className="admin-content">
        {children}
      </div>
    </div>
  )
} 