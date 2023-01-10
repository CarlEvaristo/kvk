import React from 'react'

export default function Filter({sort, handleSort}) {
  return (
    <>
        <select 
                className="sort"
                value={sort}		         
                onChange={handleSort}
                name="sort"> 
            <option value="idAscending">ID Ascending</option>              
            <option value="idDescending">ID Descending</option>  
        </select>
    </>
  )
}