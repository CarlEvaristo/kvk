import React from 'react'
import { useParams } from "react-router-dom"
import { CompanyContext } from '../../Context'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function Detail() {
    const id = useParams().id
    const context = React.useContext(CompanyContext)
    // const [details, setDetails] = React.useState()

    let company = context.companies.filter(company => company.id === id)[0]
    let dateString = company.createdAt
    let date = new Date(dateString);
    let alleenDatum = date.toISOString().split('T')[0];

    // Hieronder de code voor het laden van de extra informatie voor de detail pagina.
    // Ik heb dit  niet live gezet, omdat de api niet meer kon bereiken, "offline for maintenance".

    // React.useEffect(()=>{
    //     Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies/${id}/details`)
    //         .then(resp => console.log(resp.data))
    //         .catch(err => console.log(err))
    // },[])

    return (
        <main>
            <div className='detail'>
            {company && 
                <ul className='detailList'>
                    <li className='companyDetailItem'>
                        <img src={company.logo} alt="company-logo" className='companyLogo'/>
                        <h1 className='detailHeader'>{company.name}</h1>
                    </li>
                    <li className='detailItem'><h4>{`ID:  ${company.id}`}</h4></li>
                    <li className='detailItem'><h4>{`Adres:  ${company.streetName}, ${company.city}`}</h4></li>
                    <li className='detailItem'><h4>{`Postcode:  ${company.zipCode}`}</h4></li>
                    <li className='detailItem'><h4>{`Entry Datum:  ${alleenDatum}`}</h4></li>
    
                </ul> 
            }
            </div>
            <Link to="/" className="link"><i className="fa-solid fa-rotate-left"></i> Ga Terug</Link>
        </main>
    )
}