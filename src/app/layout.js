import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar';
import './globals.css'
import { Inter } from 'next/font/google'
import {ThemeProvider} from '../context/ThemeContex'
import AuthProvider from "../components/AuthProvider/AuthProvider"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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


