import React from 'react';
import './index.css';

const reminder = props => (
  <article className="reminder" style={{ background: props.reminder.color }}>
    <div className="tools">
      <button onClick={() => props.handleDeleteReminder(props.reminder.id)}>X
        </button>
      <button onClick={() => props.handleSetEdit(props.reminder)}>Edit
      </button>
    </div>
    <strong>{props.reminder.description}</strong>
    <time>{props.reminder.time}</time>
  </article>
);

export default reminder;
