import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyList({companies}) {
  return (
    <>
        {  
            companies.length !== 0 ?
                <ul className='companylist'>
                    {companies.map(company => (
                        <Link to={`/companies/${company.id}`} key={company.id}>
                            <li className="listItem" >{company.name}</li>
                        </Link>
                        ))}
                </ul> :
                <img src="./images/loading-gif.gif" />
        }

    </>
  )
}
