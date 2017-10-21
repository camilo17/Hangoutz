import React from 'react';
import {Switch, Route} from 'react-router-dom'; 

import Hangoutz from './Hangoutz';
import About from './About'; 
import HangoutDetails from './HangoutDetails'; 
import AddMeetUp from './AddMeetUp'; 
import EditHangout from './EditHangout'; 

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Hangoutz}/>
            <Route exact path="/about/:id" component={About}/>
            <Route exact path="/hangoutz/add" component={AddMeetUp}/>
            <Route exact path="/hangoutz/edit/:id" component={EditHangout}/>
            <Route exact path="/hangoutz/:id" component={HangoutDetails}/>
        </Switch>    

    </main>    
)


export default Main; 