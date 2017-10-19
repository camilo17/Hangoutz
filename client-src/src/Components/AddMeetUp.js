import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 


class AddMeetUp extends Component {


    addNewHangout(meetup){
        axios.post('http://localhost:3000/api/hangoutzs', meetup)
            .then(response => {
                this.props.history.push('/'); 
            })
    }

    onSubmit(e) {
        e.preventDefault();

        const newHangout = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }

        this.addNewHangout(newHangout);
        

    }
  

  render(){
    return (
      <div>
        <br/>  
        <Link  className="btn grey"to="/">Back</Link>
        <h1 className="center">Add Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <input type="text" name="name" ref="name"/>
                <label htmlFor="name">Name</label>
            </div>    
            <div className="input-field">
                <input type="text" name="city" ref="city"/>
                <label htmlFor="city">City</label>
            </div>    
            <div className="input-field">
                <input type="text" name="address" ref="address"/>
                <label htmlFor="address">Address</label>
            </div>    
            <input type="submit" value="Save" className="btn"/>

        </form>
        

      </div>
    )
  }


}

  


export default AddMeetUp;