import React from 'react'
import Axios from "axios"
import CompanyList from '../../components/CompanyList/CompanyList'
import { CompanyContext } from '../../Context'
import Filter from '../../components/Filter/Filter'


export default function Home() {
    const context = React.useContext(CompanyContext)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [sort, setSort] = React.useState("dateDescending")

    function handleSort(event) {
        event.preventDefault()
        setSort(event.target.value)
        handleSubmit(event)
      }
     
    function handleChange(event) {
        setSearchQuery(event.target.value)
    }

    function handleKeyDown(event) {
        event.key === 'Enter' && handleSubmit(event)
    }

    function handleSubmit(event){
        event.preventDefault()

        let query 
        switch(sort) {
            case "dateAscending":
              query = "&sortBy=createdAt&order=asc"
              break;
            case "dateDescending":
              query = "&sortBy=createdAt&order=desc"
              break;
            case "zipAscending":
              query = "&sortBy=zipCode&order=asc"
              break;
            case "zipDescending":
              query = "&sortBy=zipCode&order=asc"
              break;
          }

        Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?search=${searchQuery}${query}`)
        .then(response => {
            context.companySetter(response.data.data)
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
                <input type="text" placeholder="Zoek Bedrijven" name="searchInput" onChange={handleChange} onKeyDown={handleKeyDown} />  
                <Filter sort={sort} handleSort={handleSort}/>
                <button>Zoeken</button>	
            </form>
            <CompanyList companies={context.companies}/>
        </div>
    )
}