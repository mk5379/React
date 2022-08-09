import React from "react"

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.name}</h1>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <Title name = {this.user}/>
            </div>
        )
    }
}

class Mk extends React.Component {
    render() {
        return (
            <div>
                <Header user = "Hello World"/>
            </div>
        )
    }
}

export default Mk;