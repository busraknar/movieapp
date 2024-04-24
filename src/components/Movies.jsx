"use client"
import Image from 'next/image'
import React from 'react'

const Movies = (dt) => {
  return (
    <div className='w-[400px] h-[300px]'>
        <Image width={400} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/>
    </div>
  )
}

export default Movies