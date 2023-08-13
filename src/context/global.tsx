import React, { createContext, ReactNode } from "react"
interface GlobalContextProps {
}

const ctx = createContext<GlobalContextProps>({} as GlobalContextProps)

export const GlobalCtxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ctx.Provider value={{
  }}>
    {children}
  </ctx.Provider>
}

export default ctx
