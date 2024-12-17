import './globals.css'

export const metadata = {
  title: 'Professor Card Game',
  description: 'Create professor trading cards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
