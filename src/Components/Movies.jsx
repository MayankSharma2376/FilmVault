import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import PageInit from './PageInit'

function Movies({handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist}) {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)


  const handlePrev = () => {
    if(pageNo === 1){
      setPageNo(1)
    }else{
      setPageNo(pageNo-1)
    }
    

  }

  const handleNext = () =>{
    setPageNo(pageNo+1)
  }
  


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ad8cc9947da00ce6d2832c33e4ff36c2&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      
    })
  }, [pageNo])


  return (
    <div>
      <div className='text-2xl font-bold text-center p-4 m-4'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around'>
      {movies.map((movieObj, index)=>{
        return <MovieCard key={index} movieObj={movieObj} poster_path={movieObj.poster_path} original_title={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
      })}
    
      
      </div>

      <PageInit pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default Movies


// https://api.themoviedb.org/3/movie/popular?api_key=ad8cc9947da00ce6d2832c33e4ff36c2&language=en-US&page=1