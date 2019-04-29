import React from 'react';

export default class Calendar extends React.Component {
  render() {
    console.log('prrops', this.props)
    return <div className="calendar">{this.props.children}</div>;
  }
}
