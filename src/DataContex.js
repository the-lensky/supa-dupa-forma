import React, {createContext, useContext, useState} from 'react'

const DataContex = createContext()

export const DataProvider = ({children}) => {
    const [data, setData] = useState({})

    const setValues = (values) => {
        setData(prevState => ({
            ...prevState,
            ...values
        }))
    }


    return (
        <DataContex.Provider value={{data, setValues}}>
            {children}
        </DataContex.Provider>
    )
}

export const useData = () => useContext(DataContex)