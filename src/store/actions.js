export const CREATE_REMINDER = 'CREATE_REMINDER'
export const UPDATE_REMINDER = 'UPDATE_REMINDER'
export const DELETE_REMINDER = 'DELETE_REMINDER'

// Action creators
const createReminderAction = reminder => {
  return {
    type: CREATE_REMINDER,
    reminder: reminder
  };
};

const updateReminderAction = reminder => {
  return {
    type: UPDATE_REMINDER,
    reminder: reminder
  };
};

const deleteReminderAction = (date, id) => {
  return {
    type: DELETE_REMINDER,
    date: date,
    id: id
  };
};

//Thunks
export const createReminder = payload => {
  return dispatch => {
    dispatch(createReminderAction(payload));
  };
};

export const updateReminder = payload => {
  return dispatch => {
    dispatch(updateReminderAction(payload));
  };
};

export const deleteReminder = (date, id) => {
  return dispatch => {
    dispatch(deleteReminderAction(date, id));
  };
};
