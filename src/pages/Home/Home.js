import React from 'react'
import Axios from "axios"
import CompanyList from '../../components/CompanyList/CompanyList'
import { CompanyContext } from '../../Context'
import Filter from '../../components/Filter/Filter'


export default function Home() {
    const context = React.useContext(CompanyContext)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [sort, setSort] = React.useState("idAscending")
    const [totalPages, setTotalPages] = React.useState()
    const [page, setPage] = React.useState(1)

    function handleSort(event) {
        event.preventDefault()
        setSort(event.target.value)
      }
     
    function handleChange(event) {
        setSearchQuery(event.target.value)
    }

    function handleKeyDown(event) {
        event.key === 'Enter' && handleSubmit(event)
    }

    function handleSubmit(){
        let query 
        switch(sort) {
            case "idDescending":
              query = "&sortBy=id&order=desc"
              break;
            default:
              query = "&sortBy=id&order=asc"
              break;
          }

        context.companySetter()
        Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?search=${searchQuery}${query}&page=${page}&limit=10`)
        .then(response => {
            setTotalPages(response.data.total)
            context.companySetter(response.data.data)
        })
        .catch(err => console.log(err))
    }

    React.useEffect(()=> {
        Axios.get(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?page=${page}&limit=10`)
            .then(res => {
                setTotalPages(res.data.total)
                context.companySetter(res.data.data)
            })
            .catch(err => console.log(err))
      },[])
    
        
    React.useEffect(()=>{
        handleSubmit()
    },[page, sort])

    function handleNext() {
        setPage(prev => prev+1)
    }
    
    function handlePrev() {
        setPage(prev => prev-1)
    }

    return (
        <div className='container'>
            <h2 className="">Bedrijven</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Zoek Bedrijven" name="searchInput" onChange={handleChange} onKeyDown={handleKeyDown} />  
                <Filter sort={sort} handleSort={handleSort}/>
                <button>Zoeken</button>	
            </form>
            <CompanyList companies={context.companies}/>
            <div className='pagination'>
                {page > 1 && <button onClick={handlePrev}>Vorige</button>}
                {page < totalPages && <button onClick={handleNext}>Volgende</button>}
            </div>
        </div>
    )
}