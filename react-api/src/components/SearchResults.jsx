
// import React from 'react'
import "./SearchResults.css"
import { Search } from "./Search";

export const SearchResultsList=({results}) =>{
  return (
    <div className="results-list">
      {
        
        results.map((result,id)=>{
          return <Search result={result} key={id}/>
        })
      }
    </div>
  )


};