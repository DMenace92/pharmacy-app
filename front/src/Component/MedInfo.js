import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MedInfo extends Component{
  render(){
    return(
      <div>
      <Form>
        <FormGroup>
          <Label for="Medication name">Medication name</Label>
          <Input type="" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="Medication name">Medication name</Label>
          <Input type="" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="Medication name">Medication name</Label>
          <Input type="" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="Medication name">Medication name</Label>
          <Input type="" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
       
       
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
       
        
       
        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}
export default MedInfo; 