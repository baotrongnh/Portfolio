import React, {createContext} from "react"

interface Information {
    fullName: string,
    firstName: string,
    email: string,
    phoneNumber: string,
    facebookLink: string,
    githubLink: string,
}

interface AppContextProps {
    myInformation: Information
}

const myInformation: Information = {
    fullName: 'Nguyen Huynh Bao Trong',
    firstName: 'Bao Trong',
    email: 'nhbaotrong@gmail.com',
    phoneNumber: '0332667829',
    githubLink: 'https://github.com/baotrongnh',
    facebookLink: 'https://www.facebook.com/baotrong.nguyenhuynh.52/'
}

export const AppContext = createContext<AppContextProps | null>(null)

export const AppProvider = ({children}: { children: React.ReactElement }) => {
    return (
        <AppContext.Provider value={{
            myInformation
        }}>
            {children}
        </AppContext.Provider>
    )
}