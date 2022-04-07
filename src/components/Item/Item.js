import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'

export default function Item({props}){

    return <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={props.url} className="itemImage" />
            <Card.Body>
            
            <Card.Text className="text-center">
                {props.description}
            </Card.Text>
            <div className="text-center">
                <Link to={`/detail/${props.id}`}><Button variant="primary">VER</Button></Link>
            </div>
                
            </Card.Body>
        </Card>
        
}

{/* <div className="item">
            <li>
                <h2>{props.id} - {props.tiltle}</h2>
                <img src={props.url} alt="" className="itemImage"></img>
                <Link to={`/detail/${props.id}`}><button className="btn btn-primary">VER</button></Link>
            </li>
        </div> */}