import Link from 'next/link'
import React from 'react'

const Tabs = () => {
    const tabs= [
        {
            name :"En Popüler",
            url : "popular"
        },
        {
          name :"En Yeni Yüklenenler",
          url : "latest"
      },
      {
        name :"Yakında Gelecek Olanlar",
        url : "upcoming"
    }
    ]
  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-7'>
      {
        tabs.map((tab,i)=>
        (
          <Link className='cursor-pointer hover:opacity-75 transition-opacity' href={`/?genre=${tab.url}`}> {tab.name}</Link>
        ))
       
      }
    </div>
  )
}

export default Tabs