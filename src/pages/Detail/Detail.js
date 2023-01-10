import React from 'react'
import { useParams } from "react-router-dom"
import { CompanyContext } from '../../Context'
import { Link } from 'react-router-dom'

export default function Detail() {
    const currItem = useParams().id
    const context = React.useContext(CompanyContext)

    let company = context.companies.filter(company => company.id === currItem)[0]
    let dateString = company.createdAt
    let date = new Date(dateString);
    let alleenDatum = date.toISOString().split('T')[0];

    return (
        <main>
            <div className='detail'>
            {company && 
                <ul className='detailList'>
                    <li className='companyDetailItem'>
                        <img src={company.logo} alt="company-logo" className='companyLogo'/>
                        <h1>{company.name}</h1>
                    </li>
                    <li className='DetailItem'><h4>{`Adres:  ${company.streetName}, ${company.city}`}</h4></li>
                    <li className='DetailItem'><h4>{`Postcode:  ${company.zipCode}`}</h4></li>
                    <li className='DetailItem'><h4>{`Entry Datum:  ${alleenDatum}`}</h4></li>

                </ul> 
            }
            </div>
            <Link to="/" className="link" >Ga Terug</Link>
        </main>
    )
}