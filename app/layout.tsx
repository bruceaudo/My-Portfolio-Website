import Navbar from '@/components/Navbar'
import './globals.css'
import Bottom_navbar from '@/components/Bottom_navbar';


export const metadata = {
  title: "AudoLabs: Bruce Audo's Portfolio Website",
  description: 'Made with love by Bruce Audo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <html lang="en">
    <head>
      <link rel='icon' href='/favicon.svg' />
    </head>
      <body>
        <Navbar />
      {children}
      <Bottom_navbar />
      </body>
    </html>;
}
