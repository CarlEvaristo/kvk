import React from 'react'
import Axios from "axios"
import CompanyList from '../../components/CompanyList/CompanyList'
import { CompanyContext } from '../../Context'

export default function Home() {
    const context = React.useContext(CompanyContext)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [error, setError] = React.useState(false)

    function handleChange(event) {
        setSearchQuery(event.target.searchInput)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(searchQuery)
        Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?search=${searchQuery}`)
        .then(response => {
            response.data.data.length === 0 && setError(true)   
            context.companySetter()
        })
        .catch(err => console.log(err))
    }

    React.useEffect(()=> {
        Axios.get("https://617c09aad842cf001711c200.mockapi.io/v1/companies")
            .then(res => context.companySetter(res.data.data))
            .catch(err => console.log(err))
      },[])


    return (
        <div className='container'>
            <h2 className="">Bedrijven</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Line 1" name="searchInput" onChange={handleChange}  />  
                <button>Zoeken</button>	
            </form>
            {error && <h3>Helaas geen bedrijven gevonden obv deze zoekopdracht.</h3>}
            <CompanyList companies={context.companies}/>
        </div>
    )
}