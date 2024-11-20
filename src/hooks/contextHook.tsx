import {useContext} from "react"
import {AppContext} from "../contexts/AppContext.tsx";

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('AppContext cannot be null')
    }

    return context
}