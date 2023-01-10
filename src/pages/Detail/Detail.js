import React from 'react'
import { useParams } from "react-router-dom"
import { CompanyContext } from '../../Context'

export default function Detail() {
    const currItem = useParams().id
    const context = React.useContext(CompanyContext)

    let company = context.companies.filter(company => company.id === currItem)[0]

    return (
        <div className='container'>
        {company && 
            <ul>
                <li className='companyDetailItem'>
                    <img src={company.logo} alt="company-logo" className='companyLogo'/>
                    <h1>{company.name}</h1>
                </li>
                <li><h3>{`Adres:  ${company.streetName}, ${company.city}`}</h3></li>
            </ul> 
        }
        </div>
    )
}