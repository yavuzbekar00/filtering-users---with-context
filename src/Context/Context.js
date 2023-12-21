import { createContext, useEffect, useState } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [users, setUsers] = useState()
    const [value, setValue] = useState("")
    const [gender, setGender] = useState("all")

    const getUsers = () => {
        fetch("https://dummyjson.com/users")
            .then((data) => data.json())
            .then((user) => setUsers(user.users))
    }

    useEffect(() => {
        getUsers()
    }, [])

    const data = {
        users,
        value,
        setValue,
        gender,
        setGender
    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}
export {
    MainContext,
    MainContextProvider
}