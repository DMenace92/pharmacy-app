import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Container,Card,Button} from 'reactstrap'
// import SearchBar from './SearchBar';


class MainPage extends Component {
// componentDidMount(){
  // this.props.meds()
// }
  render() {
    return ( 
      <div>
        <Container>
          {/* <SearchBar meds={this.props.medlist}/> */} 
        <Card>
          <h6>medication:</h6>
          <h6>quontity:</h6>
          <h6>directions:</h6>
        </Card>
        </Container>
        <Button><Link to="/medinfo">add med</Link></Button>

      </div>
    )
  }
}

export default MainPage