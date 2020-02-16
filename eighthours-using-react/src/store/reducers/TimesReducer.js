const initialState = {
  startingTime: 900,
  endingTime: 1700,
}

export default function manageTimes (state = initialState, action) {
  switch (action.type) {
    case 'SET_STARTING_TIME':
      return {...state, startingTime: action.payload}
    case 'SET_ENDING_TIME':
      return {...state, endingTime: action.payload}
    default:
      return state
  }
}
