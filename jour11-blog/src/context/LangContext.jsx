import {createContext , useState} from "react"

export const LangContext = createContext();

export function LangContextProvider({children}){
    const [lang, setLang] = useState("fr");
    const allLang = ["fr", "en"];
    return <LangContext.Provider value={{lang, setLang , allLang}}>
        {children}
    </LangContext.Provider>
}