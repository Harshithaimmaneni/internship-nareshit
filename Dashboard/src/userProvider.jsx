export const UserProvider = ({children})=>{
    //global state
    let title ="Users"
  return(
    <userContext.Provider value={title}>
        {children}
    </userContext.Provider>
  )
}