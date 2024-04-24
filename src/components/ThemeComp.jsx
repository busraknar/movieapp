"use client"
import React, {useState, useEffect} from 'react'
import { MdDarkMode, MdOutlineDarkMode  } from "react-icons/md";
import { useTheme } from 'next-themes'

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
  const { systemTheme,theme, setTheme } = useTheme()

   // useEffect only runs on the client, so now we can safely show the UI
   useEffect(() => {
    setMounted(true)
  }, [])

    const  themeMode = theme === "system" ? systemTheme : theme

  return (
    <div>
        {
            mounted && (
                themeMode=== "dark" ?
                <MdOutlineDarkMode onClick={()=> setTheme('light')} className='cursor-pointer' size={25} /> :
                <MdDarkMode onClick={()=> setTheme('dark')}  className='cursor-pointer' size={25}/> 
                


            )
        }
        
    </div>
  )
}

export default ThemeComp