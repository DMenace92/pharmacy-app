import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Row } from 'reactstrap'


class MainPage extends Component {


  render() {
   
    
    return (
      <div>
        <Container>
          <Row>
            <h1>Home Page</h1>
          </Row>
          <Row>
            <h2>Following</h2>
            {/* Comic selector */}
          </Row>
          <Row>            
            <h2>Explore</h2>
            {/* Comic selector */}
          </Row>
        </Container>
      </div>
    )
  }
}

export default MainPage