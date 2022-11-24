import React, { useEffect, useState } from "react";
import {useQuery, gql} from '@apollo/client'
import { LOAD_USERS } from "../GraphQL/Queries";
import { SettingsBackupRestoreSharp } from "@material-ui/icons";

function GetUsers() {
    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])
    useEffect(() => {
        if(data){
            setUsers(data.getAllUsers)
        }
        // console.log(data)
    }, [data])
    return (
        <>
        <table>
      
      <tr>
        <td><b>Name</b></td>
        <td><b>Email</b></td>
        <td><b>Password</b></td>
      </tr>
      {users.map((value,idx) => {
        return (
          <tr key={value.id}>
            <td>{value.name}</td>
            <td> {value.email}</td>
            <td> {value.password}</td>
          </tr>
        );
      })}
    </table>
        </>
    )
}

export default GetUsers