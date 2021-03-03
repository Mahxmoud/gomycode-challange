import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Posts from './Posts';
function Users(props) {
    
    return (
        <div className='user-card'>
                {props.listOfUSer.map(user => <Card
                    key={user.id}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    bg={'dark'}
                    text={'white'}
                >
                    <Card.Header>{user.company.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>{user.company.catchPhrase}</Card.Text>
                        <Link params={{ userId: user.id }} path={`/users/:userId`} to={Posts}
                        ><Button onClick={null}>Posts</Button></Link>
                    </Card.Body>
                </Card>
                )}
        </div>
    )
}
export default Users;
