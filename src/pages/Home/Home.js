import React from 'react'
import Axios from "axios"
import CompanyList from '../../components/CompanyList/CompanyList'
import { CompanyContext } from '../../Context'
import Filter from '../../components/Filter/Filter'


export default function Home() {
    const context = React.useContext(CompanyContext)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [sort, setSort] = React.useState("nameAscending")
    const [totalCompanies, setTotalCompanies] = React.useState()
    const [page, setPage] = React.useState(1)

    function handleSort(event) {
        setSort(event.target.value)

        let query 
        switch(event.target.value) {
            case "nameDescending":
              query = "&sortBy=name&order=desc"
              break;
            default:
              query = "&sortBy=name&order=asc"
              break;
        }

        Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?search=${searchQuery}${query}&page=${page}&limit=10`)
            .then(response => {
                setTotalCompanies(response.data.total)
                context.companySetter(response.data.data)
            })
            .catch(err => console.log(err))
    }
     
    function handleChange(event) {
        setSearchQuery(event.target.value)
    }

    function handleSearch(e){
        e.preventDefault()
        Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?search=${searchQuery}&page=${page}&limit=10`)
        .then(response => {
            setTotalCompanies(response.data.total)
            context.companySetter(response.data.data)
        })
        .catch(err => console.log(err))
    }

    React.useEffect(()=> {
        Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?page=${page}&limit=10`)
            .then(res => {
                setTotalCompanies(res.data.total)
                context.companySetter(res.data.data)
            })
            .catch(err => console.log(err))
    },[page])
    
        
    function handleNext() {
        setPage(prev => prev+1)
    }
    
    function handlePrev() {
        setPage(prev => prev-1)
    }

    return (
        <div className='container'>
            <h2>Handelsregister Kompany</h2>
            <form>
                <input type="text" placeholder="Zoek Bedrijven" name="searchInput" onChange={handleChange} />  
                <span className='buttons'>
                    <Filter sort={sort} handleSort={handleSort} className="filter"/>
                    <button onClick={handleSearch}>Zoeken</button>	
                </span>
            </form>
            <CompanyList companies={context.companies}/>
            <div className='pagination'>
                {page > 1 && <button onClick={handlePrev}>Vorige</button>}
                {page < (totalCompanies/10) && <button onClick={handleNext}>Volgende</button>}
            </div>
        </div>
    )
}