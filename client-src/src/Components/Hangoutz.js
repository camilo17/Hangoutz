import React, {Component} from 'react'; 
import axios from 'axios'; 
 

import HangoutItem from './HangoutItem'; 

class Hangoutz extends Component {
    constructor(){
        super();

        this.state = {
            meetups: []
        }
    }

    async getMeetups() {
        const response = await axios.get("http://localhost:3000/api/hangoutzs"); 
        this.setState({
            meetups: response.data
        })
    }

    componentWillMount() {
        this.getMeetups(); 
    }

    render() {
        const meetupItems = this.state.meetups.map((meetup, index) => {
            return (
                <HangoutItem
                    key={index}
                    name={meetup.name}
                    id={meetup.id}
                
                />
            )
        })



        return(
            <div>
                <h1>Hangoutz!</h1>
                <ul className="collection">
                    {meetupItems}
                </ul>
            </div>
        )
    }
}

export default Hangoutz; 