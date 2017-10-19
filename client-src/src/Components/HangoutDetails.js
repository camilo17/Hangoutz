import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 


class HangoutDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      details: {}
    }
  }


  async getInfo(){
    const response = await axios.get(`http://localhost:3000/api/hangoutzs/${this.props.match.params.id}`);
 
    this.setState({details: response.data})
  }

  componentWillMount(){
    this.getInfo();
  }

  render(){
    return (
      <div>
        <br/>  
        <Link  className="btn grey"to="/">Back</Link>  

        <div className="container">
            <h1>{this.state.details.name}</h1>
            <ul className="collection">
                <li className="collection-item">City: {this.state.details.city}</li>
                <li className="collection-item">Address: {this.state.details.address}</li>
                
                
            </ul>    
            <Link className="btn "to={`/hangoutz/edit/${this.state.details.id}`}>Edit</Link>

            <button className="btn red right">Delete</button>
        </div>

      </div>
    )
  }


}

  


export default HangoutDetails;