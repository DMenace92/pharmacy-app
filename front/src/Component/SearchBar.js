// import React, {Component} from 'react'
// import MainPage from './MainPage';
// // import {Contact} from "reactstrap"

// class SearchBar extends Component{
//     state={
//         search: ''
//     }
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         meds: []
//     //     };
//     // }
// updateSearch = (e) => {
//     this.setState({search: e.target.value})
// }
//     render(){
//         // console.log(this.props.meds);
        
//         let filteredMeds = this.props.meds.filter(
//             (meds)=>{
//                 return meds.medicine_name.toLowerCase().startsWith(this.state.search.toLowerCase())
//             }
//         );
//         console.log(!this.state.search);
        
//         return(
//         <div>
//         <input type="text"
//             value={this.state.search}
//             onChange={this.updateSearch}/>
//             <ul>
               
                
//                 {this.state.search !== '' && filteredMeds.map((meds)=>{
                    
//                     return <li key={meds.id}> {meds.medicine_name}</li>
                    
                        
                        
//                 })}
                
                
//             </ul>
           
            
//         </div>
        
//         )
//     }
// }
// export default SearchBar;






 