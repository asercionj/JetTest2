import React from "react";
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Title from "./Title";



const Router =() =>(
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={Title}/>
         
        </Switch>
    </BrowserRouter>
);

export default Router;
