export type CounterState = {
  data: number
}

const initialState : CounterState = {
  data: 42
}

export default function counterReducer(
  state = initialState,
  action: { type: 'string'}
) {
  switch (action.type) {
    case value:
      
      break
  
    default:
      break
  }

  return state                    
}