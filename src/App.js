import React from 'react'
import {list} from './Data'
import UserList from './UserList'

const App = () => {
  return (
    <div>
      <UserList users={list}/>
    </div>
  )
}

export default App
