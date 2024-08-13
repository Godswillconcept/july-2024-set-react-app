import React, { useContext } from 'react'
import ComponentA from '../components/ComponentA'
import UserForm from '../components/UserForm'
import { UserContext } from '../contexts/userContext'

function Facilities() {
  const {user} = useContext(UserContext);
  return (
    <div>Facilities
    <ComponentA />
    <hr/>
    <UserForm />
    <h2>Hello {user.name}!</h2>
    </div>
  )
}

export default Facilities