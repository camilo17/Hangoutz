import React , { Component }from 'react';
import {Link} from 'react-router-dom'; 



class HangoutItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={this.props.id} className="collection-item">
                {this.props.name} <Link  to={`/hangoutz/${this.props.id}`} className="right">Details...</Link>
            </li>    
        )
    }
}

export default HangoutItem;