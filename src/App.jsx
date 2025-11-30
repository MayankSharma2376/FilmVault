import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Movies from './Components/Movies'
import Watchlist from "./Components/Watchlist"
import Banner from './Components/Banner'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import js from '@eslint/js'


function App() {

  let [watchlist, setWatchlist] = useState([])

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist)
  }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })



    setWatchlist(filteredWatchlist)
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist))
    console.log(filteredWatchlist)


  }


  useEffect(() => {
    let moviesFromLocalStroage = localStorage.getItem("moviesApp")
    if (!moviesFromLocalStroage) {
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStroage))
  }, [])



  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<><Banner /> <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /> </>} />

          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlis={handleRemoveFromWatchlist} />} />


        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App