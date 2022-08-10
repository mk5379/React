import React from "react"

class Main extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
  }
  
  class Menu extends React.Component {
    render() {
        return (
            <div>
               {this.props.children} 
            </div>
        )
    }
  }
  
  class Apple extends React.Component {
    render() {
        return (
            <div>
                <Main>
                    <h1 style={{background : 'blue',color : 'white',padding : 10}}>Hello React</h1>
                </Main>
                <Menu>
                    <h3>Hello,I'm Min Khant.</h3>
                </Menu>
            </div>
        )
    }
  }

export default Apple;