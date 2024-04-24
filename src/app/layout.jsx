import React from 'react'
import './globals.css'
import Header from '@/components/header'
import Providers from './Providers'
import Tabs from '@/components/Tabs'

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Providers>
          <Header/>
          <Tabs/>
            {children}
          </Providers>
        </body>

    </html>
  )
}
export const metadata = {
  title: "MovieApp"
}
export default Layout