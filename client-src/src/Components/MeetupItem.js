import React , { Component }from 'react';
import {Link} from 'react-router-dom'; 



class MeetupItem extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li key={this.props.index} className="collection-item">
                {this.props.name} <Link  to={`http://localhost:3000/api/hangoutzs/${this.props.id}`} className="right">Details...</Link>
            </li>    
        )
    }
}

export default MeetupItem; 