import React from 'react'   /*rafce */
import fetch from 'node-fetch';
import Movies from '@/components/Movies';

const Page = async(searchParams) => {

 /* const res = await fetch(`https://developer.themoviedb.org/reference/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}
  ? `) 44*/


const url = `https://api.themoviedb.org/3/movie/${searchParams.genre}?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmJiYmIxODMwMjljMzg3ZTU4NTViNzA4YTI3NzRmOSIsInN1YiI6IjY2MjQ1YTQ3N2E5N2FiMDE3ZDhjZTY5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RxySz67YxS3grfQFD8w_03mfED6CbDexsF6wprtxmE'
  }
};    

const res = await fetch(url, options)
const data = await res.json();
 
  return (
   
         <div className='flex items-center justify-center flex-wrap gap-3'>
              {
                data?.results?.map((dt,i)=>(
                  <Movies key={i} dt={dt}></Movies>
                ))
              }
         </div>
    
  )
}

export default Page