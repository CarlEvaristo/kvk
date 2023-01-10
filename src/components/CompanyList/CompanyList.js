import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyList({companies}) {
  return (
    <>
        { !companies && <img src="./images/loading-gif.gif" className='loader'/>}
        {   companies &&
            (companies.length !== 0 ?
                <ul className='companylist'>
                    {companies.map(company => (
                        <Link to={`/companies/${company.id}`} key={company.id}>
                            <li className="listItem">{company.id} - {company.name}</li>
                        </Link>
                        ))}
                </ul> :
                <h3>Helaas geen bedrijven voor deze zoekopdracht gevonden.</h3>)
        }
    </>
  )
}
