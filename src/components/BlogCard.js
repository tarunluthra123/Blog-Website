import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Link to={"/post/" + props.id}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}
