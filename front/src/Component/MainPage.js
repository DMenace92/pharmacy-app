import React, { Component } from 'react'

import { Container,Button,Card} from 'reactstrap'


class MainPage extends Component {

componentDidMount(){
  this.props.meds()
}
  render() {

    
    return (
      <div>
        <Container>
          <Button href="/SearchBar">go to search</Button>
          hello
        <Card>
          <h6>medication:</h6>
          <h6>quontity:</h6>
          <h6>directions:</h6>

        </Card>
          
        </Container>
      </div>
    )
  }
}

export default MainPage