import React, { createRef } from "react";
import Users from "./User";

let App = (prpos) => {

    let [users,setUsers] = React.useState([
        {id : 1, user : "Phone Thet Naing", age : "19 Year old"},
        {id : 1, user : "Khant Zin Tun", age : "20 Year old"},
    ])

    let userRef = createRef();
    let ageRef = createRef();


    let plus = () => {
        let id = users.length + 1;
        let user = userRef.current.value;
        let age = ageRef.current.value;

        setUsers([
            ...users,
            {id,user,age}
        ])
    }

    return (
        <ul>
            {users.map(u => <Users key={u.id} user= {u.user} age ={u.age}/> )} <br></br>
            <input type = "text" ref={userRef} />
            <input type = "text" ref={ageRef} />
            <button onClick={plus} >Plus +</button>
        </ul>
    )
}

export default App;