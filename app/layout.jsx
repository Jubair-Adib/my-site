export const metadata = {
  title: 'Salami Secret Gate',
  description: 'A cute website with childhood memories',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
