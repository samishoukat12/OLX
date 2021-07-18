import { Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Card, Row, Col } from "react-bootstrap"
import React from 'react'
export default function SellingAds() {
    return (
        <Container>
            <Typography variant="h4" style={{ marginTop: 40 }}>
                My Ads
            </Typography>
            <Container style={{marginTop:60}}>
                <Row>
                    <Col xl={4} lg={4}  md={4} sm={12} xs={12}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card></Col>
                </Row>
            </Container>
        </Container>
    )
}
