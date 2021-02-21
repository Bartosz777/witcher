import React from 'react';
import '../styles/Page.css';
import {Route, Switch} from 'react-router-dom'
import StartPage from '../pages/StartPage'
import Books from '../pages/Books'
import Author from '../pages/Author'
import Movies from '../pages/Movies'
import Games from '../pages/Games'
import ErrorPage from '../pages/ErrorPage'



const Page = () => {
    return ( 
        <Switch>
            <Route path="/" exact={true} component={StartPage}/>
            <Route path="/author" component={Author}/>
            <Route path="/books" component={Books}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/games" component={Games}/>
            <Route component={ErrorPage}/>
        </Switch>
     );
}
 
export default Page;