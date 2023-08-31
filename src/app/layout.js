import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
// import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/context/Themecontext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blog Agencies',
  description: 'blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <ThemeProvider>
      <AuthProvider>

      <div className='container'>

      <Navbar/>
      {children}
      <Footer/>
      </div>
      </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
