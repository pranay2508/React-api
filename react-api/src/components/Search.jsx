// import React from 'react'
import "./Search.css";
export const Search = ({result}) => {
  return (
    
  <div className="search-result" onClick={(e) => alert("You clicked on ${result}")}>{result.name}</div>
    
  )
}
