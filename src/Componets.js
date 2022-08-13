import React from "react"
import Main from "./Main";
import Menu from "./Menu";
import Add from "./Add";  
import "./cus/css/cus.css";
  
  
  class Apple extends React.Component {
    render() {
        let width = 110;
        let height = 50;
        const mk = {
            one : {
                backgroundColor : "black",
                color : "white"
            },

            two : {
                border : "1px solid #007bff",
                height : height-width,
                width : width,
                backgroundColor : "#dc2626",
                color: "white"
            }
        }
        return (
            <div>
                <Main>
                    <div className="background">
                        <h1 style={mk.one}>Hello React</h1>
                        <h3>Hello World</h3>
                        <p>I'm  Min Khant.</p>
                        <button className="btn">Click me</button>
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        <button className="btn btn-outline-primary">Send</button>
                    </div>

                </Main>
                <Menu>
                    <h3 style={mk.two}>Hello,I'm Min Khant.</h3>
                </Menu>
                <Add></Add>
            </div>
        )
    }
  }

export default Apple;