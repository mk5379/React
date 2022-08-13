import React from "react";

//function component context form

// const MyContext = React.createContext("Hello World")

// const App = props => {
//     return (
//         <MyContext.Provider value = {"Hello World!"} >
//             <Nav/>
//         </MyContext.Provider>
        
//     )
// }

// const Nav = props => {
//     return <Brand/>
// }
// const Brand = props => {
//     return(
//         <MyContext.Consumer>
//             {value => <h1>{value}</h1>}
//         </MyContext.Consumer>
//     )
// }

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

 //class component context form

 const MyContext = React.createContext("Hello World")

 class App extends React.Component {
    render() {
        return <Nav/>
    }
 }

 class Nav extends React.Component {
    render() {
        return <Brand/>
    }
 }

 class Brand extends React.Component {
    static contextType = MyContext
    render() {
        return <h1>{this.context}</h1>
    }
 }

export default App;