import './globals.scss'
import { Metadata } from 'next'
import { WhatsAppButton } from './components/WhatsAppButton'
import { AdminButton } from './components/AdminButton'

export const metadata: Metadata = {
  title: 'Cloud IT Solutions',
  description: 'Cloud IT Solutions é uma provedora de soluções de Tecnologia da Informação, especializada em consultoria SAP e serviços relacionados à transformação digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <WhatsAppButton />
        <AdminButton />
      </body>
    </html>
  )
}
