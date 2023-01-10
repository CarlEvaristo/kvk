import React from 'react'

export default function Filter({sort, handleSort}) {
  return (
    <>
        <select 
                className="sort"
                value={sort}		         
                onChange={handleSort}
                name="sort"> 
            <option value="dateAscending">Date Ascending</option>  
            <option value="dateDescending">Date Descending</option>              
            <option value="zipAscending">Zip Ascending</option>           
            <option value="zipDescending">Zip Descending</option>      
        </select>
    </>
  )
}