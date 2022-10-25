import React from 'react'
import {Card} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = ({user}) => {
  return (
    <div className='cards'>
      <Card>
      <Card.Header className='cardHeader'> {user.name} </Card.Header>
      <Card.Body>
        <div style={{textAlign:"center"}}>
            <Card.Title className='cardTitle'>{user.username}</Card.Title>
            <Card.Title style={{color:"red"}}>ID : {user.id} </Card.Title>
        </div>
        <Card.Text>
          Here's my email : <strong>"{user.email}"</strong>, my address is {user.address.street}, {user.address.suite} in {user.address.city} - {user.address.zipcode} and to be exact here's 
        <ul>
            <li>
                Latitude {user.address.geo.lat}
            </li>
            <li>
                Longitude {user.address.geo.lng}
            </li>
        </ul> 
        <hr/>
        I'm an employer at {user.company.name}, that it has one of the cooloest catch phrases : <strong>"{user.company.catchPhrase}"</strong>, and our services are : 
        <ul>
            <li>
            {user.company.bs}
            </li>
        </ul>
        </Card.Text>
        {/* <div>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button
            </button>
        </div> */}

      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
