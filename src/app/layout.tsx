import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'P3X — Plataforma de Investimentos | Charles Mendlowicz',
  description:
    'Para quem cansou de não saber, no domingo à noite, quanto realmente tem investido. A P3X conecta sua conta da B3, organiza tudo o que você já tem e mostra o que fazer com o que falta.',
  openGraph: {
    title: 'P3X — Plataforma de Investimentos',
    description: 'Onde informação vira decisão e decisão vira renda.',
    url: 'https://comunidadep3x.com.br',
    siteName: 'P3X',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
