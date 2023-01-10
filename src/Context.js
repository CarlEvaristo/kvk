import React from "react"

const CompanyContext = React.createContext()

function CompanyContextProvider(props) {
    const [companies, setCompanies] = React.useState([])

    function companySetter(bedrijven) {
        setCompanies(bedrijven)
    }

    return (
        <CompanyContext.Provider value={{companies, companySetter}}>
            {props.children}
        </CompanyContext.Provider>
    )
}

export {CompanyContextProvider, CompanyContext}