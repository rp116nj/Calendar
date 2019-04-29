import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const headerMonth = (props) => {
  console.log('props', props)
  return(
    <header className="month-header">
      <div className="row">
        <Link to={'/' + props.prevMonth.slug}>prevMonth</Link>
      </div>
      <div className="row">
        <h1>{props.curMonth.name}</h1>
      </div>
      <div className="row">
        <Link to={'/' + props.nextMonth.slug}>nextMonth</Link>
      </div>
    </header>
  )
};

export default headerMonth;