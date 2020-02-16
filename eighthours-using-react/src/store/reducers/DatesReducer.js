const initialState = {
  startingDate: 10071990,
  endingDate: 10072070,
}

export default function manageTimes (state = initialState, action) {
  switch (action.type) {
    case 'SET_STARTING_TIME':
      return {...state, startingDate: action.payload}
    case 'SET_ENDING_TIME':
      return {...state, endingDate: action.payload}
    default:
      return state
  }
}
