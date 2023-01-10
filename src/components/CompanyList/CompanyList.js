import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyList({companies}) {
  return (
    <>
        {  companies ?
            <ul className='companylist'>
                {companies.map(company => (
                    <Link to={`/companies/${company.id}`} key={company.id}>
                        <li className="listItem" >{company.name}</li>
                    </Link>
                    ))}
            </ul> :
            <img className="loader" src="/images/loading-gif.gif" alt="loader" />

        }
    </>
  )
}
