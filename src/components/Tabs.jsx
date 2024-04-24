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
    <div className='p-5 my-3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>
      {
        tabs.map((tab, i)=> (
          <Link href={/?`genre=${tab.url}`}> {tab.name}</Link>
        ))

      }
    </div>
  )
}

export default Tabs