import React from 'react';
import {Switch, Route} from 'react-router-dom'; 

import Hangoutz from './Hangoutz';
import About from './About'; 

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Hangoutz}/>
            <Route exact path="/about" component={About}/>
        </Switch>    

    </main>    
)


export default Main; 