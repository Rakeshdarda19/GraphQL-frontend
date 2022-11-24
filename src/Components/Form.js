import React, { useState } from "react";
import {CREATE_USER_MUTATION} from '../GraphQL/Mutations'
import {useMutation} from '@apollo/client' 

function Form(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const[createUser, {error}] = useMutation(CREATE_USER_MUTATION)

    const addUser = () => {
        createUser({
            variables: {
                name : name,
                email : email,
                password : password
            }
        })
        if(error){
            console.log(error)
        }
    }


    return (
        <>
          <div>
             <input
                type="text"
                placeholder="name"
                onChange={(e) => {
                    setName(e.target.value)
                }}
              />
              <input
                type="text"
                placeholder="email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
              />
              <input
                type="text"
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
              />
              <button onClick={addUser}>
                Add User
              </button>
          </div> 
        </>
    )
}

export default Form