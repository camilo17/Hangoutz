import React , {Component} from 'react';
import axios from 'axios';



class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: {}
    }
  }


  async getInfo(){
    const response = await axios.get(`http://localhost:3000/api/hangoutzs/${this.props.match.params.id}`);
    console.log(response);
    this.setState({info: response.data})
  }

  componentWillMount(){
    this.getInfo();
  }

  render(){
    return (
      <div>
        {this.state.info.name}

      </div>
    )
  }


}

  


export default About;