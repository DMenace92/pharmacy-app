import React, {Component} from 'react'
import {Button} from "reactstrap"

class SearchBar extends Component{
    render(){
        return(
            <div>
                
            <input className='inputSearch' placeholder="Search" onChange={this.props.MedSearch} />
            <Button>search</Button>
            </div>
        )
    }
}
export default SearchBar;