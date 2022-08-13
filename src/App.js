import React, { createRef } from "react";

const MyContext = React.createContext()

const App = props => {
    return (
        <MyContext.Provider value = {"Hello World!"} >
            <Nav/>
        </MyContext.Provider>
        
    )
}

const Nav = props => {
    return <Brand/>
}
const Brand = props => {
    return(
        <MyContext.Consumer>
            {value => <h1>{value}</h1>}
        </MyContext.Consumer>
    )
}

 //(or)

 //  const MyContext = React.createContext("Hello World!") 

 //  const App = props => {
 //     return <Nav/>
 // }
                        
 // const Nav = props => {
 //     return <Brand/>
 // }
 // const Brand = props => {
 //     const value = React.useContext(MyContext)
 //     return <h1>{value}
 // }

export default App;