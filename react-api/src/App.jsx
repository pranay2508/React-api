// import { useState } from 'react'


import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResults } from './components/SearchResults'

function App() {
  

  return (
    <div className='App'>
    <div className='search-bar-container'>
    <SearchBar/>
      {/* <div>SearchResults</div> */}
      <SearchResults/>
      </div>

    </div>
  )
}

export default App
