import React from 'react'

export default function Filter({sort, handleSort}) {
  return (
    <>
        <select 
                className="sort"
                value={sort}		         
                onChange={handleSort}
                name="sort"> 
            <option value="nameAscending">Name Ascending</option>              
            <option value="nameDescending">Name Descending</option>  
        </select>
    </>
  )
}