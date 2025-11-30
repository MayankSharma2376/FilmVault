import React from 'react'
import Watchlist from './Watchlist'

function MovieCard({ movieObj, poster_path, original_title, handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist }) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true
      }
      
    }
    return false

  }
  return (

    <div className='h-[50vh] w-[200px] ml-2 mt-4 bg-center bg-cover rounded-xl hover:scale-110 duration-300 flex flex-col justify-between items-end' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }} >
      {doesContain(movieObj) ? (
        <div onClick={()=>handleRemoveFromWatchlist(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>&#x274C;</div>
      ) : (
        <div onClick={() =>handleAddtoWatchlist(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
          &#128525;
        </div>


      )}

      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
        {original_title}
      </div>
    </div>
  )
}

export default MovieCard 