import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 


class EditHangout extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            city: '',
            address: '',
            id: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this); 
    }


    async getHangoutDetails() {

        const details = await axios.get(`http://localhost:3000/api/hangoutzs/${this.props.match.params.id}`);
        this.setState({
            name: details.data.name,
            city: details.data.city,
            address: details.data.address,
            id: details.data.id

        })
    }

    componentWillMount(){
        this.getHangoutDetails(); 
    }

    async editHangout(updatedInfo) {
        const response = await axios.put(`http://localhost:3000/api/hangoutzs/${this.state.id}`, updatedInfo); 
        
        this.props.history.push('/'); 
    }

    onSubmit(e) {
        e.preventDefault(); 

        const updatedMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }

        this.editHangout(updatedMeetup); 
    }

    handleInputChange(e) {
        

        const target = e.target;
        const value = target.value; 
        const name = target.name; 

        this.setState({
            [name]: value
        }); 


    }
    
  

  render(){
    return (
      <div>
        <br/>  
        <Link  className="btn grey"to="/">Back</Link>
        <h1 className="center">Edit Hangout</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange}/>
                <label htmlFor="name">Name</label>
            </div>    
            <div className="input-field">
                <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange}/>
                <label htmlFor="city">City</label>
            </div>    
            <div className="input-field">
                <input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange}/>
                <label htmlFor="address">Address</label>
            </div>    
            <input type="submit" value="Save" className="btn"/>

        </form>
        

      </div>
    )
  }


}

  


export default EditHangout;