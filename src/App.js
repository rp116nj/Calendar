import React, {Component} from 'react';
import {Route, Switch, HashRouter } from 'react-router-dom'
import Calendar from './components/Calendar'
import Month from './components/Month'

export default class App extends Component {
  render(){
    return (
      <Calendar>
       <HashRouter>
          <Switch>
            <Route path="/:year/:month" component={Month} />
            <Route path="/" exact component={Month} />
          </Switch>
        </HashRouter>
      </Calendar> 
    )
  }
}


